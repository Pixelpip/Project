"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { socket } from "../socket"; // Import the socket client

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Listen for incoming messages
  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup socket event listeners on unmount
    return () => {
      socket.off("chatMessage");
    };
  }, []);

  // Send message function
  const sendMessage = (msg) => {
    const messageDetail = {
      user: socket.id,  // Use socket.id to identify the user sending the message
      msg: msg,
    };

    // Emit the message to the server via socket
    socket.emit("chatMessage", messageDetail);

    // Add message to local state for immediate display
    setMessages((prevMessages) => [...prevMessages, messageDetail]);
  };

  // Handle the 'Enter' key press for sending a message
  const handleKeyup = (event) => {
    if (event.key === "Enter" && messageInput.trim() !== "") {
      sendMessage(messageInput);
      setMessageInput(""); // Clear the input after sending
    }
  };

  // Handle the input change
  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-white p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            {/* Replace with actual user info if needed */}
          </div>
          <div>
            <div className="font-semibold">User</div> {/* Replace with dynamic user name if required */}
            <div className="text-sm text-green-500">Active Now</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen bg-gray-50">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4" onKeyUp={handleKeyup}>
          {/* Welcome message */}
          <div className="flex justify-center">
            <div className="bg-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600">
              Welcome!
            </div>
          </div>

          {/* Messages */}
          <div className="message_area space-y-4 overflow-y-auto">
            {/* Messages */}
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.user === socket.id ? "outgoing" : "incoming"} flex items-end space-x-3 ${message.user === socket.id ? "justify-end" : ""}`}>
                <div className={`p-3 rounded-lg shadow-md max-w-xs ${message.user === socket.id ? "bg-green-100" : "bg-blue-100"}`}>
                  <h4 className={`font-semibold ${message.user === socket.id ? "text-green-600 text-right" : "text-blue-600"}`}>
                    {message.user}
                  </h4>
                  <p className="text-gray-700">{message.msg}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center p-4">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type your message..."
              value={messageInput}
              onChange={handleInputChange}
            />
            <button
              className="ml-2 p-2 bg-green-500 text-white rounded-full"
              onClick={() => {
                sendMessage(messageInput);
                setMessageInput(""); // Clear input after sending
              }}
            >
              <AiOutlineSend size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
