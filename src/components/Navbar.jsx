import React from "react";
import Light from "../assets/light.svg";
import Arrow from "../assets/arrow_back.svg";
import Excel from "../assets/excel.svg";
import Refresh from "../assets/refresh.svg";
import useDarkTheme from "../utils/useDark";

function Navbar() {
  const [colorTheme, setTheme] = useDarkTheme();

  return (
    <div className="dark:bg-black bg-gray-300 w-full">
      <div className="flex justify-between p-4 mx-2">
        <div className="flex items-center">
          <img src={Arrow} alt="" />
          <h1 className="dark:text-white text-gray-900  ml-2">Branch Name</h1>
        </div>
        <div className="md:flex hidden gap-x-8 items-center ml-16">
          <div className="bg-white rounded-md">
            <h1 className="p-2 font-bold">Dashboard</h1>
          </div>
          <h1 className="dark:text-white text-gray-900 ">Sales</h1>
          <h1 className="dark:text-white text-gray-900 ">Payment</h1>
          <h1 className="dark:text-white text-gray-900 ">Tax</h1>
          <h1 className="dark:text-white text-gray-900 ">MIS</h1>
          <h1 className="dark:text-white text-gray-900 ">Purchase Entry</h1>
        </div>
        <div className="md:flex hidden items-center ml-16 cursor-pointer">
          <h1 className="dark:text-white text-gray-900 mr-2">Export to excel</h1>
          <img src={Excel} alt="" />
        </div>
        <div className="flex items-center">
          <h1 className="dark:text-white text-gray-900 text-xs mr-2">
            Last updated time 09-Aug-2023 08:09 AM
          </h1>
          <img
            src={Refresh}
            alt=""
            className="cursor-pointer"
          />
        </div>
        <div
          className="cursor-pointer flex items-center"
          onClick={() => setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))}
        >
          {colorTheme === "dark" ? (
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5782 0.601195C18.1085 -0.53263 20.3005 2.02862 19.5089 4.25244C16.8231 11.7982 18.4733 20.3685 24.0483 25.9412C29.6515 31.5425 38.2785 33.1887 45.8488 30.4547C48.0515 29.6592 50.5433 31.8297 49.4543 34.2997C49.422 34.3727 49.3895 34.4455 49.3568 34.5185C47.4185 38.8165 44.318 42.8585 40.3068 45.5685C36.0313 48.457 30.9893 50.0002 25.829 50.0002H25.8265C19.8259 49.9937 14.0143 47.9007 9.38793 44.0802C4.76158 40.2597 1.60863 34.9492 0.469829 29.0592C-0.668971 23.1692 0.277354 17.0668 3.1465 11.7979C5.86645 6.80302 10.4402 2.92144 15.5038 0.634645L15.5782 0.601195Z"
                fill="#323232"
              />
            </svg>
          ) : (
            <img src={Light} alt="" className="cursor-pointer w-4 align-middle" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
