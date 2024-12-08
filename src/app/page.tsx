// src/app/page.tsx
"use client";
import Sidebar from '@/components/Sidebar';
import './global.css';

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center bg-white">
        <h1 className="text-2xl font-bold text-gray-700">
          Welcome to the Chat App
        </h1>
        <p className="text-gray-500 mt-2">
          Select a route from the sidebar to start chatting!
        </p>
      </div>
    </div>
  );
}
