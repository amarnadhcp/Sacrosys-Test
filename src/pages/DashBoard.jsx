import React from 'react'
import Arrow from "../assets/arrow.svg";
import Calendar from "../assets/calendar.svg";
import LineChartGraph from '../components/graphs/LineChartGraph';
import BarChartGraph from '../components/graphs/BarChartGraph';
import PieCharGraph from '../components/graphs/PieCharGraph';
import TopProduct from '../components/graphs/TopProduct';
import LeastProduct from '../components/graphs/LeastProduct';


function DashBoard() {
  return (
    <>
    <div className="md:flex bg-black">
      <div className="md:w-3/5">
        <div className="md:flex mt-4 gap-x-2 ">
          <div className="rounded-lg p-4 mx-4 text-white" style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)"}} >
            <div className="flex">
              <h1 className="text-xs mr-4">Today Sales</h1>
              <img src={Calendar} alt="" />
            </div>
            <h1 className="text-cyan-300 text-2xl mt-2">
              365.6 <span className="text-white text-xs">AED</span>
            </h1>
            <div className="flex text-green-400">
              <img
                src={Arrow}
                alt=""
                style={{ transform: "rotate(180deg)" }}
              />
              <h1 className="flex items-center gap-x-1 ">
                8%<span className="text-xs">than yesterday</span>
              </h1>
            </div>
          </div>
          <div className="rounded-lg p-4 md:mx-0 mx-4 md:mt-0 mt-2  text-white " style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
            <h1 className="text-xs">Top Sale Time</h1>
            <h1 className="text-yellow-500 flex text-center text-2xl  mt-2">
              365.6 <span className="text-white text-xs mt-3">AED</span>{" "}
            </h1>
            <h1 className="flex items-center">12pm - 3pm</h1>
          </div>
          <div className="rounded-lg p-4 md:mx-0 mx-4 md:mt-0 mt-2 text-white "style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
            <h1 className="text-xs">Door Delivery Sales</h1>
            <h1 className="text-orange-500 text-2xl  mt-2">
              365.6 <span className="text-white text-xs">AED</span>{" "}
            </h1>
            <h1>Bills 08</h1>
          </div>
          <div className="rounded-lg p-4 md:mx-0 mx-4 md:mt-0 mt-2 text-white "style={{ backgroundColor: 'rgba(20, 20, 20, 1)' ,boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)"}}>
            <h1 className="text-xs">Bills & Pax</h1>
            <h1 className="text-rose-500 text-2xl  mt-2">11/5</h1>
          </div>
          <div className="rounded-lg p-4 md:ml-3 md:mx-0 mx-4 md:mt-0 mt-2 text-white "style={{ backgroundColor: 'rgba(20, 20, 20, 1)' ,boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)"}}>
            <h1 className="text-xs">Void</h1>
            <h1 className="text-blue-400 text-2xl  mt-2">0/0</h1>
            <h1>Bills/Items</h1>
          </div>
        </div>
        <div className="md:flex mt-4">
          <div className="flex flex-col mx-4 md:w-8/12 rounded-lg p-4 text-white" style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
            <div className="flex flex-row justify-between">
              <h1 className="font-semibold">Sales Wise Comparison</h1>
              <div className="flex h-7 text-green-400">
                <img
                  src={Arrow}
                  alt=""
                  style={{ transform: "rotate(180deg)" }}
                />
                <h1>3%</h1>
              </div>
            </div>
            <BarChartGraph/>
          </div>
          <div className="md:w-3/12 rounded-lg p-4 md:mr-2 md:mx-0 mx-4 md:mt-0 mt-2  text-white" style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
            <div className="flex flex-col gap-y-2 ">
              <h1 className="font-semibold">Total Purchase</h1>
              <h1>Cash / 23</h1>
              <h1 className="text-violet-500 text-2xl">
                322.61 <span className="text-white text-xs">AED</span>
              </h1>
              <h1>Credit / 11</h1>
              <h1 className="text-violet-500 text-2xl">
                322.61 <span className="text-white text-xs">AED</span>
              </h1>
            </div>
          </div>
          <div className="md:w-3/12 rounded-lg p-4 md:mx-0 mx-4 md:mt-0 mt-2  text-white" style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
            <div className="flex flex-col gap-y-2 ">
              <h1 className="font-semibold">Total Payments</h1>
              <h1>Cash / 23</h1>
              <h1 className="text-red-400 text-2xl">
                322.61 <span className="text-white text-xs">AED</span>
              </h1>
              <h1>Credit / 11</h1>
              <h1 className="text-orange-300 text-2xl">
                322.61 <span className="text-white text-xs">AED</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-3/6">
        <div className="rounded-lg flex justify-center p-4 mx-4 text-white mt-4" style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
          <LineChartGraph />
        </div>
      </div>
    </div>
    <div className="md:flex bg-black">
      <div className="md:w-2/6 rounded-lg md:mx-0 mx-4 md:mt-2 md:ml-4 mt-4 relative text-white" style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
        <h1 className="absolute left-2 top-10 -translate-y-10 font-semibold">
          Collection Distribution
        </h1>
        <h1 className="absolute left-2 top-6">Total Amount</h1>
        <h1 className="absolute left-2 top-10 font-semibold text-lg">
          365.61 AED
        </h1>
        <div className="flex mt-4 absolute left-2 top-16 items-center">
          <div className="w-3 h-3 bg-cyan-500 rounded-sm mr-2"></div>
          <p className="text-xs font-semibold">Cash 40%</p>
        </div>
        <div className="flex mt-4 absolute left-32 top-16 items-center">
          <div className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></div>
          <p  className="text-xs font-semibold">Google Pay 20%</p>
        </div>

         <div className="flex mt-4 absolute left-2 top-24 items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-sm mr-2"></div>
          <p  className="text-xs font-semibold">Credit Card 30%</p>
        </div>
        <div className="flex mt-4 absolute left-32 top-24 items-center">
          <div className="w-3 h-3 bg-violet-500 rounded-sm mr-2"></div>
          <p  className="text-xs font-semibold">Credit 15%</p>
        </div>
        <PieCharGraph />
      </div>
      <div className="md:w-2/6 rounded-lg p-4 md:ml-2 md:mr-2 md:mx-0 mx-4 md:mt-2 text-white mt-4"style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
        <h1 className="font-semibold">Top 5 Selling Product</h1>
        <TopProduct/>
        
      </div>
      <div className="md:w-2/6 rounded-lg p-4 md:mr-4 md:mx-0 mx-4 md:mt-2  text-white mt-4"style={{ backgroundColor: 'rgba(20, 20, 20, 1)',boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.25)" }}>
        <h1 className="font-semibold">Least 5 Selling Product</h1>
        <LeastProduct/>
        
      </div>
    </div>
  </>


  )
}

export default DashBoard