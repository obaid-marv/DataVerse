import React from "react";
import { IMAGES } from "../../assets"; // Ensure you have proper image assets
import { FaUserPlus, FaComment, FaThumbsUp, FaBell } from "react-icons/fa";

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      type: "connection",
      name: "Jane Smith",
      message: "wants to connect with you.",
      avatar: IMAGES.avatar4,
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      type: "like",
      name: "Mark Stevens",
      message: "liked your post.",
      avatar: IMAGES.avatar5,
      timestamp: "5 minutes ago",
    },
    {
      id: 3,
      type: "comment",
      name: "Alice Johnson",
      message: "commented on your post.",
      avatar: IMAGES.avatar6,
      timestamp: "10 minutes ago",
    },
    {
      id: 4,
      type: "mention",
      name: "John Doe",
      message: "mentioned you in a comment.",
      avatar: IMAGES.avatar7,
      timestamp: "15 minutes ago",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-8">
      <h1 className="text-2xl font-bold text-customBlue mb-6">Notifications</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications available.</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center border-b last:border-b-0 py-4"
            >
              <img
                src={notification.avatar}
                alt={notification.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <p className="font-semibold">{notification.name}</p>
                <p className="text-gray-600">{notification.message}</p>
                <span className="text-sm text-gray-400">{notification.timestamp}</span>
              </div>
              <div className="text-customBlue">
                {notification.type === "connection" && <FaUserPlus />}
                {notification.type === "like" && <FaThumbsUp />}
                {notification.type === "comment" && <FaComment />}
                {notification.type === "mention" && <FaBell />}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationScreen;
