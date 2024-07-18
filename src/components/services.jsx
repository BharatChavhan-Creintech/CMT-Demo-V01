import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/data";

export default function Services(){
    return(
        <section className="relative  bg-slate-50 dark:bg-slate-800 ">
            <div className="">
              
                <div className="relative  before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-background_53876-160646.jpg?t=st=1720156386~exp=1720159986~hmac=331d7026972a98854bd49b78bb74617f9c199095c3b0dc0e06fb684da71853e6&w=1380" alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className="min-h-[500px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">Effortless Annual Reports</h2>
        <p className="sm:text-lg text-base text-center">Generate Comprehensive Annual Reports with Just One Click.</p>

        <button
          type="button"
          className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Book Now
        </button>
      </div>
    </div>
           
            </div>
        </section>
    )
}