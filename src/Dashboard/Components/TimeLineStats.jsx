import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Statistics = () => {
  return (
    <div className="">
      <div className="container  p-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Timeline</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-sky-300 rounded-full p-3 w-16 h-16">
              <FaCheck className="h-8 w-8 text-white" />
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-800">Case Initiation</p>
              <p className="text-gray-600 text-lg mt-1">24 Jun 2024</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-300 rounded-full p-3 w-16 h-16">
              <FaCheck className="h-8 w-8 text-white" />
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-800">Final Hearing</p>
              <p className="text-gray-600 text-lg mt-1">20 Jun 2024</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-300 rounded-full p-3 w-16 h-16">
              <FaCheck className="h-8 w-8 text-white" />
            </div>
            <div className="mt-4">
              <p className="text-xl font-semibold text-gray-800">Case Closure</p>
              <p className="text-gray-600 text-lg mt-1">30 Jun 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
