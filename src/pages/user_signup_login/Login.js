import React, { useEffect, useRef } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom_inputs/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";
import { autoLogin, getUserAction } from "./userAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.adminInfo);
  const fromLocation =
    location?.state?.from?.location?.pathname || "/dashboard";

  useEffect(() => {
    // navigate to dashboard after login successfull
    user?._id && navigate(fromLocation);
    !user?._id && dispatch(autoLogin());
  }, [user?._id, navigate, dispatch]);

  const inputs = [
    {
      label: "Email",
      name: "email",
      placeholder: "Enter email",
      type: "email",
      required: true,
      passRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "*********",
      type: "password",
      required: true,
      passRef: passwordRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Please insert both email and password!");
    }

    const { status, message, jwts } = await loginUser({ email, password });

    if (status === "success") {
      const { accessJWT, refreshJWT } = jwts;
      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);

      // fetch user info and redirect to dashboard
      dispatch(getUserAction());
      return;
    }

    toast[status](message);
  };

  return (
    <MainLayout>
      <div className="p-3">
        <Form
          className="form-center border rounded shadow-lg p-4"
          onSubmit={handleOnSubmit}
        >
          <h2>Admin Login</h2>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </MainLayout>
  );
};
