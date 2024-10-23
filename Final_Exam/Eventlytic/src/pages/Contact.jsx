import React, { useState } from "react";
import ContactForm from "../Components/ContactForm";

export const Contact = () => {
  const [error, setError] = useState("");

  const handleFormSubmit = ({ name, email, message }) => {
    // Handle the form submission
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    console.log("Form submitted:", { name, email, message });

    // No need to reset the error here since it's handled in ContactForm
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06243047205!2d-74.30933728043162!3d40.69701925911035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1728814809638!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: "0" }} // Corrected style prop
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white p-4 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Let's bring your event vision to life. Contact us for more details!
          </p>
          <ContactForm onSubmit={handleFormSubmit} error={error} />
          <p className="text-xs text-gray-500 mt-3">
            We look forward to planning an unforgettable event for you.
          </p>
        </div>
      </div>
    </section>
  );
};
