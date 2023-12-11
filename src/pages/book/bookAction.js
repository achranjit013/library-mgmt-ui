import { toast } from "react-toastify";
import {
  deleteBook,
  getBooks,
  postBook,
  updateBook,
} from "../../helper/axiosHelper";
import { setABook, setBooks } from "./bookSlice";

export const getAllBookAction = () => async (dispatch) => {
  const { status, books } = await getBooks();
  if (status === "success") {
    dispatch(setBooks(books));
  }
};

export const getABookAction = (_id) => async (dispatch) => {
  const { status, books } = await getBooks(_id);
  if (status === "success") {
    dispatch(setABook(books));
  }
};

export const postNewBookAction = (bookObj) => async (dispatch) => {
  const pending = postBook(bookObj);
  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the function that fetches all the books and update the store
    dispatch(getAllBookAction());
    // return true;
  }
};

export const updateBookAction = (bookObj) => async (dispatch) => {
  const pending = updateBook(bookObj);
  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the function that fetches all the books and update the store
    dispatch(getAllBookAction());
    dispatch(setABook({}));
  }
};

export const deleteBookAction = (_id) => async (dispatch) => {
  const pending = deleteBook(_id);
  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the function that fetches all the books and update the store
    dispatch(getAllBookAction());
    return true;
  }
};
