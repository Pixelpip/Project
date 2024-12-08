"use client";
import { UserButton } from '@clerk/nextjs';
import React from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r shadow-lg flex flex-col">
        {/* User Section */}
        <div className="p-4 border-b flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-700">Chat App</h1>
          <UserButton className="ml-2" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex-1 flex flex-col p-4 space-y-4">
          <button
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => navigateTo('/tech')}
          >
            <span className="font-medium">💻 Tech</span>
          </button>
          <button
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
            onClick={() => navigateTo('/casual')}
          >
            <span className="font-medium">🎉 Casual</span>
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 border-t text-gray-500 text-sm text-center">
          © 2024 Chat App
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
