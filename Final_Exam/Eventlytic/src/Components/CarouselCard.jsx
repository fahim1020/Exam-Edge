import React, { useEffect } from "react";

export const CarouselCard = ({ slide, index, slides }) => {

  return (
    <div id={slide.id} className="carousel-item relative w-full">
      <img src={slide.imgSrc} className="w-full" alt={`Slide ${index + 1}`} />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a
          href={index === 0 ? `#slide4` : `#slide${index}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={index === slides.length - 1 ? `#slide1` : `#slide${index + 2}`}
          className="nextSlide btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
};
