import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/user_signup_login/Login";
import { Signup } from "./pages/user_signup_login/Signup";
import { AdminSignup } from "./pages/admin_signup/AdminSignup";
import { Home } from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Book } from "./pages/book/Book";
import { Student } from "./pages/student/Student";
import { BurrowHistory } from "./pages/burrow-history/BurrowHistory";
import { MyProfile } from "./pages/my-profile/MyProfile";
import {
  AdminPrivateRouter,
  PrivateRouter,
} from "./components/private-router/PrivateRouter";
import { MyBooks } from "./pages/my-books/MyBooks";
import { NewBook } from "./pages/book/NewBook";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBookAction } from "./pages/book/bookAction";
import { UpdateBook } from "./pages/book/UpdateBook";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookAction());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* private pages */}

        <Route
          path="/admin-signup"
          element={
            <PrivateRouter>
              <AdminSignup />
            </PrivateRouter>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route
          path="/books"
          element={
            <AdminPrivateRouter>
              <Book />
            </AdminPrivateRouter>
          }
        />
        <Route
          path="/new-book"
          element={
            <AdminPrivateRouter>
              <NewBook />
            </AdminPrivateRouter>
          }
        />
        <Route
          path="/edit-book/:_id"
          element={
            <AdminPrivateRouter>
              <UpdateBook />
            </AdminPrivateRouter>
          }
        />
        <Route
          path="/my-books"
          element={
            <PrivateRouter>
              <MyBooks />
            </PrivateRouter>
          }
        />
        <Route
          path="/students"
          element={
            <PrivateRouter>
              <Student />
            </PrivateRouter>
          }
        />
        <Route
          path="/burrow-history"
          element={
            <PrivateRouter>
              <BurrowHistory />
            </PrivateRouter>
          }
        />
        <Route
          path="/my-profile"
          element={
            <PrivateRouter>
              <MyProfile />
            </PrivateRouter>
          }
        />
      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
