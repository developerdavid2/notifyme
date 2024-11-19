import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App.jsx";

import ScrollToTop from "../providers/ScrollToTop.jsx";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const Waitlist = lazy(() => import("../pages/Waitlist.jsx"));
const TermsOfService = lazy(() => import("../pages/TermsOfService.jsx"));
const Privacy = lazy(() => import("../pages/Privacy.jsx"));

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
