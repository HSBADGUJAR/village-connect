import React, { useState } from "react";

const ChatUI = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Ramesh", text: "Namaste! How can I help you today?" },
    { id: 2, sender: "You", text: "I wanted to know about today's Gram Sabha meeting." },
    { id: 3, sender: "Ramesh", text: "It’s at 5 PM in the Panchayat Hall." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      text: input,
    };

    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white p-3 font-semibold rounded-t-lg">
        Village Connect Chat
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
                msg.sender === "You"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <span className="block font-medium">{msg.sender}</span>
              <span>{msg.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex p-2 border-t border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-green-300"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
