import React, { useState, useEffect } from "react";
import { Collapse, Button, IconButton } from "@material-tailwind/react";
import NavList from "../components/NavList.jsx";
import MenuHamburger from "../components/MenuHamburger.jsx";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Close navigation when an item is clicked
  const closeNav = () => setOpenNav(false);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 duration-150 ",
        scrolledFromTop &&
          !openNav &&
          "py-1 mx-auto md:mt-3 shadow-lg border-none md:rounded-2xl bg-n-7/30 md:w-[85%] transition-colors duration-150 backdrop-blur-md -z-1",
        openNav && "min-h-screen mx-0 mt-0 bg-n-8 rounded-none duration-100",
        scrolledFromTop && openNav && "bg-n-8 md:w-full md:mt-0 md:rounded-none"
      )}>
      <div className="w-full container flex items-center justify-between text-blue-gray-900 font-poppins max-md:px-0">
        {openNav && (
          <>
            <div className="blur-[12rem] h-28 w-28 bg-indigo-600 absolute top-4 left-1/3" />
            <div className="blur-[8rem] h-28 w-28 bg-blue-500/40 absolute top-4 left-1/3" />
          </>
        )}
        {/* Logo and Navigation Links */}
        <Link to="/" className="mr-4 cursor-pointer py-1.5">
          <img
            src="/assets/notifyME-logo.png"
            alt="logo"
            className={clsx(
              "lg:w-[10rem] md:w-[8rem] w-[6rem] h-auto transform origin-left transition duration-200",
              openNav && "w-[6rem]"
            )}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavList closeNav={closeNav} />
        </div>

        {/* Download Button and Menu Icon */}
        <div className="flex items-center">
          <Link to="/waitlist">
            <Button className="hidden lg:block bg-white text-n-6 rounded-2xl font-poppins">
              Join waitlist
            </Button>
          </Link>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            <MenuHamburger
              isOpen={openNav}
              onClick={() => setOpenNav(!openNav)}
            />
          </IconButton>
        </div>
      </div>

      {/* Mobile Nav List */}
      <Collapse
        open={openNav}
        className="mt-4 md:container lg:hidden flex flex-col h-screen relative">
        <div className="flex flex-col h-screen relative">
          {/* Image as a movable background-like element */}
          <div className="absolute flex -z-10 pointer-events-none mask-linear">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="opacity-[0.02] w-[60rem] h-auto transform -translate-y-5 -translate-x-20 transition-all duration-300 grayscale"
            />
          </div>

          {/* Main Navigation */}
          <div className="flex-1 z-10">
            <NavList closeNav={closeNav} />
          </div>

          {/* Action Buttons */}
          <div className="flex -mt-8 flex-col pb-20 z-10 gap-3">
            <Button
              className="rounded-2xl font-poppins bg-white/30 backdrop-blur-[5rem] border border-white/25 text-n-1 hover:bg-white/40 uppercase flex-grow"
              onClick={closeNav}>
              <a
                href="http://xora-saas-ai.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full text-inherit">
                Download App
              </a>
            </Button>
            <Link to="/waitlist">
              <Button
                className="bg-white text-n-6 rounded-2xl font-poppins w-full flex-grow"
                onClick={closeNav}>
                Join waitlist
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </header>
  );
};

export default Header;
