import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  console.log(books);
  return (
    <div className="">
      <p className="d-flex justify-content-between">
        <label htmlFor="">10 books found!</label>
        <div>
          <Form.Control
            type="text"
            name=""
            id=""
            placeholder="search by book name..."
          />
        </div>
      </p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Info</th>
            <th>Summary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books?.map(
            (
              {
                thumbnail,
                _id,
                name,
                author,
                description,
                isbn,
                publishYear,
                status,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={thumbnail} alt="thumbnail" width={"150px"} />
                </td>
                <td>
                  <h3>{name}</h3>
                  <p>
                    <span
                      className={
                        status === "active"
                          ? "bg-success p-2 rounded text-light"
                          : "bg-danger p-2 rounded text-light"
                      }
                    >
                      {status}
                    </span>
                  </p>
                  <p>
                    {author} · {publishYear}
                  </p>
                </td>
                <td>
                  <p>{description.slice(0, 100)}...</p>
                </td>
                <td>
                  <Link to={`/edit-book/${_id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
