import React, { useState } from "react";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // Feedback for success/error

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Validate the form
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      setFormStatus("Please fill out all fields.");
      return;
    }

    emailjs.sendForm('service_hhdws9n', 'template_df5ihjh', e.target, 'jr3P6Z5uHUxI4dbtn')
      .then((result) => {
        setFormStatus("Message sent successfully!");
      }, (error) => {
        setFormStatus("Message failed to send. Please try again.");
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div id="contact" className="relative flex items-center justify-center min-h-screen px-6 font-serif">
      <Reveal>
        <div className="relative flex flex-col items-center max-w-lg w-full p-8 rounded-xl shadow-2xl bg-white bg-opacity-80">
          <p className="text-gray-800 font-bold text-3xl mb-6">Let’s Connect!</p>
          <form onSubmit={sendEmail} className="w-full space-y-6" id="form">
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="w-full rounded-lg border border-purple-500 py-3 px-4 text-gray-800 bg-gradient-to-r from-purple-100 to-purple-50 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="w-full rounded-lg border border-purple-500 py-3 px-4 text-gray-800 bg-gradient-to-r from-purple-100 to-purple-50 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Your Message ..."
              className="w-full rounded-lg border border-purple-500 py-3 px-4 text-gray-800 bg-gradient-to-r from-purple-100 to-purple-50 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold text-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
          {formStatus && (
            <p className="mt-4 text-center text-red-500">{formStatus}</p>
          )}
        </div>
      </Reveal>
    </div>
  );
}

export default Contact;