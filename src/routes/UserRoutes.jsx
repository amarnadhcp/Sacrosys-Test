import React from "react";
import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Layout from "../pages/Layout";


function userRoutes() {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route exact path="/" element={<Layout/>} >
        <Route index element={<DashBoard/>} />
      </Route>
    </Routes>
  );
}

export default userRoutes;
