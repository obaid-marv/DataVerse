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
import { FaImage, FaVideo, FaTimes } from "react-icons/fa";

import { IMAGES } from "../../assets";
import { MdGroups } from "react-icons/md";
import { postsContent } from "../../constants/postsContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../redux/auth/AuthSlice";
import { fetchUserProgress } from "../../redux/course/ProgressSlice";
import { useNavigate } from "react-router-dom";

const PostScreen = () => {
  const navigate = useNavigate();
  const [postStates, setPostStates] = useState(postsContent);
  const [postContent, setPostContent] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [profileDetails, setProfileDetails] = useState({
    ...user,
    summary:
      "Passionate student with a keen interest in AI, Machine Learning, and Data Science.",
    skills:
      "Python Programming, Machine Learning, Data Visualization, AI Model Development",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleVideoUpload = (e) => {
    setSelectedVideo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the post submission logic here
    console.log("Post content:", postContent);
    if (selectedImage) {
      console.log("Image file:", selectedImage);
    }
    if (selectedVideo) {
      console.log("Video file:", selectedVideo);
    }
  };

  const handleCancelImage = () => {
    setSelectedImage(null);
  };

  const handleCancelVideo = () => {
    setSelectedVideo(null);
  };

  const handleLikeToggle = (postId) => {
    setPostStates((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const handleCommentToggle = (postId) => {
    setPostStates((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  const handleProfileClick = (id) => {
    // navigate(`/connection/post-screen/${id}`);
    navigate(`/connection/post-screen/user`);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfileDetails(updatedProfile);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUserDetails());
        console.log("user is : ", user);
        setProfileDetails({
          ...user,
          summary:
            "Passionate student with a keen interest in AI, Machine Learning, and Data Science.",
          skills:
            "Python Programming, Machine Learning, Data Visualization, AI Model Development",
        });
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };

    if (!user) {
      fetchData();
    }
  }, [user]);

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
            <h3 className="font-semibold text-lg">{user?.username}</h3>
            <p className="text-sm text-gray-500 mb-4">Student at XYZ</p>
            <button
              onClick={handleEditClick}
              className="px-3 py-1 bg-customBlue text-white rounded-full text-sm hover:bg-blue-600 transition"
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
          <div onClick={()=> navigate("/connection/view-all-connections")} className="font-bold flex justify-between text-sm mb-5 text-customBlue hover:underline cursor-pointer">
            <p>Connections</p>
            <p>100</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-[4]">
          {/* Post Input Section */}
          <div className="bg-white p-6 shadow-lg rounded-md mb-6">
            <h2 className="text-xl font-bold mb-4">Start a Post</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                name="postContent"
                className="w-full p-3 border rounded-md mb-4"
                placeholder="Share what's on your mind..."
                rows="3"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              <div className="flex items-center mb-4">
                <label className="flex items-center cursor-pointer mr-4">
                  <FaImage className="text-blue-500 mr-2" />
                  <span className="text-blue-500 hover:underline">
                    Add Image
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
                <label className="flex items-center cursor-pointer">
                  <FaVideo className="text-blue-500 mr-2" />
                  <span className="text-blue-500 hover:underline">
                    Add Video
                  </span>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideoUpload}
                  />
                </label>
              </div>

              {selectedImage && (
                <div className="mt-4 relative">
                  <p className="text-sm text-gray-500">Selected Image:</p>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="w-full h-auto rounded-md mt-2"
                  />
                  <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700"
                    onClick={handleCancelImage}
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
              {selectedVideo && (
                <div className="mt-4 relative">
                  <p className="text-sm text-gray-500">Selected Video:</p>
                  <video controls className="w-full h-auto rounded-md mt-2">
                    <source
                      src={URL.createObjectURL(selectedVideo)}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700"
                    onClick={handleCancelVideo}
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 mt-2 bg-customBlue text-white rounded-md hover:bg-blue-600 transition"
              >
                Post
              </button>
            </form>
          </div>

          {/* Post Feed */}
          {postStates.map((post) => (
            <div
              key={post.id}
              className="bg-white p-6 shadow-lg rounded-md mb-6"
            >
              <div
                onClick={handleProfileClick}
                className="flex items-center mb-4 cursor-pointer"
              >
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

              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Post content"
                  className="w-full h-auto rounded-md mb-4"
                />
              )}

              <div className="flex items-center space-x-4 text-gray-500">
                <div
                  className={`flex items-center space-x-1 cursor-pointer ${
                    post.liked ? "text-blue-500" : ""
                  }`}
                  onClick={() => handleLikeToggle(post.id)}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <span>{post.likes}</span>
                </div>
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onClick={() => handleCommentToggle(post.id)}
                >
                  <FontAwesomeIcon icon={faComment} />
                  <span>{post.comments.length}</span>
                </div>
              </div>

              {post.showComments && (
                <div className="mt-4">
                  {post.comments.map((comment, index) => (
                    <div key={index} className="flex items-start mb-4">
                      <img
                        src={comment.profileImg}
                        alt={`${comment.author} avatar`}
                        className="w-8 h-8 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-bold">{comment.author}</p>
                        <p className="text-sm text-gray-500">
                          {comment.timestamp}
                        </p>
                        <p className="mt-1">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                  <form className="mt-4">
                    <textarea
                      name="commentContent"
                      className="w-full p-2 border rounded-md"
                      placeholder="Add a comment..."
                      rows="2"
                    />
                    <button
                      type="submit"
                      className="mt-2 px-4 py-2 bg-customBlue text-white rounded-md hover:bg-blue-600 transition"
                    >
                      Comment
                    </button>
                  </form>
                </div>
              )}
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
            <div
              onClick={handleProfileClick}
              className="flex items-center cursor-pointer"
            >
              <img
                src={IMAGES.avatar4}
                alt="Connection 1"
                className="w-8 h-8 rounded-full mr-3"
              />
              <p className="text-sm font-semibold">Jane Smith</p>
            </div>
            <div
              onClick={handleProfileClick}
              className="flex items-center cursor-pointer"
            >
              <img
                src={IMAGES.avatar5}
                alt="Connection 2"
                className="w-8 h-8 rounded-full mr-3 "
              />
              <p className="text-sm font-semibold ">John Doe</p>
            </div>
            <div
              onClick={handleProfileClick}
              className="flex items-center cursor-pointer"
            >
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
      {user && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          profileDetails={{ ...user, ...profileDetails }}
          onSave={handleSaveProfile}
          name={user?.username}
        />
      )}
    </div>
  );
};

export default PostScreen;
