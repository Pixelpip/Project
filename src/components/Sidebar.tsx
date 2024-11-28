"use client";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi"; 
import { ChatMessageList } from "./ui/chat/chat-message-list";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "./ui/chat/chat-bubble";

export default function SidebarComponent() {
  // Sample static list of users to display
  const users = [
    { id: 1, name: "User One", imageUrl: "https://via.placeholder.com/150" },
    { id: 2, name: "User Two", imageUrl: "https://via.placeholder.com/150" },
    { id: 3, name: "User Three", imageUrl: "https://via.placeholder.com/150" },
    // Add more users as needed
  ];

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-50 border-r border-gray-200">
        <Sidebar aria-label="User sidebar">
          <h2 className="px-4 py-2 text-xl font-semibold">Logged In As</h2>
          <div className="flex items-center justify-center text-center">
            <UserButton />
          </div>
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

      {/* Chat Window */}
      <div className="w-3/4 p-4 flex flex-col">
        <ChatMessageList>
          <ChatBubble variant="sent">
            <ChatBubbleAvatar fallback="US" />
            <ChatBubbleMessage variant="sent">
              Hello, how has your day been? I hope you are doing well.
            </ChatBubbleMessage>
          </ChatBubble>

          <ChatBubble variant="received">
            <ChatBubbleAvatar fallback="AI" />
            <ChatBubbleMessage variant="received">
              Hi, I am doing well, thank you for asking. How can I help you today?
            </ChatBubbleMessage>
          </ChatBubble>

          <ChatBubble variant="received">
            <ChatBubbleAvatar fallback="AI" />
            <ChatBubbleMessage isLoading />
          </ChatBubble>
        </ChatMessageList>
      </div>
    </div>
  );
}
