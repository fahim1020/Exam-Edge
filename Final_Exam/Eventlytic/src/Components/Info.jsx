import React from "react";

export const Info = () => {
  return (
    <section className="text-gray-600 body-font bg-white my-2">
      <div className="container px-5 py-24 mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-4">
            Explore Our Event Highlights
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Dive into the key features of our event, from insightful sessions
            and expert panels to interactive workshops and networking
            opportunities.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap -m-4">
          {/* Each Category */}
          {["Workshops", "Keynote Sessions", "Networking", "Exhibitions"].map(
            (category, index) => (
              <div className="p-4 lg:w-1/4 sm:w-1/2 w-full" key={index}>
                <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
                  {category}
                </h2>
                <nav className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                  {[
                    "Session Overview",
                    "Speaker Profiles",
                    "Event Schedule",
                    "Venue Details",
                    "FAQs",
                  ].map((link, linkIndex) => (
                    <a href="#" key={linkIndex}>
                      <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
