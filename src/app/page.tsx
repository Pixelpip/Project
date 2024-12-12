// src/app/page.tsx
import Sidebar from '@/components/Sidebar';
import './global.css';

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar on the left */}
      <Sidebar />

 
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-700 mb-4">
            Welcome!
          </h1>
          <p className="text-gray-600">
            Select a room from the sidebar to start chatting.
          </p>
        </div>
      </div>
    </div>
  );
}
