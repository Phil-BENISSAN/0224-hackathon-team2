import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import Question from "./components/Question"
import AboutUs from "./pages/AboutUs"

import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/question",
        element: <Question />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/softskills_test")
          const data = await response.json()
          console.log(data);
          return data
        }
      },
      {
        path: "/about",
        element: <AboutUs />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);