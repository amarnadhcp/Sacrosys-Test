import React from "react";

function TopProduct() {
  return (
    <>
      <div className="w-full flex mt-2 items-center mb-1">
        <h1 className="w-20 text-sm">Chicken si..</h1>
        <span style={{ width: "55%" }} className="bg-blue-200 rounded-r-lg">
          <div
            style={{ width: "100%", height: "8px" }}
            className="h-full bg-blue-500 rounded-r-lg  flex justify-center"
          ></div>
        </span>
        <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
      </div>

      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">Special b..</h1>
        <span style={{ width: "40%" }} className=" bg-blue-200  rounded-r-lg">
          <div
            style={{ width: "100%", height: "8px" }}
            className="h-full bg-indigo-500 rounded-r-lg flex justify-center"
          ></div>
        </span>
        <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">beef bico.</h1>
        <span style={{ width: "30%" }} className=" bg-blue-200 rounded-r-lg ">
          <div
            style={{ width: "100%", height: "8px" }}
            className="h-full bg-rose-400 rounded-r-lg flex justify-center"
          ></div>
        </span>
        <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">beef ka..</h1>
        <span style={{ width: "20%" }} className=" bg-blue-200 rounded-r-lg ">
          <div
            style={{ width: "100%", height: "8px" }}
            className="h-full bg-blue-500 rounded-r-lg flex justify-center"
          ></div>
        </span>
        <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
      </div>
      <div className="w-full flex  items-center mb-1">
        <h1 className="w-20">beef br..</h1>
        <span
          style={{ width: "20%", height: "8px" }}
          className=" bg-blue-200  rounded-r-lg"
        >
          <div
            style={{ width: "100%" }}
            className="h-full bg-blue-500 rounded-r-lg flex justify-center"
          ></div>
        </span>
        <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
      </div>
    </>
  );
}

export default TopProduct;
