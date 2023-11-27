import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom_inputs/CustomInput";

export const AdminSignup = () => {
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
      required: true,
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
  return (
    <div className="p-3">
      <Form className="form-center border rounded shadow-lg p-4">
        <h2>Create new admin</h2>
        <hr />

        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} />
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
