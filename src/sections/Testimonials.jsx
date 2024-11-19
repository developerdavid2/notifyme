import React from "react";
import TestimonialSlider from "../components/TestimonialSlider";
import { testimonials } from "../constants/index";
import { Element } from "react-scroll";

function Testimonials() {
  return (
    <section className="pt-36 max-lg:pt-10 max-md:pt-15 pb-10 relative  overflow-hidden">
      {/* Radial Gradient Line */}
      <div
        className="bg-[radial-gradient(ellipse_at_center,_#CAC6DD_0%,_rgba(14,12,21,0)_40%)] 
          h-px absolute inset-x-0 top-0 z-[1] pointer-events-none"
      />
      <div className="h-20 w-20 blur-[5rem] bg-[#FFFFFF] absolute -top-[30%] left-1/2 -translate-x-1/2 -z-1 opacity-50" />

      <div className=" blur-[6rem] bg-[radial-gradient(27.3%_35.9%_at_50%_-2.8e-14%,#9fa8da_0%,#5c6bc0_100%)] h-28 w-28 absolute -top-[30%] left-1/2 -translate-x-1/2 -z-1 opacity-50" />

      {/* Radial Graddient end */}

      <Element name="reviews">
        <div className="container max-sm:px-2 relative pb-15">
          <div className=" pt-5 text-center flex flex-col items-center">
            <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
            <h2 className="headline-glow h2 max-md:h5 max-w-640">
              Words from our community
            </h2>
          </div>

          <TestimonialSlider testimonials={testimonials} />

          {/* Decorative Blur Elements */}
          <div className="blur-[12rem] h-52 w-52 bg-indigo-400 absolute top-4 left-1/2 -translate-x-1/2 -z-1" />
        </div>
      </Element>
    </section>
  );
}

export default Testimonials;
