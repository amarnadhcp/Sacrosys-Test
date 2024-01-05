import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Macbook from "../assets/MacBook.svg";
import MacBg from "../assets/MacBg.svg";
import useDarkTheme from "../utils/useDark";
import userRequest from "../utils/userRequest";
import { LoginSchema } from "../validation/yup";
import { useFormikValidation } from "../validation/formik";
import { isAuthenticated } from "../utils/authentication";

// Main Login component
function Login() {
  //  hooks and state variables
  const navigate = useNavigate();
  const [colorTheme, setTheme] = useDarkTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const initialValues = { email: "", password: "" };

   useEffect(() => {
    // Check if the user is already authenticated
    if (isAuthenticated()) {
      console.log("authenticated");
      navigate("/");
    }
  }, [navigate]);

  //  function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // mutation function using useMutation
  const mutation = useMutation({
    mutationFn: (data) => {
      console.log("API called");
      return userRequest.get("/login", data);
    },
    // Handle success logic
    onSuccess: (data) => {
      if (Array.isArray(data.data) && data.data.length > 0) {
        const user = data.data[0];
        if (user && user.email === values.email) {
          if (user.password === values.password) {
            localStorage.setItem("authToken", "dummy_token_" + Date.now());

            localStorage.setItem("authTokenExpiration", (Date.now() + 3 * 60 * 1000).toString());
            navigate("/");
          } else {
            setLoginError("Incorrect password");
          }
        } else {
          setLoginError("Email not found or doesn't match");
        }
      } else {
        setLoginError("Unexpected response structure");
      }
    },
    // Handle error logic
    onError: (error) => {
      setLoginError("Something went wrong");
    },
  });

  //  Formik for form management and validation
  const formik = useFormikValidation(mutation, LoginSchema, initialValues);
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = formik;
 
  // Render the login form and UI
  return (
    <div className="dark:bg-black  light:bg-gray-100 h-screen">
      <div className="max-w-7xl w-full mx-auto">
        <div className="items-center p-4 select-none flex justify-between">
          <h1 className="dark:text-white text-gray-900 text-2xl p-4 cursor-pointer">
            Logo
          </h1>
          <div
            className="cursor-pointer"
            onClick={() => setTheme(colorTheme == "dark" ? "dark" : "light")}
          >
            {colorTheme == "dark" ? (
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 9C7.55556 9 8.02778 8.80556 8.41667 8.41667C8.80556 8.02778 9 7.55556 9 7C9 6.44444 8.80556 5.97222 8.41667 5.58333C8.02778 5.19444 7.55556 5 7 5C6.44444 5 5.97222 5.19444 5.58333 5.58333C5.19444 5.97222 5 6.44444 5 7C5 7.55556 5.19444 8.02778 5.58333 8.41667C5.97222 8.80556 6.44444 9 7 9ZM7 9.66667C6.25727 9.66667 5.62714 9.40791 5.10962 8.89038C4.59209 8.37286 4.33333 7.74273 4.33333 7C4.33333 6.25727 4.59209 5.62714 5.10962 5.10962C5.62714 4.5921 6.25727 4.33333 7 4.33333C7.74273 4.33333 8.37286 4.5921 8.89038 5.10962C9.40791 5.62714 9.66667 6.25727 9.66667 7C9.66667 7.74273 9.40791 8.37286 8.89038 8.89038C8.37286 9.40791 7.74273 9.66667 7 9.66667ZM0.333333 7.33333C0.238889 7.33333 0.159722 7.30134 0.0958333 7.23737C0.0319444 7.1734 0 7.09413 0 6.99955C0 6.90497 0.0319444 6.82585 0.0958333 6.76218C0.159722 6.69851 0.238889 6.66667 0.333333 6.66667H2C2.09444 6.66667 2.17361 6.69866 2.2375 6.76263C2.30139 6.8266 2.33333 6.90587 2.33333 7.00045C2.33333 7.09503 2.30139 7.17415 2.2375 7.23782C2.17361 7.3015 2.09444 7.33333 2 7.33333H0.333333ZM12 7.33333C11.9056 7.33333 11.8264 7.30134 11.7625 7.23737C11.6986 7.1734 11.6667 7.09413 11.6667 6.99955C11.6667 6.90497 11.6986 6.82585 11.7625 6.76218C11.8264 6.69851 11.9056 6.66667 12 6.66667H13.6667C13.7611 6.66667 13.8403 6.69866 13.9042 6.76263C13.9681 6.8266 14 6.90587 14 7.00045C14 7.09503 13.9681 7.17415 13.9042 7.23782C13.8403 7.3015 13.7611 7.33333 13.6667 7.33333H12ZM6.99955 2.33333C6.90497 2.33333 6.82585 2.30139 6.76218 2.2375C6.69851 2.17361 6.66667 2.09444 6.66667 2V0.333333C6.66667 0.238889 6.69866 0.159722 6.76263 0.0958333C6.8266 0.0319444 6.90587 0 7.00045 0C7.09503 0 7.17415 0.0319444 7.23782 0.0958333C7.3015 0.159722 7.33333 0.238889 7.33333 0.333333V2C7.33333 2.09444 7.30134 2.17361 7.23737 2.2375C7.1734 2.30139 7.09413 2.33333 6.99955 2.33333ZM6.99955 14C6.90497 14 6.82585 13.9681 6.76218 13.9042C6.69851 13.8403 6.66667 13.7611 6.66667 13.6667V12C6.66667 11.9056 6.69866 11.8264 6.76263 11.7625C6.8266 11.6986 6.90587 11.6667 7.00045 11.6667C7.09503 11.6667 7.17415 11.6986 7.23782 11.7625C7.3015 11.8264 7.33333 11.9056 7.33333 12V13.6667C7.33333 13.7611 7.30134 13.8403 7.23737 13.9042C7.1734 13.9681 7.09413 14 6.99955 14ZM3.24102 3.68718L2.28077 2.75642C2.21581 2.69402 2.18397 2.61752 2.18525 2.52692C2.18654 2.43632 2.21968 2.35427 2.28467 2.28077C2.35557 2.20727 2.43418 2.17052 2.52052 2.17052C2.60684 2.17052 2.68547 2.20727 2.75642 2.28077L3.7 3.2282C3.77094 3.30171 3.80642 3.38034 3.80642 3.4641C3.80642 3.54787 3.77308 3.6265 3.70642 3.7C3.63975 3.7735 3.56389 3.80747 3.47885 3.80192C3.39381 3.79636 3.31453 3.75812 3.24102 3.68718ZM11.2436 11.7192L10.3 10.7718C10.2291 10.6983 10.1936 10.619 10.1936 10.534C10.1936 10.4489 10.2291 10.3709 10.3 10.3C10.3581 10.2265 10.4308 10.1925 10.518 10.1981C10.6051 10.2036 10.6855 10.2419 10.759 10.3128L11.7192 11.2436C11.7842 11.306 11.816 11.3825 11.8148 11.4731C11.8135 11.5637 11.7803 11.6457 11.7153 11.7192C11.6444 11.7927 11.5658 11.8295 11.4795 11.8295C11.3932 11.8295 11.3145 11.7927 11.2436 11.7192ZM10.3 3.70642C10.2265 3.63975 10.1925 3.56389 10.1981 3.47885C10.2036 3.39381 10.2419 3.31453 10.3128 3.24102L11.2436 2.28077C11.306 2.21581 11.3825 2.18397 11.4731 2.18525C11.5637 2.18654 11.6457 2.21968 11.7192 2.28467C11.7927 2.35557 11.8295 2.43418 11.8295 2.52052C11.8295 2.60684 11.7927 2.68547 11.7192 2.75642L10.7718 3.7C10.6983 3.77094 10.6197 3.80642 10.5359 3.80642C10.4521 3.80642 10.3735 3.77308 10.3 3.70642ZM2.28077 11.722C2.20727 11.6467 2.17052 11.5658 2.17052 11.4795C2.17052 11.3932 2.20727 11.3145 2.28077 11.2436L3.2282 10.3C3.30171 10.2291 3.38098 10.1936 3.46602 10.1936C3.55106 10.1936 3.62906 10.2291 3.7 10.3C3.76496 10.3581 3.79466 10.4308 3.7891 10.518C3.78354 10.6051 3.74957 10.6855 3.68718 10.759L2.75642 11.7192C2.68547 11.7927 2.60684 11.8288 2.52052 11.8276C2.43418 11.8263 2.35427 11.7911 2.28077 11.722Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="flex select-none">
          <div className="relative w-1/2 lg:flex hidden justify-center">
            <img
              className="z-30 absolute -top-10 w-90pt"
              src={Macbook}
              alt=""
            />
            <img
              className="absolute w-80pt dark:opacity-35 opacity-7   0 filter invert dark:invert-0"
              src={MacBg}
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="dark:text-white text-gray-900 text-center px-10 sm:px-48 lg:px-20 m-3 text-sm md:text-md sm:mb-8 sm:mt-12">
              "Welcome to the future of restaurant reporting! We're serving up a
              fresh approach to streamline your restaurant management, making
              data deliciously easy to digest."
            </h1>
            <div className="md:px-10">
              <div
                style={{
                  boxShadow: "0px 0px 50px 0px rgba(255, 255, 255, 0.25)",
                }}
                className="dark:bg-grayDark1 bg-gray-300 w-90pt mx-auto p-4 sm:p-8 rounded-3xl flex flex-col gap-4 0 md:grid-cols-2"
              >
                <div>
                  <input
                    name="email"
                    type="text"
                    className="dark:bg-grayDark2 bg-gray-100 dark:text-white text-gray-900 focus:outline-dashed text-sm rounded-xl  block w-full p-3 sm:p-5"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && errors.email}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-sm py-1 text-center">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="relative">
                  {passwordVisible ? (
                    <svg
                      onClick={togglePasswordVisibility}
                      className="absolute cursor-pointer w-5 -top-2 sm:top-0 right-5 z-30"
                      xmlns="http://www.w3.org/2000/svg"
                      width="61"
                      height="61"
                      viewBox="0 0 61 61"
                      fill="none"
                    >
                      <path
                        d="M37.5727 30.4089C37.5727 34.5512 34.2149 37.9089 30.0727 37.9089C25.9307 37.9089 22.5728 34.5512 22.5728 30.4089C22.5728 26.2667 25.9307 22.9089 30.0727 22.9089C34.2149 22.9089 37.5727 26.2667 37.5727 30.4089Z"
                        stroke="black"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.0741 12.9089C18.8799 12.9089 9.40421 20.2661 6.21851 30.4089C9.40416 40.5517 18.8799 47.9089 30.0741 47.9089C41.2681 47.9089 50.7438 40.5517 53.9296 30.4089C50.7438 20.2662 41.2681 12.9089 30.0741 12.9089Z"
                        stroke="black"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      onClick={togglePasswordVisibility}
                      className="absolute cursor-pointer w-5 -top-2 sm:top-0 right-5 z-30"
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M7.49755 7.5L52.4975 52.5M24.6083 24.7841C23.3017 26.134 22.4976 27.973 22.4976 30C22.4976 34.1423 25.8555 37.5 29.9975 37.5C32.0538 37.5 33.9168 36.6725 35.2715 35.3325M16.2476 16.6179C11.4993 19.7509 7.88263 24.4599 6.14258 30C9.3282 40.1427 18.804 47.5 29.998 47.5C34.9703 47.5 39.6035 46.0485 43.497 43.546M27.4975 12.6235C28.32 12.5418 29.1543 12.5 29.998 12.5C41.1923 12.5 50.668 19.8573 53.8535 30C53.1518 32.235 52.1443 34.3345 50.8805 36.25"
                        stroke="black"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                  <input
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    className="relative dark:bg-grayDark2 bg-gray-100 darK:text-white text-gray-900 text-sm focus:outline-dashed rounded-xl  block w-full py-3 ps-3 pe-16 sm:ps-5 sm:py-5"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && errors.password}
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-sm py-1 text-center">
                      {errors.password}
                    </div>
                  )}
                </div>
                {loginError && (
                  <div className="text-red-500 text-sm py-1 text-center">
                    {loginError}
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  className="text-white  bg-black font-medium rounded-xl text-lg w-full sm:w-auto p-3 sm:px-6 sm:py-4 text-center"
                >
                  Login
                </button>
                <p className="text-center text-xs sm:text-sm w-[20rem] mx-auto dark:text-white text-gray-900">
                  By continuing. you agree to (name)’s{" "}
                  <span className="font-semibold">Terms of service</span> and{" "}
                  <span className="font-semibold">Privacy policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
