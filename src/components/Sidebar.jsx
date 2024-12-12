"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation"; // For navigation and route detection
import { AiOutlineMessage } from "react-icons/ai"; // Room icon

const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  // Function to navigate to the selected room
  const navigateToRoom = (room) => {
    router.push(`/${room}`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-80 bg-white border-r flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <UserButton className="flex items-center space-x-3" />
        </div>

        <div className="p-4 flex-1">
          <h3 className="font-semibold text-xl text-gray-700 mb-4">Rooms</h3>

          <div className="space-y-4">
            {/* Tech Room Button */}
            <button
              className={`flex items-center space-x-2 p-2 rounded-md text-left w-full hover:bg-gray-200 ${
                pathname === "/tech" ? "bg-blue-200" : ""
              }`}
              onClick={() => navigateToRoom("tech")}
            >
              <AiOutlineMessage size={20} className="text-blue-500" />
              <span className="text-gray-600">Tech</span>
            </button>

            {/* Casual Room Button */}
            <button
              className={`flex items-center space-x-2 p-2 rounded-md text-left w-full hover:bg-gray-200 ${
                pathname === "/casual" ? "bg-green-200" : ""
              }`}
              onClick={() => navigateToRoom("casual")}
            >
              <AiOutlineMessage size={20} className="text-green-500" />
              <span className="text-gray-600">Casual</span>
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
