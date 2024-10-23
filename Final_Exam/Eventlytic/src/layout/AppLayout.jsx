import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTop/>
      <Footer />
    </>
  );
};
