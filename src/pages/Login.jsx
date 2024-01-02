import React from 'react'
import Light from "../assets/light.svg"
function Login() {
  return (
    <div className="bg-black h-screen">
      <div className="flex justify-between">
        <h1 className="text-white p-4">Logo</h1>
        <img src={Light} className="p-4" alt="" />
      </div>
      <div className="md:flex">
        <div className="w-1/2 md:flex hidden justify-center">
          {/* <img src={Macbook} alt="" /> */}
        </div>
        <div className="md:w-1/2">
          <h1 className="text-white w-full mb-8 mt-12">
            "Welcome to the future of restaurant reporting! We're serving up a <br />
            fresh approach to streamline your restaurant management, making  
            <span className="flex md:ml-32">data deliciously easy to digest."</span>
          </h1>
          <div className="md:px-20">
          <div className="bg-gray-700 p-8 rounded-lg flex flex-col gap-4 md:mr-40 md:grid-cols-2">
            <div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
              Login
            </button>
            <p className="text-center text-white">
              By continuing. you agree to (name)’s Terms of service and Privacy
              policy
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login