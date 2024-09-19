import React from "react";
import { useNavigate } from "react-router-dom";
import {IMAGES} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faLock, faFileAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SettingsScreen = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/app/edit-profile"); // Route to Edit Profile screen
  };

  const handlePrivacyPolicy = () => {
    navigate("/privacy-policy"); // Route to Privacy Policy screen
  };

  const handleTermsConditions = () => {
    navigate("/terms-conditions"); // Route to Terms and Conditions screen
  };

  const handleLogout = () => {
    // Perform logout action (like clearing tokens, etc.)
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const user = {
    name: "Zaki",
    email: "zaki@gmail.com",
    photo: IMAGES.student_avatar,
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center space-y-4 mb-12 ">
            <div className="flex-1 flex justify-center">
              <img
                src={user?.photo || IMAGES.student_avatar}
                alt="Avatar"
                
                className={`w-20 h-20 rounded-full cursor-pointer block`}
                // onLoad={handleImageLoad}
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg">{user?.name}</p>
              <p className="font-normal text-xs">{user?.email}</p>
            </div>
          </div>
      
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6 space-y-4">
        {/* Edit Profile */}
        <div 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={handleEditProfile}
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faUserEdit} className="text-blue-500 w-5 h-5" />
            <p className="font-medium">Edit Profile</p>
          </div>
        </div>

        {/* Privacy and Policy */}
        <div 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={handlePrivacyPolicy}
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faLock} className="text-blue-500 w-5 h-5" />
            <p className="font-medium">Privacy Policy</p>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={handleTermsConditions}
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faFileAlt} className="text-blue-500 w-5 h-5" />
            <p className="font-medium">Terms and Conditions</p>
          </div>
        </div>

        {/* Log Out */}
        <div 
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-red-50 cursor-pointer"
          onClick={handleLogout}
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-red-500 w-5 h-5" />
            <p className="font-medium text-red-500">Log Out</p>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default SettingsScreen;
