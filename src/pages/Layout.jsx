import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
