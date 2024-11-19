import React from "react";
import Hero from "../sections/Hero";
import LogoSlider from "../sections/LogoSlider";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import Testimonials from "../sections/Testimonials";
import Download from "../sections/Download";

const HomePage = () => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="800">
        <Hero />
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <LogoSlider />
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <Features />
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <HowItWorks />
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <Testimonials />
      </div>

      <div data-aos="fade-up" data-aos-duration="800">
        <Download />
      </div>
    </>
  );
};

export default HomePage;
