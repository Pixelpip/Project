"use client";

import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // Ensure messages is an array

  useEffect(() => {
    const handleMessage = (msg) => {
      if (msg) {
        setMessages((prev) => [...prev, msg]); // Safely update the state
      }
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage); // Clean up the listener
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("message", message); // Send message to the server
      setMessage(""); // Clear input field
    }
  };

  return (
    <div className="chat-app">
      <h1>Real-Time Chat</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <style jsx>{`
        .chat-app {
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: 50px auto;
          text-align: center;
        }
        .messages {
          border: 1px solid #ccc;
          padding: 10px;
          height: 300px;
          overflow-y: auto;
          margin-bottom: 10px;
        }
        .chat-input {
          display: flex;
          gap: 10px;
        }
        input {
          flex: 1;
          padding: 10px;
        }
        button {
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
}
