import { useState } from "react";
import { Element } from "react-scroll";
import { Button } from "@material-tailwind/react";
import { FaGooglePlay } from "react-icons/fa6";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative lg:pt-28 pt-20 pb-5">
      <Element name="hero">
        <div className="container flex flex-col items-center justify-center relative z-2 max-sm:px-0 pt-12 md:pt-32">
          {/* Other content and decorations */}

          <div className="blur-[12rem] h-28 w-28 bg-indigo-600 absolute top-4 left-1/3" />
          <div className="blur-[8rem] h-28 w-28 bg-indigo-500 absolute top-4 left-1/3" />

          <div className="h-6 w-6 md:h-12 md:w-12 g5 bg-orange-400 blur-[2px] rounded-full absolute top-2 right-[12%]" />
          <div className="h-6 w-6 md:h-16 md:w-16 rounded-full bg-gray-800/10 shadow-lg shadow-black/20 backdrop-blur-sm border border-gray-300/30 z-10 absolute -top-2 right-[14%]" />

          <div className="px-5 sm:px-12 flex flex-col items-center relative z-2 md:max-w-full text-center justify-center">
            <h1 className="mb-6 md:h1 h4 text-n-1 max-lg:mb-7 max-md:mb-4 md:leading-7">
              Revolutionize Your
              <span className="headline-glow"> Upwork</span> Experience
            </h1>
            <p className=" mb-5 text-base md:body-1">
              Instant notifications for new Upwork jobs, straight to your phone
            </p>
            <div className="gap-3 pb-10">
              <Button className="items-center font-poppins base-bold capitalize inline-flex justify-center whitespace-nowrap rounded-2xl text-lg font-medium bg-white/30 backdrop-blur-[5rem] border border-white/25 px-4 py-2 text-n-1 hover:bg-white/40 gap-1">
                <FaGooglePlay />
                <a
                  href="http://xora-saas-ai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full text-inherit">
                  Download App
                </a>
              </Button>
            </div>
            <div className="mask-fade mask-linear mask-from-50 relative flex justify-center overflow-hidden max-h-[50vh] sm:max-h-[70vh] md:max-h-[80vh]">
              {/* Placeholder */}
              {!imageLoaded && (
                <div className="w-full h-full lg:p-[0rem_8rem] object-cover transition-opacity duration-300 rounded-2xl"></div>
              )}
              {/* Actual Image */}
              <img
                src="/assets/notifyME-mock.svg"
                className={`w-full h-full  lg:p-[0rem_8rem] object-cover transition-opacity duration-300  ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                alt="Mockup"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
