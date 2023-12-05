import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useSelector } from "react-redux";

export const Book = () => {
  const { user } = useSelector((state) => state.adminInfo);
  return user?.role === "admin" ? (
    <UserLayout title="Book">Book</UserLayout>
  ) : (
    <h1>Unauthorized</h1>
  );
};
