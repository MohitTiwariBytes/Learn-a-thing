import React, { useState, useRef } from "react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleClick = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length, text: message },
      ]);
      setMessage(""); // Clear the input after sending the message
    }
  };

  // Event listener for the Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default action (like a form submission)
      handleClick(); // Call handleClick when Enter is pressed
    }
  };

  return (
    <div className="main h-screen w-full relative flex justify-center">
      <div className="input w-4/5 fixed bottom-5">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium sr-only dark:text-white"
        >
          Enter your questions
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <i className="fas fa-robot text-purple-500"></i>
          </div>
          <input
            ref={inputRef}
            type="search"
            id="search"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown} // Attach the keydown listener here
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-purple-300 rounded-lg bg-white-50 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Enter your questions!"
            required
          />
          <button
            type="submit"
            onClick={handleClick}
            className="text-white absolute end-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Ask
          </button>
        </div>
      </div>
      <div
        ref={chatBoxRef}
        className="chat w-full h-screen overflow-scroll flex flex-col items-start p-5"
      >
        {messages.map((msg) => (
          <div key={msg.id} className="flex w-full justify-end">
            <span className="inline-block max-w-[320px] break-words bg-purple-500 py-2 px-5 text-white rounded-xl my-5">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
