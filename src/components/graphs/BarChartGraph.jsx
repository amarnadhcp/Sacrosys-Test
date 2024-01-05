import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function BarChartGraph() {
  return (
    <>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">Dining</h1>
        <span style={{ width: "65%" }} className=" bg-blue-200 ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-violet-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">99 AED</span>
          </div>
        </span>
        <span className="text-white text-xs mx-2">10%</span>

      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">Takeaway</h1>
        <span style={{ width: "60%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-indigo-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">86 AED</span>
          </div>
        </span>
        <span className="text-white text-xs mx-2">10%</span>

      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">Delivery</h1>
        <span style={{ width: "60%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-rose-400  flex justify-center"
          >
            <span className="text-white text-xs mx-2">68 AED</span>
          </div>
        </span>
        <span className="text-white text-xs mx-2">10%</span>

      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">Talabat</h1>
        <span style={{ width: "50%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-blue-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">55 AED</span>
          </div>
        </span>
        <span className="text-white text-xs mx-2">10%</span>

      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">Zomato</h1>
        <span style={{ width: "40%" }} className=" bg-blue-200  ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-blue-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">51 AED</span>
          </div>
        </span>
        <span className="text-white text-xs mx-2">10%</span>

      </div>
      <div className="w-full flex items-center mb-1">
        <h1 className="w-20">Swiggy</h1>
        <span style={{ width: "30%" }} className=" bg-blue-200 ">
          <div
            style={{ width: "100%" }}
            className="h-full bg-blue-500  flex justify-center"
          >
            <span className="text-white text-xs mx-2">45 AED</span>
          </div>
        </span>
        <span className="text-white text-xs mx-2">10%</span>

      </div>
    </>

  );
}

export default BarChartGraph;
