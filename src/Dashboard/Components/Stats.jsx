import React from 'react';
import { FaTree, FaWater, FaSeedling } from 'react-icons/fa';
import { PiHourglassFill } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";
import { LuClipboardEdit } from "react-icons/lu";

const Services = () => {
  return (
    <div className=" w-ful lg:mt-10">
      <div className="text-gray-950 grid gap-14  md:grid-cols-1 md:gap-5 p-10 lg:grid-cols-3  xl:px-44 ">
        <div className="rounded-xl bg-white p-6 text-center shadow-md md:mt-5">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-500 shadow-lg shadow-orange-500/40">
            < PiHourglassFill size={32}  className=" text-white" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Case Registered Successfully</h1>
          <p className="px-4 text-gray-500">Your case has been registered successfully. Our system has securely stored your information and assigned a unique case ID for tracking.</p>
        </div>
        <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl md:mt-5 ">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-teal-600 shadow-teal-6 00/40">
            <FiInfo size={32} className=" text-white" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Internal Committee Formation</h1>
          <p className="px-4 text-gray-500">The Internal Committee (IC) is responsible for addressing and resolving complaints related to workplace harassment. It ensures fair and unbiased investigation and resolution of cases.</p>
        </div>
        <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl md:mt-5 ">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
            <LuClipboardEdit size={32}  className=" text-white p" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Verdict and Action</h1>
          <p className="px-4 text-gray-500">Ensure fair and effective resolution of PoSH cases with our comprehensive verdict and action management tools. Empower your organization to maintain a safe and compliant workplace.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
