import React, { useState } from "react";
import { IMAGES } from "../../assets";
import { MdGroupAdd, MdPersonAdd, MdGroups } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { pendingInvitations } from "../../constants/pendingInvitations";
import { suggestedConnections } from "../../constants/suggestedConnections";

const NetworkScreen = () => {
  const [pendingInvites, setPendingInvites] = useState(pendingInvitations);
  const [connectionSuggestions, setConnectionSuggestions] =
    useState(suggestedConnections);

  const [seeAllInvitesView, setSeeAllInvitesView] = useState(false);
  const toggleSeeAllInvitesView = () => {
    setSeeAllInvitesView(!seeAllInvitesView);
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-customBlue mb-8">
          Manage Your Network
        </h1>

        {/* Network Activity */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Recent Network Activity</h2>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <ul className="space-y-3 text-gray-700">
              <li>💼 You have 5 new connection requests this week</li>
              <li>🎉 ABC just connected with XYZ</li>
              <li>✨ DEF endorsed you for "Machine Learning"</li>
            </ul>
          </div>
        </div>

        {/* Pending Invitations */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-sm">
            <h2 className="text-lg font-semibold mb-4">Pending Invitations</h2>
            <p
              onClick={toggleSeeAllInvitesView}
              className={`text-theme hover:underline cursor-pointer`}
            >
              {seeAllInvitesView ? "See Less" : "See All"}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {seeAllInvitesView
              ? pendingInvites.map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between w-full p-4 border-b border-gray-300"
                  >
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

                    <div className="flex space-x-4 font-normal">
                      <button className="px-3 py-2 bg-customBlue text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200">
                        Accept
                      </button>
                      <button className="px-3 py-2 bg-white text-customBlue font-medium border border-customBlue rounded-lg shadow hover:bg-gray-200 transition-colors duration-200">
                        Ignore
                      </button>
                    </div>
                  </div>
                ))
              : pendingInvites.slice(0, 2).map((invite) => (
                  <div
                    key={invite.id}
                    className="flex items-center justify-between w-full p-4 border-b border-gray-300"
                  >
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

                    <div className="flex space-x-4 font-normal">
                      <button className="px-3 py-2 bg-customBlue text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200">
                        Accept
                      </button>
                      <button className="px-3 py-2 bg-white text-customBlue font-medium border border-customBlue rounded-lg shadow hover:bg-gray-200 transition-colors duration-200">
                        Ignore
                      </button>
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
              <div
                key={suggestion.id}
                className="bg-white p-4 rounded-md shadow-md flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={suggestion.avatar}
                    alt={suggestion.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{suggestion.name}</p>
                    <p className="text-sm text-gray-600">{suggestion.title}</p>
                    <p className="text-sm text-gray-400">
                      2 Mutual Connections
                    </p>
                  </div>
                </div>
                <button className="py-2 px-4 bg-customBlue text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-200 flex items-center">
                  <FaUserPlus className="mr-2" /> Connect
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
        <ul className="mb-6">
          <li className="text-blue-600 cursor-pointer hover:underline">
            <a
              href="https://www.iqvia.com/blogs/2024/02/the-future-of-ai-in-healthcare"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Future of AI in Healthcare
            </a>
          </li>
          <li className="text-blue-600 cursor-pointer hover:underline">
            <a
              href="https://www.kdnuggets.com/5-essential-skills-every-data-scientist-needs-in-2024"
              target="_blank"
              rel="noopener noreferrer"
            >
              5 Must-Have Skills for Data Scientists
            </a>
          </li>
          <li className="text-blue-600 cursor-pointer hover:underline">
            <a
              href="https://www.elastic.co/blog/popular-ml-algorithms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exploring Popular Machine Learning Algorithms
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NetworkScreen;
