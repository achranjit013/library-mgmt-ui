import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CustomInput } from "../../components/custom_inputs/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBookAction,
  getABookAction,
  updateBookAction,
} from "./bookAction";

export const UpdateBook = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  // grab the book _id from url
  const { _id } = useParams();

  // get the selected book from store and populate in the form
  const { selectedBook } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    if (_id !== form._id) {
      // use that _id to fetch the book from server
      dispatch(getABookAction(_id));
      setForm(selectedBook);
    }
  }, [_id, dispatch, form._id, selectedBook]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!window.confirm("Are you sure to update?")) {
      return;
    }
    const { __v, updatedAt, isbn, createdAt, ...rest } = form;
    dispatch(updateBookAction(rest));
  };

  const handleOnDelete = async () => {
    if (window.confirm("Are you sure to delete?")) {
      const isDeleted = await dispatch(deleteBookAction(_id));

      isDeleted && navigate("/books");
    }
  };

  const inputs = [
    {
      label: "Book Name",
      name: "name",
      placeholder: "Enter book name",
      type: "text",
      required: true,
      value: form.name,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      placeholder: "Enter url",
      type: "url",
      required: true,
      value: form.thumbnail,
    },
    {
      label: "Book Author",
      name: "author",
      placeholder: "Enter book author",
      type: "text",
      required: true,
      value: form.author,
    },
    {
      label: "Book published year",
      name: "publishYear",
      placeholder: "Enter book published year",
      type: "number",
      required: true,
      value: form.publishYear,
    },
    {
      label: "Book ISBN",
      name: "isbn",
      placeholder: "Enter book isbn",
      type: "text",
      required: true,
      value: form.isbn,
      disabled: true,
    },
    {
      label: "Book description",
      name: "description",
      placeholder: "Enter book description",
      type: "text",
      as: "textarea",
      rows: 5,
      required: true,
      value: form.description,
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
          <h4>Update book details below!</h4>
          <hr />

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" onChange={handleOnChange} required>
              <option value="">-- select one --</option>
              <option value="active" selected={form.status === "active"}>
                active
              </option>
              <option value="inactive" selected={form.status === "inactive"}>
                inactive
              </option>
            </Form.Select>
          </Form.Group>

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid mt-2">
            <Button variant="primary" type="submit">
              Update
            </Button>
          </div>
        </Form>

        <div className=" mt-2">
          <Button variant="danger" type="submit" onClick={handleOnDelete}>
            Delete
          </Button>
        </div>
      </div>
    </UserLayout>
  );
};
