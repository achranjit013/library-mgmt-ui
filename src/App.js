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

function App() {
  return (
    <>
      <Routes>
        {/* public pages */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* private pages */}
        <Route path="/admin-signup" element={<AdminSignup />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/books" element={<Book />}></Route>
        <Route path="/students" element={<Student />}></Route>
        <Route path="/burrow-history" element={<BurrowHistory />}></Route>
        <Route path="/my-profile" element={<MyProfile />}></Route>
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
