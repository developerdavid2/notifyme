import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Button } from "@material-tailwind/react";
import clsx from "clsx";

export default function TestimonialSlider({ testimonials }) {
  const testimonialsRef = useRef(null);
  const [active, setActive] = useState(0);
  const [autorotate, setAutorotate] = useState(true);
  const autorotateTiming = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prevActive) =>
        prevActive + 1 === testimonials.length ? 0 : prevActive + 1
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) {
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}>
                <img
                  className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                  src={testimonial.img}
                  width={56}
                  height={56}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="mb-9 max-h-[140px] mx-auto lg:max-w-[500px] transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              as="div"
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}>
              <div className="text-base min-h-[168px] sm:min-h-[100px] text-slate-900   before:content-['\201C'] after:content-['\201D'] ">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 md:flex flex-wrap justify-center -m-1.5 max-sm:mt-2 gap-3 px-3">
        {testimonials.map((testimonial, index) => (
          <Button
            key={index}
            onClick={() => {
              setActive(index);
              setAutorotate(false);
            }}
            className={clsx(
              "capitalize rounded-3xl  border bg-gray-800/10 shadow-lg shadow-black/20 backdrop-blur-sm border-gray-300/30",
              active === index &&
                "bg-orange-400/10 backdrop-blur-sm border border-color-3/90"
            )}>
            <span className="">
              {testimonial.name} - {testimonial.role}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
