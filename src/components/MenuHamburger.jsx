import React from "react";

const MenuHamburger = ({ isOpen, onClick }) => {
  return (
    <button
      className="group inline-flex w-12 h-12 text-n-2 text-center items-center justify-center rounded-lg transition-all"
      aria-pressed={isOpen}
      onClick={onClick}>
      <span className="sr-only">Menu</span>
      <svg
        className="w-6 h-6 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        {/* Top bar */}
        <rect
          className={`origin-center transition-transform duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
            isOpen
              ? "translate-y-0 rotate-[45deg]"
              : "-translate-y-[5px] rotate-0"
          }`}
          x="1"
          y="7"
          width="14"
          height="2"
          rx="1"></rect>

        {/* Middle bar */}
        <rect
          className={`origin-center transition-opacity duration-200 ease-in ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          x="1"
          y="7"
          width="14"
          height="2"
          rx="1"></rect>

        {/* Bottom bar */}
        <rect
          className={`origin-center transition-transform duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
            isOpen
              ? "translate-y-0 rotate-[-45deg]"
              : "translate-y-[5px] rotate-0"
          }`}
          x="1"
          y="7"
          width="14"
          height="2"
          rx="1"></rect>
      </svg>
    </button>
  );
};

export default MenuHamburger;
