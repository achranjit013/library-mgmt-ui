import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.adminInfo);

  return (
    <div className="p-2">
      <div className="top mt-5">
        {user?.role === "admin" ? "CL-Admin" : "CL-Students"}
      </div>
      <hr />
      <div className="bottom">
        <ul className="list-unstyled">
          {user?.role === "admin" && (
            <>
              <li className="mb-2">
                <Link
                  to="/books"
                  className="nav-link d-flex align-items-center gap-2"
                >
                  <MdOutlineLibraryBooks />
                  Books
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/students"
                  className="nav-link d-flex align-items-center gap-2"
                >
                  <PiStudentBold />
                  Students
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/burrow-history"
                  className="nav-link d-flex align-items-center gap-2"
                >
                  <FaHistory />
                  Burrow History
                </Link>
              </li>
            </>
          )}
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="nav-link d-flex align-items-center gap-2"
            >
              <TbLayoutDashboard />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/my-books"
              className="nav-link d-flex align-items-center gap-2"
            >
              <FaHistory />
              My Books
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/my-profile"
              className="nav-link d-flex align-items-center gap-2"
            >
              <CgProfile />
              My profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
