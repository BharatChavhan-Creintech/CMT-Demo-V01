import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../../context/FormContext';

function ProgressSteps() {
  const { formData } = useContext(FormContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((formData.step - 1) * 33.33); // Adjust this if you have more or fewer steps
  }, [formData.step]);

  return (
    <div className="w-full pt-10">
      <div className="flex">
        {[1, 2, 3, 4].map((step, index) => (
          <div className="w-1/4" key={index}>
            <div className="relative mb-2">
              {index !== 0 && (
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  style={{
                    width: 'calc(100% - 2.5rem - 1rem)',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div
                      className="py-1 rounded"
                      style={{
                        width: progress >= (index * 33.33) ? '100%' : '0%',
                        backgroundColor: 'rgba(72,187,120,1)', // green color
                        transition: 'width 0.5s ease-in-out',
                      }}
                    />
                  </div>
                </div>
              )}
              <div
                className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center ${
                  formData.step > index
                    ? 'bg-green-500 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-600'
                }`}
              >
                {step}
              </div>
            </div>
            <div className="text-xs text-center md:text-base">
              {['Case Statistics', 'Committee Activities', 'Recommendations', 'Final Review'][index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressSteps;
