import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { ConsentPage, LoginPage, OtpPage, SuccessPage } from "./pages";

import { PATHS } from "./constants";

import "./index.css";

const router = createHashRouter([
  {
    path: PATHS.login,
    element: <LoginPage />,
  },
  {
    path: PATHS.otp,
    element: <OtpPage />,
  },
  {
    path: PATHS.consent,
    element: <ConsentPage />,
  },
  {
    path: PATHS.success,
    element: <SuccessPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
