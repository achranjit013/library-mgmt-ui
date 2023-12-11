import React, { useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/custom_inputs/CustomInput";
import { useDispatch } from "react-redux";
import { postNewBookAction } from "./bookAction";

export const NewBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    console.log(book);
    e.preventDefault();
    // const isAdded = await dispatch(postNewBookAction(book));
    dispatch(postNewBookAction(book));

    // isAdded && navigate("/books");
  };

  const inputs = [
    {
      label: "Book Name",
      name: "name",
      placeholder: "Enter book name",
      type: "text",
      required: true,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      placeholder: "Enter url",
      type: "url",
      required: true,
    },
    {
      label: "Book Author",
      name: "author",
      placeholder: "Enter book author",
      type: "text",
      required: true,
    },
    {
      label: "Book published year",
      name: "publishYear",
      placeholder: "Enter book published year",
      type: "number",
      required: true,
    },
    {
      label: "Book ISBN",
      name: "isbn",
      placeholder: "Enter book isbn",
      type: "text",
      required: true,
    },
    {
      label: "Book description",
      name: "description",
      placeholder: "Enter book description",
      type: "text",
      as: "textarea",
      rows: 5,
      required: true,
    },
  ];

  return (
    <UserLayout title="Add new book">
      <div className="container-fluid">
        <Link to="/books">
          <Button variant="secondary">&lt; Back</Button>
        </Link>
      </div>

      <div className="p-3">
        <Form
          className="form-center border rounded shadow-lg p-4"
          onSubmit={handleOnSubmit}
        >
          <h4>Enter book details below!</h4>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};
