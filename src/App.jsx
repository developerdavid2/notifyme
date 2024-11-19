import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import ScrollToTop from "./providers/ScrollToTop.jsx";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out", // Easing function for animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
