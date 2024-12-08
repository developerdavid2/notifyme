import React from "react";
import { FaClock } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="container mx-auto px-6 md:max-w-3xl py-40 relative">
      <div className="blur-[8rem] h-28 w-28 bg-orange-500/40 absolute top-[10%] left-1/2 transform -translate-x-1/2" />
      {/* Page Header */}
      <h1 className="md:h1 h4 font-bold text-center mb-4">Privacy Policy</h1>
      <div className="flex items-center justify-center mb-15">
        <div className="flex items-center rounded-full px-4 py-2 text-gray-700 sm:text-sm text-xs shadow-md border border-gray-700">
          <FaClock className="mr-2 text-gray-800" />
          Last Updated: November 8, 2024
        </div>
      </div>

      {/* Introduction */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Introduction</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        Welcome to NotifyME! This Privacy Policy explains how we collect, use,
        and protect your data when you use our application. By accessing or
        using NotifyME, you agree to the terms outlined in this document.
      </p>
      <div
        className="bg-gray-800/50 
        h-px pointer-events-none"
      />

      {/* Data Collection and Use */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Data Collection and Use</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        NotifyME requires access to your Upwork account to scrape job listings.
        However, we do not directly scrape or store your personal data. Instead,
        we use authenticated access to fetch job listings that match your
        preferences and deliver notifications to you.
      </p>
      <div
        className="bg-gray-800/50 
        h-px pointer-events-none"
      />

      {/* Authentication */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Authentication</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        To enable job notifications, you must authenticate your Upwork account
        through our application. This process ensures secure access to your
        job-related data without compromising your account credentials.
      </p>
      <div
        className="bg-gray-800/50 
        h-px pointer-events-none"
      />

      {/* Third-Party Services */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Third-Party Services</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        NotifyME uses trusted third-party APIs to interact with Upwork. These
        services comply with data security and privacy standards, ensuring that
        your information remains secure.
      </p>
      <div
        className="bg-gray-800/50 
        h-px pointer-events-none"
      />

      {/* Data Security */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Data Security</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        We prioritize the security of your data. All interactions with your
        Upwork account are encrypted, and we do not store sensitive information
        on our servers. Your privacy is our top concern.
      </p>
      <div
        className="bg-gray-800/50 
        h-px pointer-events-none"
      />

      {/* User Responsibility */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">User Responsibility</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        As a user, you are responsible for safeguarding your Upwork credentials
        and ensuring that your account remains secure. NotifyME will not be
        liable for unauthorized access caused by negligence.
      </p>
      <div
        className="bg-gray-800/50 
        h-px pointer-events-none"
      />

      {/* Contact Us */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Contact Us</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4 inline">
        If you have any questions or concerns regarding this Privacy Policy,
        feel free to reach out to us at{" "}
        <a
          href={`mailto:notifyme.connect@gmail.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-400 flex"
          style={{ display: "inline-block" }} // Add this inline style
        >
          notifyme.connect@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Privacy;
