// src/components/ChatIcon.js
import React, { useState } from "react";
import { FaComments } from "react-icons/fa";
import "./ChatIcon.css";

const ChatIcon = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };
  return (
    <>
      {/* Floating Button */}
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        <FaComments size={28} color="white" />
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <h4>Chat Support</h4>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>
          <div className="chat-body">
            <p>Hello! How can I help you?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type a message..." />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatIcon;
