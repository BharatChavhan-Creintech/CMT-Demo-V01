import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { fpSchemas } from '../validation'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    email:""
}

const ForgotPasswordForm = () => {
  const navigate = useNavigate()
   
    const {values, errors, touched, handleBlur, handleSubmit, handleChange} = useFormik({
         initialValues:initialValues,
         validationSchema:fpSchemas,
        onSubmit:(values)=>{
            console.log(values)
            navigate("/otp")

        }
    })


  return (
    <>
    <div className="md:px-5 md:w-1/2 font-libre_franklin">
  
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
        <form method="POST" onSubmit={handleSubmit}>
        

        <div className="mt-6 lg:px-5">
              <label htmlFor="email" className="block text-lg font-medium leading-5 text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md ">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="appearance-none block w-full px-3 py-2 border border-orange-200 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-orange-300 transition duration-150 ease-in-out sm:text-lg sm:leading-5"
                />
                  {errors.email && touched.email ? (
                    <p className="mt-1 font-mono text-md text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
              </div>
            </div>


          <div className="mt-6 lg:px-5">
            <span className=" w-full rounded-md  flex justify-center items-center">
            <button
                type="submit"
                className="w-[70%] rounded-md border border-current px-4 py-3 text-lg font-bold transition hover:scale-110 hover:shadow-sm  text-white bg-teal-500"
              >
                Send Otp
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
 </>
  )
}

export default ForgotPasswordForm