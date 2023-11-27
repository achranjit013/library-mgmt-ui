import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <main className="vh-100">{children}</main>

      <Footer />
    </div>
  );
};
