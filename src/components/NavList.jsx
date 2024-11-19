import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../constants/index.jsx";

const NavList = ({ closeNav }) => {
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (window.location.pathname !== "/") {
      // Navigate to the home page, then scroll to the section
      navigate(`/#${href}`);
      setTimeout(() => {
        document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
        closeNav(); // Close the navigation
      }, 100); // Allowing page change to complete
    } else {
      // Scroll directly if on the homepage
      document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
      closeNav(); // Close the navigation
    }
  };

  return (
    <ul className="my-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="white"
          className="p-1 font-medium cursor-pointer font-poppins">
          {item.isLink ? (
            <ScrollLink
              to={item.href}
              smooth={true}
              spy={true}
              offset={-200} // Adjust for header height if necessary
              onClick={() => {
                handleNavigation(item.href);
                closeNav(); // Ensure nav closes
              }}
              className="flex items-center gap-2 hover:text-color-7 text-xl lg:text-base transition-colors">
              <span className="lg:hidden">{item.icon}</span>{" "}
              {/* Hide icon on large screens */}
              {item.label}
            </ScrollLink>
          ) : (
            <Link
              to={`/${item.href}`}
              onClick={() => closeNav()} // Close nav for non-scroll links too
              className="flex items-center gap-2 hover:text-color-7 text-xl lg:text-base transition-colors base-bold uppercase">
              <span className="lg:hidden">{item.icon}</span>{" "}
              {/* Hide icon on large screens */}
              {item.label}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );
};

export default NavList;
