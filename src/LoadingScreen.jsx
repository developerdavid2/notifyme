import React from "react";
import Spinner from "./components/Spinner.jsx";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[999] flex bg-n-8 transition-opacity duration-400">
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-[324px] mx-auto items-center justify-center flex pointer-events-none">
          <div className="blur-[8rem] h-28 w-28  bg-blue-600/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          <img
            src="/assets/notifyME-logo.png"
            alt="Loading"
            className="w-full max-sm:w-3/5 max-md:w-4/5"
          />
        </div>
      </div>
      <div className="absolute right-12 bottom-12 w-8 h-8">
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingScreen;
