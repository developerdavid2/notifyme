import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-n-8">
      <div className="relative flex justify-center items-center h-20 w-20 md:h-32 md:w-32 rounded-full g7">
        {/* Border Animation */}
        
        <div className="absolute inset-0 mask-linear mask-dir-to-bl mask-to-[0] mask-point-to-[50%] border border-n-3/10 rounded-full animate-pulse-border"></div>
        {/* Logo Animation */}
        <img
          src="/assets/logo.png"
          alt="logo"
          className="lg:w-[4rem] w-[3rem] h-auto z-10 grayscale opacity-50 hover:grayscale-0 transition-all duration-300 animate-logo-scale"
        />
      </div>
    </div>
  );
}
