import React from "react";
import { CarouselCard } from "./CarouselCard";

const slides = [
  {
    id: "slide1",
    imgSrc:
      "https://www.anantabd.net/wp-content/uploads/2020/04/How-to-Start-Event-Management-Business-in-Bangladesh.jpg",
  },
  {
    id: "slide2",
    imgSrc:
      "https://www.i-eventplanner.com/wp-content/uploads/2015/09/Event-organizer.jpg",
  },
  {
    id: "slide3",
    imgSrc:
      "https://eclipse.global/wp-content/uploads/2018/11/So-Sri-Lanka-CS-2.jpg",
  },
  {
    id: "slide4",
    imgSrc:
      "https://www.pingpongmoments.in/blog/wp-content/uploads/2022/09/corporate-events-3.jpg",
  },
];

export const Carousel = () => {
  return (
    <div className="carousel w-full h-screen">
      {slides.map((slide, index) => (
        <CarouselCard
          key={slide.id}
          slide={slide}
          index={index}
          slides={slides}
        />
      ))}
    </div>
  );
};
