import React from 'react'

function LeastProduct() {
  return (
    <>
    <div className="w-full flex mt-2 items-center mb-1">
      <h1 className="w-20">Open item</h1>
      <span style={{ width: "55%" }} className=" bg-blue-200 rounded-r-lg ">
        <div
          style={{ width: "100%",height: "8px"  }}
          className="h-full bg-purple-700 rounded-r-lg  flex justify-center"
        >
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
    </div>
    <div className="w-full flex  items-center mb-1">
      <h1 className="w-20">Delivery</h1>
      <span style={{ width: "40%" }} className=" bg-blue-200  rounded-r-lg">
        <div
          style={{ width: "100%",height: "8px" }}
          className="h-full bg-indigo-500 rounded-r-lg flex justify-center"
        >
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
    </div>
    <div className="w-full flex  items-center mb-1">
      <h1 className="w-20">Sprite</h1>
      <span style={{ width: "30%" }} className=" bg-blue-200 rounded-r-lg ">
        <div
          style={{ width: "100%",height: "8px" }}

          className="h-full bg-rose-400 rounded-r-lg flex justify-center"
        >
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
    </div>
    <div className="w-full flex  items-center mb-1">
      <h1 className="w-20">Budget m..</h1>
      <span style={{ width: "20%" }} className=" bg-blue-200 rounded-r-lg ">
        <div
          style={{ width: "100%",height: "8px" }}

          className="h-full bg-blue-500 rounded-r-lg flex justify-center"
        >
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
    </div>
    <div className="w-full flex  items-center mb-1">
      <h1 className="w-20">Goto ser..</h1>
      <span style={{ width: "20%" }} className=" bg-blue-200  rounded-r-lg">
        <div
          style={{ width: "100%" ,height: "8px"}}
          className="h-full bg-blue-500 rounded-r-lg flex justify-center"
        >
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>
    </div>
  </>



  )
}

export default LeastProduct