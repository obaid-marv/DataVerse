import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { IMAGES } from "../../assets";

const PostScreen = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Zaki Mazhar",
      profileImg: IMAGES.avatar,
      content: "Excited to share that I’ve completed my latest project on AI!",
      timestamp: "2h ago",
      likes: 12,
      comments: 4,
      shares: 2,
    },
    {
      id: 2,
      author: "Sara Ali",
      profileImg: IMAGES.avatar4,
      content: "Check out this amazing opportunity at XYZ Inc. #JobOpportunity",
      timestamp: "5h ago",
      likes: 34,
      comments: 10,
      shares: 5,
    },
    {
      id: 3,
      author: "Sara Ali",
      profileImg: IMAGES.avatar4,
      content: "Check out this amazing opportunity at XYZ Inc. #JobOpportunity",
      timestamp: "5h ago",
      likes: 34,
      comments: 10,
      shares: 5,
    },
    {
      id: 4,
      author: "Sara Ali",
      profileImg: IMAGES.avatar4,
      content: "Check out this amazing opportunity at XYZ Inc. #JobOpportunity",
      timestamp: "5h ago",
      likes: 34,
      comments: 10,
      shares: 5,
    },
  ]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const postContent = e.target.elements.postContent.value;
    const newPost = {
      id: posts.length + 1,
      author: "You", // Example user
      profileImg: IMAGES.your_avatar,
      content: postContent,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      shares: 0,
    };
    setPosts([newPost, ...posts]);
    e.target.reset();
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* custom nav  */}
      {/* <div className="bg-customBlue rounded-2xl flex text-white mb-4 px-2 py-3">
        {[
          { name: "Home", icon: faHome },
          { name: "Network", icon: faUserFriends },
          { name: "Messaging", icon: faEnvelope },
          { name: "Notifications", icon: faBell },
        ].map((tab) => (
          <div
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={`flex-1 flex justify-center items-center py-2 cursor-pointer ${
              activeTab === tab.name ? "bg-white text-customBlue rounded-full" : ""
            }`}
          >
            <FontAwesomeIcon icon={tab.icon} className="mr-2" />
            <p>{tab.name}</p>
          </div>
        ))}
      </div> */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-4 shadow-md rounded-md mr-6">
          {/* Popular Topics, etc. */}
          <h2 className="text-lg font-bold mb-4">Popular Topics</h2>
          <ul>
            <li>#AI</li>
            <li>#JobOpportunities</li>
            <li>#MachineLearning</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Post Input Section */}
          <div className="bg-white p-4 shadow-md rounded-md mb-6">
            <h2 className="text-lg font-bold mb-2">Start a Post</h2>
            <form onSubmit={handlePostSubmit}>
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
      </div>
    </div>
  );
};

export default PostScreen;
