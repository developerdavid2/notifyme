import React from "react";
import { Element } from "react-scroll";
import { faq } from "../constants/index.jsx";
import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
  return (
    <section className="relative max-w-max">
      <div className=" blur-[15rem] bg-indigo-600 h-64 w-64 absolute top-1/4 left-1/2 -translate-x-1/2 -z-1" />
      <div className="h-64 w-64 blur-[20rem] bg-indigo-500/40 absolute bottom-0 left-1/2 -translate-x-1/2 -z-1 " />
      <Element name="faq" className="relative">
        <div className="sm:container relative z-2 pt-28 pr-0 pl-0 md:max-w-3xl">
          <div className="flex flex-col items-center pb-5">
            <h3 className="headline-glow h3 max-md:h5  pt-4">
              Frequently Asked Questions (FAQ)
            </h3>
            <p className="leading-relaxed text-base md:text-lg text-n-4">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>

          <div className="divide-y divide-gray-800/50 flex flex-col gap-4 max-w-full items-stretch">
            {faq.map((item, index) => (
              <FaqItem
                key={item.id}
                id={`faq-${item.id}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Faq;
