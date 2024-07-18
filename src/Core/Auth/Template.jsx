import React, { useState,useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import ForgotPasswordForm from "./ForgotPasswordForm";
import OtpInput from "./OTPform";

import Logo from "../../assets/logo.png";

const Template = ({
  title,
  description1,
  description2,
  image,
  formType,
  data,
}) => {


  const [loader ,setLoader] = useState(true)
  // console.log(data)
  useEffect(()=>{
    const time =  setTimeout(()=>{
       setLoader(false)
     },1000)
  
   return ()=> clearTimeout(time)
  
  },[loader])  




  const formText =
    formType === "signup"
      ? "SignUp"
      : formType === "forgotPassword"
      ? "Don`t Worry" : formType === "otp"  ? "OTP"
      : "Login";
  return (
    <>
      <div className="grid lg:grid-cols-10 h-screen ">
    { !loader ?   <div className="lg:col-span-6  flex flex-col justify-center items-center relative">
          <p className="text-xl font-bold text-slate-600 absolute top-5 left-5">
            CMT LOGO{" "}
          </p>
          <p className="text-4xl text-orange-600 font-semibold mb-2">
            {formText}
          </p>

          <h1 className="font-bold text-lg text-slate-600 text-center mb-[-1rem]">
            {title}
          </h1>
          {/* <img src={Logo}  className='w-10 mt-10 absolute top-48'/> */}

          {formType === "signup" ? (
            <SignUpForm />
          ) : formType === "forgotPassword" ? (
            <ForgotPasswordForm />
          ) : formType === "otp" ? ( 
            <OtpInput  />
          ) : (
            <LoginForm />
          )}

          <h2 className="font-semibold text-slate-600 text-center text-lg">
            {description1}
          </h2>
          <h2 className="font-semibold text-slate-600 text-center text-lg">
            {description2}
          </h2>
          <h2 className="font-semibold text-slate-600 text-lg">
            {formType === "signup"
              ? "Already have an account?"
              : formType === "forgotPassword"
              ? "Remember your password?"
              : "Don't have an account?"}
            {formType === "signup" ? (
              <Link to="/login">
                <span className="text-blue-600"> Login here</span>
              </Link>
            ) : formType === "forgotPassword" ? (
              <Link to="/login">
                <span className="text-blue-600"> Login here</span>
              </Link>
            ) : (
              <Link to="/signup">
                <span className="text-blue-600"> SignUp here</span>
              </Link>
            )}
          </h2>
        </div> : <div className="lg:col-span-6  flex flex-col justify-center items-center relative">
          <Loader/>
          </div>}
        <div className="lg:col-span-4 hidden lg:flex items-center justify-center h-screen bg-img relative">
          <div className=" h-1/2 flex ">
            <Carousel data={data} />
          </div>
          {/* <div className='absolute top-0 z-10 w-full h-full bg-[#00000073]'> </div> */}
        </div>
      </div>
    </>
  );
};

export default Template;






const Loader = () => {
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div></div>
  )
}
