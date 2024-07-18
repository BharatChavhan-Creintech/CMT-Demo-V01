import React from 'react'
import Template from '../Core/Auth/Template'
import { loginData } from '../data/authData'
const OTP = () => {
  return (
    <>
        <Template
          title="Enter Your OTP"
          description1="A one-time password has been sent to your registered mobile number."
          description2="Please enter the OTP to proceed."
          image={"path/to/otp-image.jpg"}
          formType="otp"
         data={loginData}
    />
    </>
 
  )
}

export default OTP