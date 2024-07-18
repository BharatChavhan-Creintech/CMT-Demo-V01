import React from "react";
import hero1 from "../assets/images/home5.jpg";

import NavLight from "../components/navLight";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";

import Pricing from "../components/pricing";

import Footer from "../components/footer";
import Switcher from "../components/switcher";
import GetInTouch from "../components/getInTuoch";

export default function Index() {
  return (
    <>
      <NavLight />
      <section
        className="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-gradient-to-t to-teal-600 via-teal-600/50 from-transparent"
        id="home"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 md:mt-48 mt-10 text-center">
            <h4 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">
              {" "}
              Streamline PoSH Case Management
              <br /> with Our Advanced Tool
            </h4>
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              "Empower Your Organization with Streamlined PoSH Case Management
              Solutions, Ensuring Compliance and Efficiency"
            </p>

            <div className="subcribe-form mt-6 mb-3">
              <button
                type="submit"
                className="px-6 tracking-wide inline-flex items-center justify-center font-medium  h-[46px] bg-teal-500 text-white rounded-full uppercase"
              >
                Get Started
              </button>
            </div>
            <div className="overflow-hidden mt-8">
              <img src={hero1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <About />
      <AgencyTab />
      <Services />
      <Pricing />
      <GetInTouch />
      <Footer />
      <Switcher />
    </>
  );
}
