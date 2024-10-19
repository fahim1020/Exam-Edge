import React from "react";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Diff } from "../components/Diff";
import { Rating } from "../components/Rating";
import { Divider } from "../components/Divider";

export const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Hero />
      <Divider />
      <Products />
      <Divider />
      <Rating />
      <Diff />
      <Footer />
    </>
  );
};
