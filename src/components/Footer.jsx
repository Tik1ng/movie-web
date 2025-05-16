import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-indigo-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-2">
              <img src="./filmw.svg" alt="film icon" className="mr-2" />
              <p className="text-white text-xl font-medium">Movie Z</p>
            </div>
            <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-base font-medium mb-4">Contact Information</h3>
            <div className="flex items-start mb-4">
              <img
                src="./envelope.svg"
                alt="email icon"
                className="mr-2 mt-1"
              />
              <div>
                <p className="text-sm">Email:</p>
                <p className="text-sm">support@movieZ.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <img src="./phone.svg" alt="phone icon" className="mr-2 mt-1" />
              <div>
                <p className="text-sm">Phone:</p>
                <p className="text-sm">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Instagram
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
