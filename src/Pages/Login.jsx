import React from 'react'
import Template from '../Core/Auth/Template'
import {loginData} from "../data/authData"

const Login = () => {
  return (
   <>
<Template
    title="Welcome Back to CMT"
    description1="Manage your cases efficiently with our comprehensive tools."
    description2="Secure, reliable, and easy-to-use case management."
    image={"path/to/login-image.jpg"}
    formType="login"
    data={loginData}
    />

    </>
  )
}

export default Login