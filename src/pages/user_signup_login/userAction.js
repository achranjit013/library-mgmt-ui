import { getNewAccessJWT, getUser, logoutUser } from "../../helper/axiosHelper";
import { setUser } from "./userSlice";

export const getUserAction = () => async (dispatch) => {
  const { status, message, user } = await getUser();

  if (status === "success") {
    // send user to the store
    dispatch(setUser(user));
  }
};

// let login user automatically
export const autoLogin = () => async (dispatch) => {
  // check if we have accessJWT, if so use get user and mount in the state
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (!accessJWT && refreshJWT) {
    const response = await getNewAccessJWT();

    if (response?.accessJWT) {
      sessionStorage.setItem("accessJWT", response.accessJWT);
      dispatch(getUserAction());
    }
  }

  dispatch(getUserAction());
};

// log out
export const logoutAction = (email) => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");

  // clear user state
  dispatch(setUser({}));

  // clear browser storage
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");

  // delete both jwts from server - both tables
  await logoutUser({ email, accessJWT });
};
