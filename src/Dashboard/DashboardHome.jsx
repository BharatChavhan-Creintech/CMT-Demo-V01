import React from 'react'
import DashboardInfo from './Components/DashboardInfo'
import DataTable from './Components/Datatable'

const DashboardHome = () => {
  return (
    <>
    <div className=''>
    <DashboardInfo/>

    </div>
    <div className=''>
    <DataTable/>

    </div>
    </>
  )
}

export default DashboardHome