import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/event";
import "./index.css";
import EventDetails from "./pages/event-details";
import TestingPage from "./pages/testingPage";
import ScrollToTop from "./scrollToTop";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LandingPage />
      </>
    ),
  },
  {
    path: "/event",

    element: (
      <>
        <ScrollToTop />
        <EventPage />
      </>
    ),
  },
  {
    path: "/event-details/:id",
    element: (
      <>
        <ScrollToTop />
        <EventDetails />
      </>
    ),
  },
  {
    path: "/testing",
    element: <TestingPage />,
  },
]);
function scrollToTarget(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
