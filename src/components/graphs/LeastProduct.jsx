import React from 'react'

function LeastProduct() {
  return (
    <>
    <div className="w-full flex mt-2 items-center mb-2">
      <h1 className="w-20">Open item</h1>
      <span
        style={{ width: "55%" }}
        className=" bg-blue-200 rounded-r-lg "
      >
        <div
          style={{ width: "100%" }}
          className="h-full bg-violet-500 rounded-r-lg  flex justify-center"
        >
          <span className="text-white text-xs mx-2">99 AED</span>
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>

    </div>
    <div className="w-full flex  items-center mb-2">
      <h1 className="w-20">Delivery</h1>
      <span
        style={{ width: "40%" }}
        className=" bg-blue-200  rounded-r-lg"
      >
        <div
          style={{ width: "100%" }}
          className="h-full bg-indigo-500 rounded-r-lg flex justify-center"
        >
          <span className="text-white text-xs mx-2">86 AED</span>
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>

    </div>
    <div className="w-full flex  items-center mb-2">
      <h1 className="w-20">Sprite</h1>
      <span
        style={{ width: "30%" }}
        className=" bg-blue-200 rounded-r-lg "
      >
        <div
          style={{ width: "100%" }}
          className="h-full bg-rose-400 rounded-r-lg flex justify-center"
        >
          <span className="text-white text-xs mx-2">68 AED</span>
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>

    </div>
    <div className="w-full flex  items-center mb-2">
      <h1 className="w-20">Budget m..</h1>
      <span
        style={{ width: "20%" }}
        className=" bg-blue-200 rounded-r-lg "
      >
        <div
          style={{ width: "100%" }}
          className="h-full bg-blue-500 rounded-r-lg flex justify-center"
        >
          <span className="text-white text-xs mx-2">55 AED</span>
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>

    </div>
    <div className="w-full flex  items-center mb-2">
      <h1 className="w-20">Goto ser..</h1>
      <span
        style={{ width: "20%" }}
        className=" bg-blue-200  rounded-r-lg"
      >
        <div
          style={{ width: "100%" }}
          className="h-full bg-blue-500 rounded-r-lg flex justify-center"
        >
          <span className="text-white text-xs mx-2">51 AED</span>
        </div>
      </span>
      <span className="ml-2 text-xs flex text-center">55.5 AED/5 pc</span>

    </div>
  </>

  )
}

export default LeastProduct