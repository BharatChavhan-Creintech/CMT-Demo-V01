import React from "react";
import { HiArrowLongUp } from "react-icons/hi2";

const DashboardInfo = () => {
  return (
    <div>
      <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-4 p-8 lg:px-20 ">
        <div className="flex justify-between items-center p-6 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2 text-xl font-semibold text-gray-700  ">
              <span>Total Cases</span> 
            </div>
            <div className="text-3xl text-white p-4 rounded-full  bg-gradient-to-r from-violet-500 to-purple-500">49 </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-6 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2 text-xl font-semibold text-gray-700  ">
              <span>Pending cases</span> 
            </div>
            <div className="text-3xl text-white p-4 rounded-full   bg-gradient-to-tr from-amber-400 to-orange-500 ">15 </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-6 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2 text-xl font-semibold text-gray-700  ">
              <span>Closed Cases</span> 
            </div>
            <div className="text-3xl text-white p-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500">26 </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-6 rounded-2xl bg-white shadow-sm">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2 text-xl font-semibold text-gray-700  ">
              <span>Active Cases</span> 
            </div>
            <div className="text-3xl text-white p-4 rounded-full  bg-gradient-to-tr from-green-500 to-lime-400 ">06 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInfo;
