import React, { useState, useEffect } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const Carousel = ({data}) => {
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-96 mx-auto p-3 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-[1px] border-[#ffffff6c] overflow-hidden
 ">
      {data.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
            <div className='w-full h-2/3 flex items-center justify-center'>
          <img src={slide.image} alt={slide.title} className="object-cover w-[290px] z-20 " />
            </div>
          <div className="py-4 px-8">
            <h1 className="text-white font-bold text-2xl tracking-tight text-center">{slide.title}</h1>
            <p className="text-gray-200 leading-6 text-center">{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
        {data.map((_, index) => (
          <button key={index} onClick={() => handleDotClick(index)} className="focus:outline-none">
            {index === currentSlide ? (
              <FaCircle className="text-gray-500" />
            ) : (
              <FaRegCircle className="text-gray-400" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
