import React from 'react'
import Template from '../Core/Auth/Template'
import { signUpData } from '../data/authData'

const SignUp = () => {
  return (
   <>
 <Template
    title="Join the Leading Platform for PoSH Case Management"
    description1="Streamline your compliance processes and ensure a safer workplace."
    description2="Empower your organization with our advanced management tools."
    image={"path/to/signup-image.jpg"}
    formType="signup"
    data={signUpData}
    />
   </>
  )
}

export default SignUp