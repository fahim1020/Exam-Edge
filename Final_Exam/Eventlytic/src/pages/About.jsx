import React from "react";
import { Speakers } from "../Components/Speakers";
import { Testimonials } from "../Components/Testimonials";
import { LatestBlogPosts } from "../Components/LatestBlogPosts";


export const About = () => {
  return (
    <>
      <Speakers />
      <Testimonials />
      <LatestBlogPosts/>    
    </>
  );
};
