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
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails } from "../../api/user";

const UserPostScreen = () => {
  const [postStates, setPostStates] = useState(postsContent);
  const { userId } = useParams();

  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [profileDetails, setProfileDetails] = useState({
    summary:
      "Passionate student with a keen interest in AI, Machine Learning, and Data Science."
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();
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


  const handleMessageClick = () => {
    navigate("/connection/messaging-screen");
  };

  const handleProfileClick = (id) => {
    navigate(`/connection/post-screen/user`);
  };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getUserDetails(userId);
      
          setProfileDetails({
            ...response,
            summary:
              "Passionate student with a keen interest in AI, Machine Learning, and Data Science.",
            skills:
              "Python Programming, Machine Learning, Data Visualization, AI Model Development",
          });
        } catch (error) {
          console.error("Failed to fetch progress:", error);
        }
      };

        fetchData();
    }, [user]);

  return (
    <div className="flex flex-col h-max">
      <div className="flex flex-col">

        <div className="bg-gray-200 p-6 shadow-lg rounded-xl mx-10 flex-[2] mb-8">
          <div className="flex items-center mb-6 gap-4">
            <img
              src={profileDetails.imageUrl || "https://robohash.org/placeholder-avatar"}
              alt="avatar"
              className="w-24 h-24 rounded-full shadow-md bg-white"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-2xl">{profileDetails.username}</h3>
              <p className="text-sm text-gray-500 mb-2">{profileDetails.title}</p>
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
                onClick={handleMessageClick}
                className="px-4 py-2 bg-customBlue text-white rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Message
              </button>
            </div>
          </div>

          <div className="font-semibold flex text-sm mb-5 gap-4">
            <p>Connections:</p>
            <p>{profileDetails?.friends?.length}</p>
          </div>

          <div className="flex flex-wrap">
            <div className="mb-2 flex-1 min-w-[200px]">
              <h2 className="text-lg font-bold mb-2">Profile Summary</h2>
              <p className="text-sm text-gray-600">{profileDetails.summary}</p>
            </div>
            <div className="mb-2 flex-1 min-w-[200px]">
              <h2 className="text-lg font-bold mb-2">Skills</h2>
              <ul className="text-sm text-gray-600 space-y-1">
                {profileDetails.skills.map((skill, index) => (
                  <li key={index}>- {skill.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserPostScreen;
