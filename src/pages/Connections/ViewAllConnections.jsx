// src/components/ViewAllConnections.jsx
import React from "react";
import { IMAGES } from "../../assets"; // Ensure you have proper image assets
import { FaCheckCircle, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const connectionsData = [
  {
    id: 1,
    name: "Jane Smith",
    avatar: IMAGES.avatar7,
    status: "Connected",
  },
  {
    id: 2,
    name: "Mark Johnson",
    avatar: IMAGES.avatar3,
    status: "Pending",
  },
  {
    id: 3,
    name: "Alice Williams",
    avatar: IMAGES.avatar9,
    status: "Connected",
  },
  // Add more connections as needed
];

const ViewAllConnections = () => {
  const navigate = useNavigate(); // Use navigate to redirect

  const handleMessageClick = () => {
    navigate("/connection/messaging-screen"); // Change to your messaging screen path
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-customBlue mb-8">All Connections</h1>
      <div className="bg-white p-6 rounded-md shadow-lg">
        {connectionsData.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">No connections found.</p>
        ) : (
          connectionsData.map((connection) => (
            <div key={connection.id} className="flex items-center border-b last:border-b-0 py-4 hover:bg-gray-50 transition duration-200">
              <img
                src={connection.avatar}
                alt={connection.name}
                className="w-14 h-14 rounded-full border-2 border-gray-200 mr-4 shadow-md"
              />
              <div className="flex-1">
                <p className="font-semibold text-customBlack text-lg">{connection.name}</p>
                <p className={`text-sm ${connection.status === "Connected" ? "text-green-600" : "text-yellow-600"}`}>
                  {connection.status === "Connected" ? (
                    <>
                      <FaCheckCircle className="inline mr-1" /> Connected
                    </>
                  ) : (
                    <>
                      <FaUserPlus className="inline mr-1" /> Pending
                    </>
                  )}
                </p>
              </div>
              <button 
                className="bg-customBlue text-white py-1 px-4 rounded-md shadow hover:bg-blue-700 transition duration-200"
                onClick={handleMessageClick} // Navigate on button click
              >
                Message
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewAllConnections;
