import React, { useState } from "react";
import { IMAGES } from "../../assets"; // Ensure you have proper image assets
import { FaPaperPlane } from "react-icons/fa";

const MessagingScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Jane Smith",
      avatar: IMAGES.avatar4,
      lastMessage: "Hey! How's it going?",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      name: "Mark Stevens",
      avatar: IMAGES.avatar5,
      lastMessage: "Let's catch up soon!",
      timestamp: "10 minutes ago",
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: IMAGES.avatar6,
      lastMessage: "Did you get my last email?",
      timestamp: "30 minutes ago",
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([...chatMessages, { text: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Conversations List */}
      <div className="bg-white p-4 shadow-md rounded-md mx-10 mt-4">
        <h2 className="text-lg font-bold mb-4">Messages</h2>
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex items-center border-b py-2 cursor-pointer"
            onClick={() => setSelectedChat(message)}
          >
            <img
              src={message.avatar}
              alt={message.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="flex-1">
              <p className="font-semibold">{message.name}</p>
              <p className="text-gray-600">{message.lastMessage}</p>
            </div>
            <span className="text-sm text-gray-400">{message.timestamp}</span>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      {selectedChat && (
        <div className="flex-1 bg-white p-4 shadow-md rounded-md mx-10 mt-4">
          <h2 className="text-lg font-bold mb-4">{selectedChat.name}</h2>
          <div className="h-64 overflow-y-auto mb-4">
            {chatMessages.map((chat, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  chat.sender === "me" ? "text-right" : ""
                }`}
              >
                <p
                  className={`inline-block p-2 rounded-md ${
                    chat.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {chat.text}
                </p>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-2 border rounded-md"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagingScreen;
