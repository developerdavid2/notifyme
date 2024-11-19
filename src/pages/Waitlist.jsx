import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "@material-tailwind/react";
import { FaGooglePlay } from "react-icons/fa6";
import ModalVideo from "../components/ModalVideo";
import SubscribeForm from "../components/SubscribeForm";
import Faq from "../sections/Faq";

const Waitlist = () => {
  return (
    <section className="relative py-40 pb-20">
      <Element name="hero">
        <div className="container flex flex-col items-center justify-center relative z-2">
          {/* Other content and decorations */}

          <div className="flex flex-col items-center relative z-2 md:max-w-full text-center justify-center">
            <div className="blur-[12rem] h-28 w-28 bg-indigo-600 absolute top-4 left-1/3" />
            <div className="blur-[8rem] h-28 w-28 bg-orange-500/40 absolute top-4 left-1/3" />
            <div className=" h-12 w-12 bg-gradient-to-bl from-color-3 to-amber-800/50  absolute top-[12%] right-[15%] sm:top-[13%] smright-[20%] rounded-full -z-1" />

            <h1 className="mb-6 md:h1 h4 text-n-1 max-lg:mb-7 max-md:mb-4 md:leading-7">
              Get early
              <span className="headline-glow"> access</span>
            </h1>
            <p className="md:max-w-[600px] leading-relaxed mb-6 body-3 text-n-4 md:body-2">
              Be amongst the first to experience Wait and launch a viral
              waitlist. Sign up to be notified when we launch!
            </p>
            <SubscribeForm />

            <div className="flex justify-center items-center">
              <ModalVideo
                thumb="/assets/thumbnail.png"
                thumbWidth={800}
                thumbHeight={450}
                thumbAlt="Video thumbnail"
                video="/assets/demo.mp4"
              />
            </div>

            <Faq />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Waitlist;
