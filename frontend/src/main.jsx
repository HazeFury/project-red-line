import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Routes,
  // BrowserRouter as Router,
} from "react-router-dom";
import { UserContextProvider } from "./contexts/userContext";

import App from "./App";
import Home from "./pages/Home/Home";
import BikesList from "./pages/BikesList/BikesList";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Auth/Register";
import AdminHome from "./Admin/pages/AdminHome";
import Login from "./pages/Auth/Login";

const theme = createTheme({
  palette: {
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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    element: <AdminHome />,
    path: "/admin",
  },
]);

// ---------- ANCIENNE VERSION DE REACT ROUTER DOM  ------------------

// function Navigation() {
//   return (
//     <UserContextProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<App />}>
//             <Route index element={<Home />} />
//             <Route path="bikes" element={<BikesList />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="register" element={<Register />} />
//           </Route>
//           <Route path="/admin" element={<AdminHome />} />
//         </Routes>
//       </Router>
//     </UserContextProvider>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        {/* <Navigation /> */}
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>
);
