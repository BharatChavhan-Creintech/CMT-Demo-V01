import React from 'react'
import Template from '../Core/Auth/Template'
import { forgotPasswordData } from '../data/authData'


const ForgotPassword = () => {
  return (
    <Template
    title="Forgot Password"
    description1="Don't worry, we've got you covered."
    description2="we'll send you OTP to reset your password."
    image={"https://dummyimage.com/600x400/666/fff"}
    formType="forgotPassword" 
    data={forgotPasswordData}  
    />
  )
}

export default ForgotPassword