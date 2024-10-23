import React from "react";

export const Gallery = () => {
  const images = [
    {
      src: "https://www.theweddingschool.in/wp-content/uploads/2018/09/download.jpg",
      alt: "Event 1",
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2024/2/394351344/ZJ/MH/TK/58326241/wedding-event-management-service-500x500.jpg",
      alt: "Event 2",
    },
    {
      src: "https://5.imimg.com/data5/KL/YM/RD/SELLER-86062790/wedding-eventmanager.jpg",
      alt: "Event 3",
    },
    {
      src: "https://www.anantabd.net/wp-content/uploads/2020/03/Birthday-Party-Venues.jpg",
      alt: "Event 4",
    },
    {
      src: "https://greatcatwalk.com/images/2024new/birthday/Birthday-Event.jpg",
      alt: "Event 5",
    },
    {
      src: "https://lh3.googleusercontent.com/proxy/7BqpjB_RUzQzypCG1Fzim6xxZBP_LVETdqDMeVGeXT2i_YlEvsMH7xoDTe3Ckf2YdWq6a3eUno1E4LrvHxiiBLQHgcIVeNDJQs7CDZNKAg",
      alt: "Event 6",
    },
    {
      src: "https://lh3.googleusercontent.com/proxy/dIWWcJ9bp3nsfqzUB79V_EBVG1yfpIqOIHyvG4LCqcoeG4EE1iitYSisVc75nX-Bn8V_ryBUPEHTnj6FdwvrwhvQ-9LbcYH-PBsySOSFJulJkdVU",
      alt: "Event 7",
    },
    {
      src: "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/tr:w-450,h-250/centurion-banquet-hall-a-perfect-corporate-party-place-156.jpg",
      alt: "Event 8",
    },
    {
      src: "https://ik.imagekit.io/pu0hxo64d/uploads/gallery/outdoor-sitting-arrangement-at-pacific-asia-271.jpg",
      alt: "Event 9",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Event Management Showcase
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore our highlights from various events we have managed, ranging
            from corporate meetings to unforgettable weddings. Each image
            captures the essence of our commitment to delivering exceptional
            experiences tailored to our clients’ needs.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          {images.map((image, index) => (
            <div key={index} className="flex flex-wrap w-1/3">
              <div className="md:p-2 p-1 w-full transition-transform duration-300 transform hover:scale-105">
                <img
                  alt={image.alt}
                  className="w-full h-full object-cover object-center block"
                  src={image.src}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
