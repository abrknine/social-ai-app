import React from 'react';
import TypewriterComponent from "typewriter-effect";
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="text-white h-3/4 md:h-screen flex flex-col justify-center bg-gray-300">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome to Our Website</h1>
        <p className="text-lg mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          <TypewriterComponent
            options={{
              strings: [
                'Discover amazing stories and more.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="text"
            className="w-full bg-gray-200 border-2 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2  focus:border-transparent text-black"
            placeholder="Search..."
          />
          <button
            className="bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-600 text-white font-semibold py-2 px-6 rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 my-4"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

