import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-2 px-4 flex justify-between items-center ">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src="./logo.png" alt="Synapse" className="h-10" />
        </Link>
      </div>
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Ask your doubts"
            className="w-full border rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-purple-500"
          />
          <span className="absolute left-3 top-2/4 transform -translate-y-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.25 4.25a1 1 0 11-1.414 1.414l-4.25-4.25zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="absolute right-3 top-2/4 transform -translate-y-2/4">
            <img
              src="./camera.png"
              alt="Camera"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="./music.png"
          alt="Icon1"
          className="h-6 w-6 hover:bg-purple-100"
        />
        <img
          src="./notification.png"
          alt="Icon2"
          className="h-6 w-6 hover:bg-purple-100"
        />
        <img
          src="./dark.png"
          alt="Icon3"
          className="h-6 w-6 hover:bg-purple-100"
        />
        <Link to="/auth">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
