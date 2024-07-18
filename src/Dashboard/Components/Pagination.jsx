import React from 'react';
import { HiArrowSmallRight } from "react-icons/hi2";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center mt-4  px-2 py-3 rounded-lg bg-white">
      <button
        className={`px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md dark:bg-gray-700 ${
          currentPage === 1 && 'opacity-50 cursor-not-allowed'
        }`}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
              <HiArrowSmallRight className='rotate-180'/>

      </button>
      <span className="text-sm text-gray-900">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md dark:bg-gray-700 ${
          currentPage === totalPages && 'opacity-50 cursor-not-allowed'
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <HiArrowSmallRight/>
      </button>
    </div>
  );
};

export default Pagination;
