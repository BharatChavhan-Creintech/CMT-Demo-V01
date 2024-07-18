import React from 'react'
import {Routes,Route} from "react-router-dom"
import Timeline from '../../Dashboard/Components/Timeline2'
import { FormProvider } from '../../context/FormContext'
import MultiStepForm from '../../Dashboard/Components/MultiStepForm'
import DashboardHome from '../../Dashboard/DashboardHome'

const DashboardRoute = () => {
  return (
    <section className='w-full'>
<FormProvider>
<Routes>
        <Route path='/' element={<DashboardHome/>}/>
        <Route path='/cases' element={( <div className="flex flex-col justify-center items-center  text-white text-base pb-8 sm:text-lg">
      <Timeline defaultColor="bg-[#F1F0F7]" />
    </div>)}/>
        <Route path='/date' element={<h1>dates</h1>}/>
        <Route path='/report' element={<MultiStepForm/>} />
    </Routes>
</FormProvider>
    </section>
  )
}

export default DashboardRoute