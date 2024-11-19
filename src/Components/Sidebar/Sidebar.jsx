import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-4/5 w-64 bg-white shadow-md border-2 rounded-r-lg overflow-auto relative top-16">
      <ul className="flex flex-col space-y-3.5 p-4 text-purple-500">
        <li>
          <Link
            to="/messages"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-comments"></i>
            <span>Messages</span>
          </Link>
        </li>
        <li>
          <Link
            to="/books"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-book"></i>
            <span>Books</span>
          </Link>
        </li>
        <li>
          <Link
            to="/community"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-users"></i>
            <span>Community</span>
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-video"></i>
            <span>Courses</span>
          </Link>
        </li>
        <li className="h-px bg-gray-300"></li>
        <li>
          <Link
            to="/todo"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-list"></i>
            <span>To do list</span>
          </Link>
        </li>
        <li>
          <Link
            to="/quizzes"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-question-circle"></i>
            <span>Quizzes</span>
          </Link>
        </li>
        <li>
          <Link
            to="/pomodoro"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-clock"></i>
            <span>Pomodoro</span>
          </Link>
        </li>
        <li>
          <Link
            to="/tips"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-lightbulb"></i>
            <span>Tips and Tricks</span>
          </Link>
        </li>
        <li className="h-px bg-gray-300"></li>
        <li>
          <Link
            to="/profile"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="flex items-center space-x-2 p-2 hover:bg-purple-100 rounded"
          >
            <i className="fas fa-cog"></i>
            <span>Setting</span>
          </Link>
        </li>
        <li className="flex items-center space-x-2 p-2 text-red-500">
          <i className="fas fa-info-circle"></i>
          <span>Version 1.0</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
