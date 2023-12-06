import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home";
import BikesList from "./pages/BikesList/BikesList";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255,255,255)",
    },
    secondary: {
      main: "rgb(255,100,100)",
    },
  },
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <BikesList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
