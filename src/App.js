import React, { useState } from "react";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./darkmode/globalStyles";
import { lightTheme, darkTheme } from "./darkmode/Theme";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className=" ">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Header themeToggler={themeToggler} />
          <Outlet />
          <Footer />
        </>
      </ThemeProvider>
    </div>
  );
};
export const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default App;
