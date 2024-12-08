import React, { useState } from "react";
import axios from "axios";
import clsx from "clsx";
import toast, { Toaster } from "react-hot-toast";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Validate email address
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!email.trim()) {
      toast.error("Email field cannot be empty!");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    try {
      const data = { email };
      await axios.post(
        "https://backend-notifyme.vercel.app/api/v1/newsletter/subscribe",
        data
      );

      // Clear input field
      setEmail("");

      // Display success toast
      toast.success("Thanks for subscribing!");
    } catch (error) {
      // Display error toast
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center max-w-4xl pb-8 max-sm:w-full md:w-[80%] mx-auto">
      {/* Toast container */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            marginTop: "-40px", // Adjust this value to move the toast closer to the top
          },
        }}
      />
      <form onSubmit={sendEmail}>
        <div className="glass-container mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-6 px-6 py-6 rounded-3xl">
          <div className="w-full sm:flex-1">
            <label htmlFor="hero-input" className="sr-only">
              Enter your email
            </label>
            <input
              type="email"
              id="hero-input"
              name="hero-input"
              className="glass-input py-4 px-6 block w-full rounded-2xl text-sm focus:ring-2 focus:ring-white focus:outline-none placeholder-gray-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            className={clsx(
              "subscribe-button w-full sm:w-auto whitespace-nowrap py-4 px-6 inline-flex justify-center items-center gap-x-2 text-sm rounded-2xl focus:outline-none font-bold",
              { "opacity-50 cursor-not-allowed": loading }
            )}
            type="submit"
            disabled={loading}>
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
