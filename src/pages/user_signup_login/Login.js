import React, { useRef } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom_inputs/CustomInput";
import { toast } from "react-toastify";
import { loginUser } from "../../helper/axiosHelper";

export const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

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

    const { status, message } = await loginUser({ email, password });
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
