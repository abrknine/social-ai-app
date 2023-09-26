import React from 'react';
import { Link,  } from 'react-router-dom';
import abhi from '../assets/abhi.jpg'


function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 p-4 flex items-center justify-between">
      {/* Left section with logo */}
      <div className="flex items-center">
        <img      
          src="/path-to-your-logo.png" // Replace with the actual path to your logo image
          alt="Logo"
          className="h-8 w-8 mr-2" // Adjust the height and width as needed
        />
        <span className="text-white text-lg font-semibold">Your Logo</span>
      </div>
      {/* Right section with navigation elements */}
      <ul className="flex space-x-4">
        
        <li>
        <Link className="text-white hover:text-gray-300 no-underline"  to="/"> Home</Link>
        </li>
        <li>
        <Link className="text-white hover:text-gray-300 no-underline"  to="/">Leaderboard</Link>
           
        </li>
        <li>
        <Link className="text-white hover:text-gray-300 no-underline "  to="/">Stories</Link>
        </li>
        <li>
           <img src={abhi} className='h-10 w-10 rounded-full' alt="" /> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

