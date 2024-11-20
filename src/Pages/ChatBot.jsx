import React from "react";

export default function ChatBot() {
  return (
    <div className="main h-screen w-full relative flex justify-center">
      <div className="input w-4/5 fixed bottom-5 ">
        <label
          for="search"
          class="mb-2 text-sm font-medium sr-only dark:text-white"
        >
          Enter your questions
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <i className="fas fa-robot text-purple-500"></i>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-purple-300 rounded-lg bg-white-50 focus:ring-purple-500 focus:border-purple-500  "
            placeholder="Enter your questions!"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}
