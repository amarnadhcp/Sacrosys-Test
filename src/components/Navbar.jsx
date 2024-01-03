import React, { useState } from "react";
import Light from "../assets/light.svg";
import Arrow from "../assets/arrow.svg";
import Excel from "../assets/excel.svg";
import Refresh from "../assets/refresh.svg";

function Navbar() {
  return(
    <div className="bg-black w-full">
    <div className="flex justify-between p-4 mx-2">
      <div className="flex items-center">
        <img src={Arrow} alt="" />
        <h1 className="text-white ml-2">Branch Name</h1>
      </div>
      <div className="md:flex hidden gap-x-8 items-center ml-16">
        <div className="bg-white rounded-md">
          <h1 className="p-2 font-bold">Dashboard</h1>
        </div>
        <h1 className="text-white">Sales</h1>
        <h1 className="text-white">Payment</h1>
        <h1 className="text-white">Tax</h1>
        <h1 className="text-white">MIS</h1>
        <h1 className="text-white">Purchase Entry</h1>
      </div>
      <div className="md:flex hidden items-center ml-16">
        <h1 className="text-white mr-2">Export to excel</h1>
        <img src={Excel} alt="" />
      </div>
      <div className="md:flex hidden items-center">
      <h1 className="text-white text-xs mr-2">Last updated time 09-Aug-2023 08:09 AM</h1>
      <img src={Refresh} alt="" />
      </div>
      <div className="flex items-center">
      <img src={Light} alt="" />
      </div>
    </div>
  </div>

  )
}

export default Navbar;
