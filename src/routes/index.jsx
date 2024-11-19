import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App.jsx";

import ScrollToTop from "../providers/ScrollToTop.jsx";
import Waitlist from "../pages/Waitlist.jsx";
import TermsOfService from "../pages/TermsOfService.jsx";
import Privacy from "../pages/Privacy.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        index: true, // For the homepage
        element: <HomePage />,
      },
      {
        path: "waitlist",
        element: <Waitlist />,
      },
      {
        path: "terms",
        element: <TermsOfService />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
    ],
  },
]);

export default router;
