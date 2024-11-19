import clsx from "clsx";
import React, { useState, useEffect } from "react";

const FaqItem = ({ question, answer, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, [active]);

  return (
    <div
      className={`py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-n-7 shadow-lg ${
        accordionOpen
          ? "bg-n-4/10 backdrop-blur-sm border border-color-6/30"
          : "bg-n-6"
      }`}>
      <h5>
        <button
          className={clsx(
            "text-left text-[20px] font-semibold font-inter sm:h5  text-white/70 flex items-center justify-between w-full  py-3 px-4 rounded-md transition-colors duration-300",
            accordionOpen && "text-color-3/60"
          )}
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`faq-item-${id}`}>
          <span>{question}</span>
          <svg
            className={`fill-white shrink-0 transition-transform duration-300 ${
              accordionOpen ? "rotate-180 " : "rotate-0"
            }`}
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg">
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className="origin-center"
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className="origin-center rotate-90"
            />
          </svg>
        </button>
      </h5>
      <div
        id={`faq-item-${id}`}
        role="region"
        aria-labelledby={`faq-title-${id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-4 py-3  text-gray-400 rounded-b-md flex flex-col items-start">
          <p className="leading-relaxed mb-6 body-3 text-n-4 text-start">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
