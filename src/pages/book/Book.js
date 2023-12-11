import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button } from "react-bootstrap";
import { BookTable } from "../../components/books/BookTable";
import { Link } from "react-router-dom";

export const Book = () => {
  return (
    <UserLayout title="Book">
      <div className="book container-fluid">
        <div className="text-end mb-5">
          <Link to="/new-book">
            <Button variant="primary">Add new book</Button>
          </Link>
        </div>
        <BookTable />
      </div>
    </UserLayout>
  );
};
