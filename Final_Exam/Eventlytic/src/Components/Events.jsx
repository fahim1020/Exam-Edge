import React from "react";

export const Events = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-1/3 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Manage Your Events Effortlessly
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              From weddings to corporate meetings, our platform provides all the
              tools you need to plan, organize, and manage your events.
              Collaborate with vendors, track progress, and ensure everything
              goes smoothly for a memorable experience.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://3.imimg.com/data3/CK/HV/MY-10570443/corporate-events-500x500.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Corporate Events
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Seamlessly organize conferences, meetings, and seminars with our
              easy-to-use tools, ensuring every detail is perfect for your
              attendees.
            </p>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://wp-media-partyslate.imgix.net/2021/08/photo-7d0d466f-4c40-4db5-8514-fca7a66154ae.jpeg?auto=compress%2Cformat&ixlib=php-3.3.1"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Weddings & Celebrations
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Make your special day stress-free with our event management
              system. Coordinate with vendors, create timelines, and manage
              guest lists effortlessly.
            </p>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://www.hire4event.com/blogs/wp-content/uploads/2019/07/Corporate-Event-Planning.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Social Gatherings
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Host amazing parties, community events, and celebrations with
              ease. Our platform ensures every aspect is covered, from planning
              to execution.
            </p>
            {/* <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};
