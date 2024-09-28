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
  faBriefcase,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FaImage, FaVideo, FaTimes, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import { IMAGES } from "../../assets";
import { MdGroups } from "react-icons/md";
import { postsContent } from "../../constants/postsContent";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../../redux/auth/AuthSlice";
import { fetchUserProgress } from "../../redux/course/ProgressSlice";
import { useNavigate } from "react-router-dom";

const UserPostScreen = () => {
  const [postStates, setPostStates] = useState(postsContent);
  const [postContent, setPostContent] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [profileDetails, setProfileDetails] = useState({
    name: "John Doe",
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

  const handleConnectClick = () => {
    console.log("Send Connection Request");
  };

  const handleMessageClick = () => {
    navigate("/connection/messaging-screen");
  };

  const handleProfileClick = (id) => {
    // navigate(`/connection/post-screen/${id}`);
    navigate(`/connection/post-screen/user`);
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         await dispatch(fetchUserDetails());
  //         console.log("user is : ", user);
  //         setProfileDetails({
  //           ...user,
  //           summary:
  //             "Passionate student with a keen interest in AI, Machine Learning, and Data Science.",
  //           skills:
  //             "Python Programming, Machine Learning, Data Visualization, AI Model Development",
  //         });
  //       } catch (error) {
  //         console.error("Failed to fetch progress:", error);
  //       }
  //     };

  //     if (!user) {
  //       fetchData();
  //     }
  //   }, [user]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-col">
        {/* Div on Top of page */}
        <div className="bg-gray-100 p-6 shadow-lg rounded-md mx-10 flex-[2] mb-8">
          <div className="flex items-center mb-6 gap-4">
            <img
              src={IMAGES.avatar4}
              alt="avatar"
              className="w-24 h-24 rounded-full shadow-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-2xl">{profileDetails.name}</h3>
              <p className="text-sm text-gray-500 mb-2">Student at XYZ University</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 text-xl hover:text-blue-800 transition" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 text-xl hover:text-blue-500 transition" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-800 text-xl hover:text-gray-900 transition" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleConnectClick}
                className="px-4 py-2 bg-customBlue text-white rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Connect
              </button>
              <button
                onClick={handleMessageClick}
                className="px-4 py-2 bg-customBlue text-white rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Message
              </button>
            </div>
          </div>

          <div className="font-semibold flex text-sm mb-5 gap-4">
            <p>Connections:</p>
            <p>100</p>
          </div>

          {/* Profile Summary and Skills Section */}
          <div className="flex flex-wrap">
            <div className="mb-2 flex-1 min-w-[200px]">
              <h2 className="text-lg font-bold mb-2">Profile Summary</h2>
              <p className="text-sm text-gray-600">{profileDetails.summary}</p>
            </div>
            <div className="mb-2 flex-1 min-w-[200px]">
              <h2 className="text-lg font-bold mb-2">Skills</h2>
              <ul className="text-sm text-gray-600 space-y-1">
                {profileDetails.skills.split(",").map((skill, index) => (
                  <li key={index}>- {skill.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex">
          <div className="flex-[4] pl-10">
            {/* Post Feed */}
            {postStates.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 shadow-lg rounded-md mb-6"
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
      </div>

      {/* Edit Profile Modal */}
    </div>
  );
};

export default UserPostScreen;
