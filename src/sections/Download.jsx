import { Element } from "react-scroll";
import { Avatar, Button } from "@material-tailwind/react";
import { FaGooglePlay } from "react-icons/fa6";
import { avatars } from "../constants";

const Download = () => {
  return (
    <section className="relative overflow-hidden pt-36 max-lg:pt-10 max-md:pt-15 pb-28">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 -z-10 mask-radial mask-from-0 mask-point-from-[2rem] mask-via-[0.75] mask-point-via-[3rem]"
        style={{
          backgroundImage: "url('/assets/geometric.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to top, transparent 10%, #754c02 80%)",
          WebkitMaskImage:
            "linear-gradient(to top, transparent 10%, #754c02 80%)",
          mixBlendMode: "overlay",
        }}></div> */}

      <Element name="download">
        <div className="container">
          <div className="flex mb-5 gap-4">
            {/* First Flex Section */}
            <div className="lg:flex-[50%] max-md:flex-1 flex flex-col items-start max-md:items-center lg:my-auto text-center lg:text-left">
              <h2 className="headline-glow h2 max-md:h5 max-w-640 leading-[40px] mb-4">
                Discover notifyME&apos;s capabilities of Freelancing
              </h2>
              <p className="text-lg text-n-4 mb-5">
                Download notifyME for free today and take your Freelancing
                career to the next level.
              </p>

              {/* Stats and Avatars */}
              <div className="flex flex-col items-center sm:flex-row lg:items-start gap-4 mb-5">
                <p className="h4 text-color-3/50">200k+</p>
                <div className="flex items-center -space-x-4">
                  {avatars.map((avatar) => (
                    <Avatar
                      key={avatar.alt} // Add a unique key for each avatar
                      variant="circular"
                      alt={avatar.alt}
                      className="border-4 border-white hover:z-10 focus:z-10"
                      src={avatar.src}
                    />
                  ))}
                </div>
              </div>

              {/* Download Button */}
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

            {/* Second Flex Section */}
            <div className="lg:flex-[50%] max-md:hidden">
              <div className="w-full h-[600px] relative mask-fade-download">
                <img
                  src="/assets/mockup3.svg"
                  alt="screen"
                  className="absolute top-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
