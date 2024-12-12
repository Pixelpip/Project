"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { socket } from "../socket"; // Assuming this is the socket instance
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/clerk-react"; // Clerk hook to get user data

const ChatWindow = () => {
  const { user } = useUser(); // Get the current user from Clerk
  const path = usePathname();
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Listen for incoming messages
  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("chatMessage"); // Cleanup on unmount
    };
  }, []);

  // Send message function
  const sendMessage = (msg) => {
    if (!user) return; // Ensure user is logged in

    const messageDetail = {
      userId: user.id, // Send the user ID from Clerk
      userName: user.fullName || "Anonymous", // Use Clerk's full name or fallback to Anonymous
      msg: msg,
      path: path,
    };

    // Emit the message to the server via socket
    socket.emit("chatMessage", messageDetail);

    // Add message to local state for immediate display
    setMessages((prevMessages) => [...prevMessages, messageDetail]);
  };

  const handleKeyup = (event) => {
    if (event.key === "Enter" && messageInput.trim() !== "") {
      sendMessage(messageInput);
      setMessageInput(""); // Clear the input after sending
    }
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="bg-white p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"></div>
          <div>
            <div className="font-semibold">{user ? user.fullName : "User"}</div> {/* Use Clerk's full name */}
            <div className="text-sm text-green-500">Active Now</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen bg-gray-50">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4" onKeyUp={handleKeyup}>
          {/* Messages */}
          <div className="message_area space-y-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.userId === user?.id ? "outgoing" : "incoming"} flex items-end space-x-3 ${message.userId === user?.id ? "justify-end" : ""}`}>
                <div className={`p-3 rounded-lg shadow-md max-w-xs ${message.userId === user?.id ? "bg-green-100" : "bg-blue-100"}`}>
                  <h4 className={`font-semibold ${message.userId === user?.id ? "text-green-600 text-right" : "text-blue-600"}`}>
                    {message.userName}
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
