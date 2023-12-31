import axios from "axios";

const rootEP = process.env.REACT_APP_ROOTAPI;
const userEP = rootEP + "/users";
const bookEP = rootEP + "/books";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

const axiosProcessor = async (obj) => {
  const { isPrivate, refreshToken } = obj;
  if (isPrivate) {
    obj.headers = {
      Authorization: refreshToken ? getRefreshJWT() : getAccessJWT(),
    };
  }

  try {
    const response = await axios(obj);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message;
    if (errorMessage?.includes("jwt expired")) {
      // get new access token
      const { accessJWT } = await getNewAccessJWT();
      if (accessJWT) {
        sessionStorage.setItem("accessJWT", accessJWT);
      }
      // continue with previous request
      return axiosProcessor(obj);
    }

    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postAdminUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userEP + "/admin-user",
    data,
  });
};

export const loginUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userEP + "/login",
    data,
  });
};

export const logoutUser = async (data) => {
  return axiosProcessor({
    method: "post",
    url: userEP + "/logout",
    data,
  });
};

export const getUser = async () => {
  return axiosProcessor({
    method: "get",
    url: userEP,
    isPrivate: true,
  });
};

export const getNewAccessJWT = async () => {
  return axiosProcessor({
    method: "get",
    url: userEP + "/get-accessjwt",
    isPrivate: true,
    refreshToken: true,
  });
};

// book api
export const postBook = async (data) => {
  return axiosProcessor({
    method: "post",
    url: bookEP,
    data,
    isPrivate: true,
  });
};

export const getBooks = async (_id) => {
  return axiosProcessor({
    method: "get",
    url: _id ? bookEP + "/" + _id : bookEP,
    isPrivate: true,
  });
};

export const updateBook = async (data) => {
  return axiosProcessor({
    method: "put",
    url: bookEP,
    data,
    isPrivate: true,
  });
};

export const deleteBook = async (_id) => {
  return axiosProcessor({
    method: "delete",
    url: bookEP + "/" + _id,
    isPrivate: true,
  });
};
