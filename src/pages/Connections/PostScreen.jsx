import React, { useEffect, useState } from "react";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faEnvelope,
  faBell,
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import { IMAGES } from "../../assets";
import { MdGroups } from "react-icons/md";
import { postsContent } from "../../constants/postsContent";

const PostScreen = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [posts, setPosts] = useState(postsContent);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [profileDetails, setProfileDetails] = useState({
    name: "Zaki Mazhar",
    summary:
      "Passionate student with a keen interest in AI, Machine Learning, and Data Science.",
    skills:
      "Python Programming, Machine Learning, Data Visualization, AI Model Development",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfileDetails(updatedProfile);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="bg-gray-200 p-6 shadow-lg rounded-md mx-10 flex-[2]">
          <div className="flex flex-col items-center mb-6">
            <img
              src={IMAGES.avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full mb-3 shadow-md"
            />
            <h3 className="font-semibold text-lg">{profileDetails.name}</h3>
            <p className="text-sm text-gray-500 mb-4">Student at XYZ</p>
            <button
              onClick={handleEditClick}
              className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
            >
              Edit Profile
            </button>
          </div>

          {/* Profile Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Profile Summary</h2>
            <p className="text-sm text-gray-600">{profileDetails.summary}</p>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Skills</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {profileDetails.skills.split(",").map((skill, index) => (
                <li key={index}>- {skill.trim()}</li>
              ))}
            </ul>
          </div>

          {/* Connections Section */}
          <div className="font-semibold flex justify-between text-sm mb-5">
            <p>Connections</p>
            <p>100</p>
          </div>

          {/* Groups Section */}
          {/* <h2 className="text-lg font-bold mb-4">Groups</h2> */}
          {/* <div className="space-y-2">
            <div className="flex items-center gap-4 text-sm cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <MdGroups className="text-blue-500" />{" "}
              <p>Artificial Intelligence</p>
            </div>
            <div className="flex items-center gap-4 text-sm cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <MdGroups className="text-blue-500" /> <p>Machine Learning</p>
            </div>
            <div className="flex items-center gap-4 text-sm cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              <MdGroups className="text-blue-500" /> <p>Data Science</p>
            </div>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="flex-[4]">
          {/* Post Input Section */}
          <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h2 className="text-lg font-bold mb-2">Start a Post</h2>
            <form>
              <textarea
                name="postContent"
                className="w-full p-2 border rounded-md"
                placeholder="Share what's on your mind..."
                rows="3"
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Post
              </button>
            </form>
          </div>

          {/* Post Feed */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white p-4 shadow-md rounded-md mb-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={post.profileImg}
                  alt={`${post.author} avatar`}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <p className="mb-4">{post.content}</p>

              {/* Conditional Rendering of Post Image */}
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post content"
                  className="w-full h-auto rounded-md mb-4"
                />
              )}

              {/* Engagement Icons */}
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center space-x-1 cursor-pointer">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <FontAwesomeIcon icon={faComment} />
                  <span>{post.comments}</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <FontAwesomeIcon icon={faShare} />
                  <span>{post.shares}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="bg-gray-200 p-4 shadow-md rounded-md mx-10 flex-[2]">
          {/* Popular Topics */}
          <h2 className="text-lg font-bold mb-4">Popular Topics</h2>
          <ul className="mb-6">
            <li>#AI</li>
            <li>#JobOpportunities</li>
            <li>#MachineLearning</li>
          </ul>

          {/* Trending Articles */}
          <h2 className="text-lg font-bold mb-4">Trending Articles</h2>
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

          {/* Recommended Connections */}
          <h2 className="text-lg font-bold mb-4">Recommended Connections</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={IMAGES.avatar4}
                alt="Connection 1"
                className="w-8 h-8 rounded-full mr-3"
              />
              <p className="text-sm font-semibold">Jane Smith</p>
            </div>
            <div className="flex items-center">
              <img
                src={IMAGES.avatar5}
                alt="Connection 2"
                className="w-8 h-8 rounded-full mr-3"
              />
              <p className="text-sm font-semibold">John Doe</p>
            </div>
            <div className="flex items-center">
              <img
                src={IMAGES.avatar6}
                alt="Connection 3"
                className="w-8 h-8 rounded-full mr-3"
              />
              <p className="text-sm font-semibold">Alex Johnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profileDetails={profileDetails}
        onSave={handleSaveProfile}
      />
    </div>
  );
};

export default PostScreen;
