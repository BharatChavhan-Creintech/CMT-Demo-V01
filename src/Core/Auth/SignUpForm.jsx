import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpData } from "../validation"; 
import { useNavigate } from "react-router-dom";

const initialValues = {
  name:"",
  email:"",
  password:"",
  password_confirmation:""
}

const SignUpForm = () => {
 const navigate = useNavigate()

const {values,errors,touched,handleBlur,handleSubmit,handleChange} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpData,
    onSubmit:(values,action)=>{
      console.log(values)
      navigate('/otp')
      action.resetForm()
    }

})




  return (
    <>
      <div className="md:px-5 md:w-1/2 font-libre_franklin">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
            <form method="POST" onSubmit={handleSubmit} >
              <div className="lg:px-5">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-5 text-gray-700"
                >
                  Full name
                </label>
                <div className="mt-1 relative rounded-md ">
                  <input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                 {errors.name && touched.name ? ( <p className="mt-1 font-mono text-md text-red-600">{errors.name}</p>):null}
                </div>
              </div>
              <div className="mt-6 lg:px-5">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md ">
                  <input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                 {errors.email && touched.email ? ( <p className="mt-1 font-mono text-md text-red-600">{errors.email}</p>):null}
                </div>
              </div>

              <div className="mt-6 lg:px-5">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md ">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                 {errors.password && touched.password ? ( <p className="mt-1 font-mono text-md text-red-600">{errors.password}</p>):null}

                </div>
              </div>

              <div className="mt-6 lg:px-5">
                <label
                  htmlFor="password_confirmation"
                  className="block text-lg font-medium leading-5 text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 rounded-md ">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Confirm password"
                    value={values.password_confirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="appearance-none block w-full px-3 py-2 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                  />
                 {errors.password_confirmation && touched.password_confirmation ? ( <p className="mt-1 font-mono text-md text-red-600">{errors.password_confirmation}</p>):null}

                </div>
              </div>

              <div className="mt-6 lg:px-5 ">
                <span className=" w-full rounded-md  flex justify-center items-center ">
                  
                  <button
                    type="submit"
                    className="w-[70%] rounded-md border border-current px-8 py-3 text-lg font-bold transition hover:scale-110 hover:shadow-xl  text-white bg-teal-500 "
                  >
                    SignUp
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
