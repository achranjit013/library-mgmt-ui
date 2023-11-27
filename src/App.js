import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/user_signup_login/Login";
import { Signup } from "./pages/user_signup_login/Signup";
import { AdminSignup } from "./pages/admin_signup/AdminSignup";
import { Home } from "./pages/home/Home";

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
      </Routes>
    </>
  );
}

export default App;
