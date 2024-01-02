import React from "react";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";

function userRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default userRoutes;
