import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center space-y-8">
        {/* Contact Section */}
        <div className="text-center font-serif">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-2">
            <FaEnvelope /> jadoonafzal027@gmail.com
          </p>
          <p className="text-gray-400 flex items-center justify-center gap-2 mb-4">
            <FaPhoneAlt /> +923149961015
          </p>
          
          {/* Social Media Links */}
          <div className="flex gap-4 justify-center">
            <a href="https://www.linkedin.com/in/mir-afzal-khan-131519252/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/afzaljadoon" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillGithub />
            </a>
            <a href="https://www.facebook.com/ayan.ailkhan.5?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
              <AiFillFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;