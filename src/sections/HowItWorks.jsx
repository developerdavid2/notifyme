// HowItWorks.jsx
import React from "react";
import { Element } from "react-scroll";
import Tabs from "../components/Tabs";
import { howItWorksSteps } from "../constants/index";

const HowItWorks = () => {
  return (
    <section className="pt-36 max-lg:pt-10 max-md:pt-15 pb-10">
      <Element name="how-it-works">
        <div className="container max-sm:px-2 relative">
          <div className="text-center flex flex-col items-center">
            <div className="features-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
            <h2 className="headline-glow h2 max-md:h5 max-w-640">
              How It Works
            </h2>
            <p className="text-lg text-n-4 pb-5">
              It&apos;s Simple. It&apos;s Fast. It&apos;s Free.
            </p>
          </div>

          <div className="w-full max-w-6xl mx-auto mb-10">
            <Tabs tabs={howItWorksSteps} />
          </div>

          <div className="blur-[12rem] h-52 w-52 bg-indigo-400 absolute top-4 left-1/2 -translate-x-1/2 -z-1" />
          <div className="h-16 w-16 sm:h-28 sm:w-28 bg-gradient-to-bl from-n-3/50 to-n-5/50  absolute bottom-1/2 right-3 rounded-full -z-1" />
        </div>
      </Element>
    </section>
  );
};

export default HowItWorks;
