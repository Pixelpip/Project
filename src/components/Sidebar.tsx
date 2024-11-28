"use client";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi"; 
export default function SidebarComponent() {
  // Sample static list of users to display
  const users = [
    { id: 1, name: "User One", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "User Two", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "User Three", imageUrl: "https://via.placeholder.com/150" },
    // Add more users as needed
  ];

  return (
    <div className="h-screen">
    <Sidebar aria-label="User sidebar">
    <h2 className="px-4 py-2 text-xl font-semibold">Logged In As</h2>
   <div className='flex items-center justify-center text-center'><UserButton /> </div>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <h3 className="px-4 py-2 text-xl font-semibold">Recent Chats</h3>
          {users.map((user) => (
            <Sidebar.Item key={user.id} href="#">
              <div className="flex items-center">
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{user.name}</span>
              </div>
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}
