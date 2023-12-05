import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useSelector } from "react-redux";

export const Student = () => {
  const { user } = useSelector((state) => state.adminInfo);
  return user?.role === "admin" ? (
    <UserLayout title="Students">Student</UserLayout>
  ) : (
    <h1>Unauthorized</h1>
  );
};
