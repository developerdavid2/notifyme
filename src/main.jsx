import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import LoadingScreen from "./LoadingScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
