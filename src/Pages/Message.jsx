import React from "react";

const Message = () => {
  const messages = [
    {
      id: 1,
      sender: "Abhay",
      content: "Can you explain me a few topics in chemistry?",
      profilePic: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      id: 2,
      sender: "Mohit",
      content: "Can we discuss the project tomorrow?",
      profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 3,
      sender: "Nikhil",
      content: "Lol, I was going for it!",
      profilePic: "https://randomuser.me/api/portraits/men/25.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Messages</h1>
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center p-4 bg-white shadow rounded space-x-4"
          >
            <img
              src={message.profilePic}
              alt={`${message.sender}'s profile`}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <div className="text-purple-600 font-semibold">
                {message.sender}
              </div>
              <div>{message.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
