import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";
import Index from "../../Pages/index";
import ForgotPassword from "../../Pages/ForgotPassword";
import OTP from "../../Pages/OTP";

const HomeRoute = () => {
   

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP/>}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default HomeRoute;
