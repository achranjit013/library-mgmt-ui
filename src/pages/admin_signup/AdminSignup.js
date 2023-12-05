import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom_inputs/CustomInput";
import { postAdminUser } from "../../helper/axiosHelper";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const initialFormState = {
  fname: "",
  lname: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const AdminSignup = () => {
  const { user } = useSelector((state) => state.adminInfo);
  const inputs = [
    {
      label: "First name",
      name: "fname",
      placeholder: "Enter first name",
      type: "text",
      required: true,
    },
    {
      label: "Last name",
      name: "lname",
      placeholder: "Enter last name",
      type: "text",
      required: true,
    },
    {
      label: "Phone No",
      name: "phone",
      placeholder: "Enter phone number",
      type: "number",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Enter email",
      type: "email",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      placeholder: "*********",
      type: "password",
      required: true,
    },
    {
      label: "Confirm password",
      name: "confirmPassword",
      placeholder: "*********",
      type: "password",
      required: true,
    },
  ];

  const [form, setForm] = useState(initialFormState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return alert(
        "Password do not match! Please try again with correct password."
      );
    }

    const pending = postAdminUser(rest);

    toast.promise(pending, {
      pending: "Please wait!",
    });

    const { status, message } = await pending;
    toast[status](message, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  if (user?.role !== "admin") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <div className="p-3">
      <Form
        className="form-center border rounded shadow-lg p-4"
        onSubmit={handleOnSubmit}
      >
        <h2>Create new admin</h2>
        <hr />

        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid mt-2">
          <Button variant="primary" type="submit">
            Create new admin
          </Button>
        </div>
      </Form>
    </div>
  );
};
