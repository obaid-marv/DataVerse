import React, { useState } from "react";
import { IMAGES } from "../../assets";
import { FaUserPlus, FaComment, FaThumbsUp, FaBell } from "react-icons/fa";
import { MdCheckCircle, MdClose } from "react-icons/md";
import { notificationContent } from "../../constants/notificationContent";
import { useNavigate } from "react-router-dom";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState(notificationContent);
  const navigate = useNavigate();

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleDismiss = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "connection":
        return <FaUserPlus className="text-customBlue" />;
      case "like":
        return <FaThumbsUp className="text-customBlue" />;
      case "comment":
        return <FaComment className="text-customBlue" />;
      case "mention":
        return <FaBell className="text-customBlue" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-8 space-y-6">
      {/* Title and Summary Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-customBlue">Notifications</h1>
        <div className="bg-white p-4 rounded-md shadow-sm flex items-center space-x-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">
              {notifications.length}
            </p>
            <p className="text-sm text-gray-500">Total Notifications</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">
              {notifications.filter((n) => !n.isRead).length}
            </p>
            <p className="text-sm text-gray-500">Unread</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search notifications..."
          className="p-3 w-full border rounded-md focus:outline-none focus:ring focus:ring-customBlue"
        />
      </div>

      {/* Notification Cards */}
      <div className="bg-white p-6 rounded-md shadow-md">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications available.</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center justify-between p-4 mb-4 border rounded-lg shadow-sm ${
                notification.isRead ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition duration-200`}
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={notification.avatar}
                    alt={notification.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  {!notification.isRead && (
                    <span className="absolute top-0 right-4 h-3 w-3 rounded-full bg-red-500"></span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-customBlack">
                    {notification.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {notification.message}
                  </p>
                  <span className="text-xs text-gray-400">
                    {notification.timestamp}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div>{getIcon(notification.type)}</div>
                {!notification.isRead && (
                  <MdCheckCircle
                    className="text-green-500 cursor-pointer"
                    onClick={() => markAsRead(notification.id)}
                    size={20}
                  />
                )}
                <MdClose
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDismiss(notification.id)}
                  size={20}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between items-center bg-white p-6 rounded-md shadow-md">
        <button
          onClick={() => navigate("/connection/view-all-connections")}
          className="bg-customBlue text-white py-2 px-6 rounded-md"
        >
          View All Connections
        </button>
        <button
          onClick={() => navigate("/connection/post-screen") }
          className="bg-customBlue text-white py-2 px-6 rounded-md"
        >
          Post an Update
        </button>
        <button onClick={() => navigate("/connection/messaging-screen")}
         className="bg-customBlue text-white py-2 px-6 rounded-md">
          Chat with Someone
        </button>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-md shadow-md pb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
              You liked a post from <strong>John Doe</strong>.
            </p>
            <span className="text-xs text-gray-400">10 minutes ago</span>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
              <strong>Alice Johnson</strong> commented on your post.
            </p>
            <span className="text-xs text-gray-400">20 minutes ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationScreen;
