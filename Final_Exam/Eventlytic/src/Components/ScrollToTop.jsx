import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-4 p-4 rounded-full z-50 bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
