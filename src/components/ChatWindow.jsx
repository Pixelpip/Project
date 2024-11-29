"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { GoPaperclip } from "react-icons/go";
import { AiOutlineSend } from "react-icons/ai";

const handleSend = (e) => {
  e.preventDefault();
  if (message.trim() && currentRoom) {
    setMessages([...messages, {
      id: messages.length + 1,
      text: message,
      sender: "me",
      type: "text",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setMessage('');
  }
};

const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col">
        <div className="bg-white p-4 border-b flex justify-between items-center">
        <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <UserButton className="text-gray-500" size={20} />
            </div>
            <div>
              <div className="font-semibold"></div>
              <div className="text-sm text-green-500">Active Now</div>
            </div>
            
        </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg px-4 py-2 text-sm text-gray-500">
                Welcome to Test!
              </div>
            </div>
            
          </div>
        </div>
        <div className="bg-white p-4 border-t">
          <form onSubmit={handleSend} className="flex items-center space-x-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowFileMenu(!showFileMenu)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <GoPaperclip size={20} />
              </button>
            </div>
              
            <input
              type="text"
              
              
              placeholder="Type a message"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 focus:outline-none"
            >
              <AiOutlineSend size={20} />
            </button>
            </form>
            </div>
          
        </div>
    
  )
}

export default ChatWindow