import React from "react";
import { Carousel } from "../Components/Carousel";
import { Events } from "../Components/Events";
import { Pagination } from "../Components/Pagination";
import { Speakers } from "../Components/Speakers";
import { AppDownload } from "../Components/AppDownload";
import { Testimonials } from "../Components/Testimonials";
import { Statistics } from "../Components/Statistic";
import { NextEventTimer } from "../Components/NextEventTimer";
import { Pricing } from "../Components/Pricing";
import { Info } from "../Components/Info";
import { LatestBlogPosts } from "../Components/LatestBlogPosts";
import { FAQ } from "../Components/FAQ";
import { Diff } from "../Components/Diff";
import { Rating } from "../Components/Rating";

export const Home = () => {
  return (
    <>
      <Carousel />
      <Events />
      {/* <Pagination /> */}
      <Speakers />
      <AppDownload />
      <Statistics />
      <Info />
      <Testimonials />
      <FAQ />
      <Pricing />
      <NextEventTimer />
      <Diff />
      <Rating/>
      <LatestBlogPosts />
    </>
  );
};
