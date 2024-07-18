import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import otpGif from "../../assets/otp.gif"
import { useToggle } from '../../context/ToggleContext';










const OtpInput = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const inputsRef = useRef([]);
  const navigate = useNavigate()

  const {toggle2,isToggled2} = useToggle()

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 4) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };



  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').split('').slice(0, 5);
    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      if (/^[0-9]$/.test(pasteData[i])) {
        newOtp[i] = pasteData[i];
      }
    }
    setOtp(newOtp);
    const nextIndex = pasteData.length < 5 ? pasteData.length : 4;
    inputsRef.current[nextIndex].focus();
  };

  const handleClick = () => {
    toggle2()
    navigate('/')
  };

  // console.log(isToggled2)



  return (
    <div className='text-center'>
      <div className=' flex justify-center items-center my-10 w-40 h-40 mx-auto'>
       <img src={otpGif} alt='' />
      </div>
        <p className='py-2 font-semibold font-mono text-black'>OTP Sent to taxxxxxxxx2024@cmt.in</p>
      <div onPaste={handlePaste} className='flex'>
        {otp.map((digit, index) => (
           <div key={index}  className='shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mx-1 rounded-md border-[1px] border-orange-200 overflow-hidden'>

          <input
           className='w-16 h-16 text-center text-4xl font-bold font-serif outline-none text-gray-800 shadow-red-50'
            type="text"
            maxLength="1"
            placeholder='_'
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
         
          />
       </div>
        ))}
      </div>
      <div className='flex justify-center items-center p-8'>
       <button
        onClick={handleClick}
        className={`inline-block rounded-md border border-current px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-sm  ${
          otp.join('').length === 5 ? 'text-white bg-teal-500 ' : 'text-white cursor-not-allowed bg-orange-200 transition'
        }`}

        disabled={otp.join('').length !== 5}
      >
        Submit OTP
      </button>




      
      </div>

      
    </div>
  );
};

export default OtpInput;
