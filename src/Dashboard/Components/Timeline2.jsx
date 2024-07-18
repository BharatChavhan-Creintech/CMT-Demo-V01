
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileVideo ,FaPhotoVideo,FaFileAudio} from "react-icons/fa";
import { IoImages } from "react-icons/io5";


import Services from "./Stats";
//!-----------------------------------------------------------

const timelineElements = [
    {
        id: 1,
        title: "Case Registered",
        location: "Office",
        description: "The case was registered following the complaint received from the employee.",
        buttonText: "Details",
        date: "2024-06-01",
        icon: <FaFilePdf/>,
        color: "blue",
        tech: ["POSH guidelines"],
    },
    {
        id: 2,
        title: "Initial Investigation",
        location: "Phon Calls",
        description: "An initial investigation was conducted to gather preliminary information and evidence.",
        buttonText: "Details",
        date: "2024-06-05",
        icon: <FaFileAudio/>,
        color: "purple",
        tech: ["POSH guidelines"],
    },
    {
        id: 3,
        title: "Internal Committee Formation",
        location: "Office",
        description: "An internal committee was formed to handle the case as per the POSH guidelines.",
        buttonText: "Details",
        date: "2024-06-07",
        icon: <FaFilePdf/>,
        color: "yellow",
        tech: ["POSH guidelines"],
    },
    {
        id: 4,
        title: "Committee Meeting",
        location: "Zoom Meeting",
        description: "The internal committee held its first meeting to discuss the case details and plan the further course of action.",
        buttonText: "Details",
        date: "2024-06-10",
        icon: <FaFileVideo/>,
        color: "red",
        tech: ["POSH guidelines"],
    },
    {
        id: 5,
        title: "Evidence Collection",
        location: "Office",
        description: "The committee collected all relevant evidence, including witness statements and documents.",
        buttonText: "Details",
        date: "2024-06-15",
        icon: <FaPhotoVideo/>,
        color: "orange",
        tech: ["POSH guidelines"],
    },
    {
        id: 6,
        title: "Final Hearing",
        location: "Office",
        description: "The final hearing was conducted, allowing both parties to present their cases.",
        buttonText: "Details",
        date: "2024-06-20",
        icon: <FaFileAudio/>,
        color: "",
        tech: ["POSH guidelines"],
    },
    {
        id: 7,
        title: "Verdict and Action",
        location: "Office",
        description: "The committee reached a verdict and recommended appropriate action based on the findings.",
        buttonText: "Details",
        date: "2024-06-25",
        icon: <FaFilePdf/>,
        color: "blue",
        tech: ["POSH guidelines"],
    },
    {
        id: 8,
        title: "Case Closure",
        location: "Office",
        description: "The case was officially closed, and all parties were informed of the final decision.",
        buttonText: "Details",
        date: "2024-06-30",
        icon: <FaFilePdf/>,
        color: "purple",
        tech: ["POSH guidelines"],
    },
];




//!-----------------------------------------------------------




export default function Timeline({ defaultColor }) {
  return (
    <div>
        <div>

     
    <Services/>
    </div>

<div className="xl:px-52">
{timelineElements.slice().reverse().map((element) => {
       

       return (
         <div key={element.id} className="flex m-4 relative">
           <div
             className={`bg-orange-700 w-0.5 h-20 translate-x-10 translate-y-56 opacity-60 sm:hidden xs:block xs:h-52`}
           ></div>
           <div
             className={`bg-orange-700 w-0.5 h-20 translate-x-64 translate-y-56 opacity-60 sm:hidden xs:block xs:h-52`}
           ></div>
           <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
             <div className="w-4/5 text-black font-bold  min-w-28 mt-3">{element.date}</div>
             <div
               className={`bg-green-600 w-px h-[80%] translate-x-7 translate-y-10 opacity-30`}
             ></div>
             <div className={`text-green-700 ml-2`}>
             < CiCircleCheck   size={40}/>
             </div>
             <div
               className={`bg-green-900 h-px w-8 translate-y-6 opacity-30`}
             ></div>
           </div>
           <div className="border-dashed  lg:px-20 border-[1px] border-orange-300 rounded-lg px-8 py-4 bg-white w-full text-black  z-10 sm:w-96">
            <div>
            <div className="font-medium flex justify-between">
              <div className="xl:p-0 lg:p-0 md:p-0 xs:pl-5 text-lg flex items-center gap-10">{element.title} <div className="text-xl">{element.icon}</div></div>
              <div> <button type="submit" id="submit" name="send" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white  mt-2">  {element.buttonText}</button></div>
              
            </div>
             <div className="text-gray-800 mb-6 sm:mb-8 sm:text-xs">
              Location: {element.location}
               <span className="sm:hidden"> - {element.date}</span>
             </div>
             <div className="mb-4 xs:w-full sm:w-full">{element.description}</div>
             <div className="flex flex-wrap mb-6 justify-start">
               {element.tech.map((tech, index) => {
                 return (
                   <span
                     key={index}
                     className="bg-gray-100 text-gray-950 rounded-xl px-4 py-2 text-sm m-1"
                   >
                     {tech}
                   </span>
                 );
               })}
             </div>
             <div className=" w-8 p-1 rounded-lg z-20 absolute left-1 top-4 sm:hidden md:hidden lg:hidden text-green-700 ">
             < CiCircleCheck  size={40}/>
             </div>
            </div>
           </div>
         </div>
       );
     })}
</div>
     
    </div>
  );
}