import React from "react";
import GoogleIcon from "../assets/google.png";
import FacebookIcon from "../assets/facebook.png";
import GithubIcon from "../assets/facebook1.png";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4">Choose a Login Method</h1>
        <div className="flex space-x-4">
          <div
            className="flex items-center p-2 rounded-md bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-600 text-white cursor-pointer hover:bg-blue-600"
            onClick={google}
          >
            <img src={GoogleIcon} alt="Google" className="w-6 h-6 mr-2" />
            Google
          </div>
          <div
            className="flex items-center p-2 rounded-md bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-600 text-white cursor-pointer hover:bg-blue-900"
            onClick={facebook}
          >
            <img src={FacebookIcon} alt="Facebook" className="w-6 h-6 mr-2" />
            Facebook
          </div>
          <div
            className="flex items-center p-2 rounded-md bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-600 text-white cursor-pointer hover:bg-gray-900"
            onClick={github}
          >
            <img src={GithubIcon} alt="Github" className="w-6 h-6 mr-2" />
            Github
          </div>
        </div>
        <div className="mt-6 border-t-2 border-gray-300 pt-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-3 w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="mt-4 flex justify-center">
            <button className="bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Login;

