import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useSelector } from "react-redux";

export const BurrowHistory = () => {
  const { user } = useSelector((state) => state.adminInfo);
  return user?.role === "admin" ? (
    <UserLayout title="Burrow History">BurrowHistory</UserLayout>
  ) : (
    <h1>Unauthorized</h1>
  );
};
