import React from "react";
import { spotlightData } from "../constants/index.jsx";
import Spotlight, { SpotlightCard } from "../components/Spotlight.jsx";
import { Element } from "react-scroll";

const Features = () => {
  const iconBaseStyle =
    "p-8 sm:p-10 rounded-full glass-container transition-transform duration-300 mb-3";
  const iconGlowStyle =
    "text-n-1 text-[3rem] sm:text-[4rem] drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]";

  return (
    <section className=" bg-gradient-to-b from-transparent to-transparent pt-36 max-lg:pt-10 max-md:pt-15 pb-10 relative overflow-hidden">
      <Element name="features">
        <div className="container max-sm:px-2 relative lg:max-w-full">
          <div className="pb-40 max-md:pb-32 text-center flex flex-col items-center relative z-4 md:max-w-lg lg:max-w-full mx-auto">
            {/* LOGO DECOR */}
            <div className="">
              <div className="relative flex justify-center items-center h-20 w-20 md:h-32 md:w-32 rounded-full g7">
                <div className="absolute inset-0 mask-linear mask-dir-to-bl mask-to-[0] mask-point-to-[50%] border border-n-3/10 rounded-full"></div>
                <img
                  src="/assets/logo.png"
                  alt="logo"
                  className="lg:w-[4rem] w-[3rem] h-auto z-10 grayscale contrast-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            <h3 className="headline-glow h3 max-md:h5 max-w-640 mb-7 pb-10 pt-4">
              Supercharge Your Freelancing Workflow
            </h3>

            <Spotlight className="mx-auto grid gap-6 lg:grid-cols-3 items-start">
              {spotlightData.map((card) => (
                <SpotlightCard key={card.id}>
                  <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                      aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                    </div>
                    <div className="flex flex-col h-full items-center text-center">
                      <div className="relative inline-flex">
                        <div
                          className="absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600/30"
                          aria-hidden="true"></div>
                        <div
                          key={card.id}
                          className={iconBaseStyle}
                          title={card.altText}>
                          <card.icon className={iconGlowStyle} />
                        </div>
                      </div>
                      <div className="grow mb-5">
                        <h2 className="text-xl text-slate-200 font-extrabold mb-1 font-inter">
                          {card.title}
                        </h2>
                        <p className="text-sm text-n-4">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </Spotlight>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
