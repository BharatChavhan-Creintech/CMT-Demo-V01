import React, { useEffect, useState, useRef } from "react";
import { events } from "../../data/Timeline";
import { FcOvertime } from "react-icons/fc";
import Statistics from "./TimeLineStats";

const Timeline = () => {
 




  return (
    <div  className=" mx-auto w-full scroll-auto">
      <Statistics/>
     <div className="flex justify-center p-10  xs:p-0 xl:px-20 ">
      <div className=" py-4 w-full  xl:pl-36 ">
{events.slice().reverse().map((item,i)=>(<div className={`flex gap-x-3 rounded-lg my-2  p-2 transition-all ease-in-out hover:bg-[#eaeaebc0] xl:w-2/3 ${i === (events.length -1 ) ? "border-[1px] border-dashed border-orange-600":""} `} key={i}>
  
  <div className="min-w-20 text-end">
    <span className="text-md text-black dark:text-gray-400">{item.date}</span>
  </div>
  
  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-600">
    <div className="relative z-10 size-7 flex justify-center items-center">
      <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
    </div>
  </div>
  
  <div className="grow pt-0.5 pb-8">
    <h3 className="flex items-center gap-x-1.5 font-semibold text-black dark:text-gray-200">
    <FcOvertime size={24}/>
     {item.title}
    </h3>
    <p className="mt-1 text-sm text-black dark:text-gray-400 border p-4 rounded-md lg:w-2/3">
     {item.description}
    </p>
    <button type="button" className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 disabled:opacity-50 disabled:pointer-events-none">
      <img className="flex-shrink-0 size-4 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Image Description"/>
      James Collins
    </button>
  </div>
  
</div>))}
</div> 
</div>
      
    </div>
  );
};

export default Timeline;
