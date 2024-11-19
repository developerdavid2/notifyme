import React from "react";

const SubscribeForm = () => {
  return (
    <div className="text-center max-w-4xl pb-8 max-sm:w-full md:w-[80%] mx-auto">
      {" "}
      {/* Adjusted max-width */}
      <form>
        {/* Glassmorphic container */}
        <div className="glass-container mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-6 px-6 py-6 rounded-3xl">
          <div className="w-full sm:flex-1">
            <label htmlFor="hero-input" className="sr-only">
              Enter your email
            </label>
            {/* Glass input field */}
            <input
              type="text"
              id="hero-input"
              name="hero-input"
              className="glass-input py-4 px-6 block w-full rounded-2xl text-sm focus:ring-2 focus:ring-white focus:outline-none placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>
          {/* Subscribe button */}
          <a
            className="subscribe-button w-full sm:w-auto whitespace-nowrap py-4 px-6 inline-flex justify-center items-center gap-x-2 text-sm rounded-2xl focus:outline-none font-bold"
            href="#">
            Subscribe
          </a>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
