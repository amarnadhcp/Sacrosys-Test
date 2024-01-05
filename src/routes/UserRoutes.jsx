import React from "react";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";

function userRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
}

export default userRoutes;
