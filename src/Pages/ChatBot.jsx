import React, { useState, useRef, useEffect } from "react";
import { getChatGPTResponse } from "../Backend/Bot";  // Import the function

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // Function to handle sending a message
  const handleClick = async () => {
    if (message.trim()) {
      // Add the user's message to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length, text: message, sender: 'user' },
      ]);

      // Clear the input field
      setMessage(""); 

      try {
        // Get the response from ChatGPT
        const aiResponse = await getChatGPTResponse(message);
        
        // Add the AI's response to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: aiResponse, sender: 'ai' },
        ]);
      } catch (error) {
        console.error("Error getting response from ChatGPT:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: "Sorry, I couldn't process your request.", sender: 'ai' },
        ]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick(); 
    }
  };

  // Scroll to the bottom whenever the messages change
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]); // Trigger on message change

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
            onKeyDown={handleKeyDown} 
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
          <div key={msg.id} className={`flex w-full ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}>
            <span className={`inline-block max-w-[320px] break-words ${msg.sender === 'ai' ? 'bg-purple-700' : 'bg-purple-500'} py-2 px-5 text-white rounded-xl my-5`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
