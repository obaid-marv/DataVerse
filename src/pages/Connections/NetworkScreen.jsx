import React, { useState } from "react";
import { IMAGES } from "../../assets"; // Ensure you have proper image assets
import { MdGroupAdd, MdPersonAdd, MdGroups } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

const NetworkScreen = () => {
  const [pendingInvites, setPendingInvites] = useState([
    {
      id: 1,
      name: "Jane Smith",
      title: "Data Scientist at TechCorp",
      avatar: IMAGES.avatar4,
    },
    {
      id: 2,
      name: "John Doe",
      title: "Software Engineer at XYZ Inc.",
      avatar: IMAGES.avatar5,
    },
  ]);

  const [connectionSuggestions, setConnectionSuggestions] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      title: "AI Researcher at OpenAI",
      avatar: IMAGES.avatar6,
    },
    {
      id: 2,
      name: "Mark Stevens",
      title: "ML Engineer at DeepMind",
      avatar: IMAGES.avatar7,
    },
  ]);

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Artificial Intelligence Enthusiasts",
    },
    {
      id: 2,
      name: "Machine Learning Innovators",
    },
  ]);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Left Sidebar */}
      {/* <div className="flex flex-col bg-customDarkBlue p-6 text-white w-[20%]">
        <h2 className="text-2xl font-bold mb-4">My Network</h2>
        <div className="space-y-4">
          <p className="cursor-pointer">Connections</p>
          <p className="cursor-pointer">Groups</p>
          <p className="cursor-pointer">Events</p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-customBlue mb-8">Manage Your Network</h1>

        {/* Pending Invitations */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Pending Invitations</h2>
          <div className="grid grid-cols-2 gap-4">
            {pendingInvites.map((invite) => (
              <div key={invite.id} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={invite.avatar}
                    alt={invite.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{invite.name}</p>
                    <p className="text-sm text-gray-600">{invite.title}</p>
                  </div>
                </div>
                <div>
                  <button className="bg-theme text-white py-2 px-4 rounded-md hover:bg-customBlue mr-2">Accept</button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Ignore</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connection Suggestions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">People You May Know</h2>
          <div className="grid grid-cols-2 gap-4">
            {connectionSuggestions.map((suggestion) => (
              <div key={suggestion.id} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={suggestion.avatar}
                    alt={suggestion.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{suggestion.name}</p>
                    <p className="text-sm text-gray-600">{suggestion.title}</p>
                  </div>
                </div>
                <button className="bg-theme text-white py-2 px-4 rounded-md hover:bg-customBlue flex items-center">
                  <FaUserPlus className="mr-2" /> Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Groups */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Groups You May Like</h2>
          <div className="grid grid-cols-2 gap-4">
            {groups.map((group) => (
              <div key={group.id} className="bg-white p-4 rounded-md shadow-md flex items-center justify-between">
                <div className="flex items-center">
                  <MdGroups className="text-customBlue text-2xl mr-4" />
                  <p className="font-semibold">{group.name}</p>
                </div>
                <button className="bg-theme text-white py-2 px-4 rounded-md hover:bg-customBlue">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="bg-gray-200 p-6 w-[20%]">
        <h2 className="text-lg font-bold mb-4">Popular Topics</h2>
        <ul className="space-y-2">
          <li>#AI</li>
          <li>#MachineLearning</li>
          <li>#DataScience</li>
        </ul>

        <h2 className="text-lg font-bold mt-6 mb-4">Trending Articles</h2>
        <ul className="space-y-2 text-blue-600 cursor-pointer hover:underline">
          <li>The Future of AI in Healthcare</li>
          <li>5 Must-Have Skills for Data Scientists</li>
          <li>Exploring ML Algorithms</li>
        </ul>
      </div>
    </div>
  );
};

export default NetworkScreen;
