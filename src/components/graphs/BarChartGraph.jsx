import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function BarChartGraph() {
  return (
    <>
      <div className="w-full flex  items-center mb-2">
        <h1 className="w-20">Dining</h1>
        <span style={{ width: "75%" }} className=" bg-blue-200 ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-purple-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">99 AED</span>
          </div>
        </span>
      </div>
      <div className="w-full flex  items-center mb-2">
        <h1 className="w-20">Takeaway</h1>
        <span style={{ width: "70%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-purple-600  flex justify-center"
          >
            <span className="text-white text-xs mx-2">86 AED</span>
          </div>
        </span>
      </div>
      <div className="w-full flex  items-center mb-2">
        <h1 className="w-20">Delivery</h1>
        <span style={{ width: "60%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-pink-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">68 AED</span>
          </div>
        </span>
      </div>
      <div className="w-full flex  items-center mb-2">
        <h1 className="w-20">Talabat</h1>
        <span style={{ width: "50%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-yellow-300 flex justify-center"
          >
            <span className="text-white text-xs mx-2">55 AED</span>
          </div>
        </span>
      </div>
      <div className="w-full flex  items-center mb-2">
        <h1 className="w-20">Zomato</h1>
        <span style={{ width: "40%" }} className=" bg-yellow-400 ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-yellow-400 flex justify-center"
          >
            <span className="text-white text-xs mx-2">51 AED</span>
          </div>
        </span>
      </div>
      <div className="w-full flex items-center mb-2">
        <h1 className="w-20">Swiggy</h1>
        <span style={{ width: "30%" }} className=" bg-blue-200 ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-pink-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">45 AED</span>
          </div>
        </span>
      </div>
    </>
  );
}

export default BarChartGraph;
