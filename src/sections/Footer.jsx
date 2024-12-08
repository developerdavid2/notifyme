import React from "react";
import { Button } from "@material-tailwind/react";
import { FaEnvelope } from "react-icons/fa6";
import { Link as LinkScroll } from "react-scroll";
import { footerNav, socials } from "../constants";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (window.location.pathname !== "/") {
      // Navigate to the home page, then scroll to the section
      navigate(`/#${href}`);
      setTimeout(() => {
        document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100); // Allowing page change to complete
    } else {
      // Scroll directly if on the homepage
      document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const FooterLink = ({ label, href, isLink }) => {
    return isLink ? (
      <Link to={href} className="hover:text-p1 transition-colors">
        {label}
      </Link>
    ) : (
      <LinkScroll
        to={href}
        offset={-250}
        spy
        smooth
        activeClass="nav-active"
        onClick={() => handleNavigation(href)}
        className="hover:text-p1 transition-colors cursor-pointer">
        {label}
      </LinkScroll>
    );
  };

  return (
    <footer className="pt-10 bg-gradient-to-b from-transparent to-transparent relative overflow-hidden">
      {/* Radial Gradient Line */}
      <div
        className="bg-[radial-gradient(ellipse_at_center,_#CAC6DD_0%,_rgba(14,12,21,0)_40%)] 
          h-px absolute inset-x-0 top-0 z-[1] pointer-events-none"
      />
      <div className="h-20 w-20 blur-[5rem] bg-[#FFFFFF] absolute -top-[30%] left-1/2 -translate-x-1/2 -z-1 opacity-50" />

      <div className="blur-[6rem] bg-[radial-gradient(27.3%_35.9%_at_50%_-2.8e-14%,#9fa8da_0%,#5c6bc0_100%)] h-28 w-28 absolute -top-[30%] left-1/2 -translate-x-1/2 -z-1 opacity-50" />

      {/* Radial Gradient end */}
      <div className="container max-sm:px-2 relative overflow-hidden">
        <div className="text-center flex flex-col items-center relative z-4 space-y-5">
          <div className="max-w-640">
            <img
              src="/assets/notifyME-logo.png"
              alt="logo"
              className="md:w-[15rem] w-[8rem] h-auto grayscale"
            />
          </div>
          <h6 className="h6 md:h5 leading-4">
            Secure Your Next Breathtaking Gig with notifyME
          </h6>
          <div className="gap-3 pb-10">
            <Button className="items-center lowercase inline-flex justify-center whitespace-nowrap rounded-2xl text-[12px] md:text-lg bg-white/30 backdrop-blur-[5rem] border border-white/25 px-4 py-2 text-n-1 hover:bg-white/40 gap-1 font-medium">
              <FaEnvelope />
              <a
                href={`mailto:notifyme.connect@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full text-inherit">
                notifyme.connect@gmail.com
              </a>
            </Button>
          </div>
          <nav className="text-sm mb-[130px] max-lg:mb-[106px]">
            <ul className="flex content-center items-center flex-none flex-row flex-wrap justify-center h-min p-0 relative w-full">
              {footerNav.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-base md:text-xl text-n-4 mb-[46px] max-md:mb-[30px] capitalize">
                  <FooterLink
                    label={item.label}
                    href={item.href}
                    isLink={item.isLink}
                  />
                  {/* Add dot with symmetrical spacing */}
                  {index < footerNav.length - 1 && (
                    <span className="mx-2 md:mx-5 text-n-4">•</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* LINE BREAK */}
        <div
          className="bg-n-3/50 
        h-px pointer-events-none"
        />
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <a href="" className="text-sm text-gray-700">
            Copyright NotifyME LLC &copy;2024
          </a>
          {/*{Social Icons}*/}
          <ul className="flex gap-3">
            {socials.map(({ id, url, icon, title }, index) => (
              <li
                key={id}
                className={clsx(index === socials.length ? "mr-6" : "mr-0")}>
                <a href={url} className="social-icon ">
                  {/* Preserve custom size and object-contain for SVGs */}
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/2 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
          {/* Terms and Privacy Policy */}
          <ul className="small-compact flex items-center justify-center max-sm:ml-0">
            <Link to="/privacy">
              <li className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy <span>Policy</span>
              </li>
            </Link>
            <Link to="/terms">
              <li className="text-p5 transition-all duration-500 hover:text-p1">
                Terms <span>of services</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
