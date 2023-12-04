import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../../sidebar/Sidebar";

export const UserLayout = ({ title, children }) => {
  return (
    <div className="d-flex">
      <div className="bg-dark text-light side-menu">
        <Sidebar />
      </div>
      <div className="right-content w-100">
        <Header />
        <div className="p-3">
          <h3>{title}</h3>
          <hr />
        </div>
        <main className="vh-100">{children}</main>
        <Footer />
      </div>
    </div>
  );
};
