import React from "react";
import { useNavigate } from "react-router-dom";
import {IMAGES} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faLock, faFileAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEditDocument } from "react-icons/md";

const SettingsScreen = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/app/settings/edit-profile"); // Route to Edit Profile screen
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
    <>
      <div
        className={`flex items-center justify-center p-4 rounded-tl-3xl bg-white rounded-bl-3xl h-full w-full `}
      >
        <div className="flex flex-col w-full py-6 px-3 rounded-3xl font-semibold text-customDarkBlue font-poppins">
          {/* Heading  */}
          <div className="flex text-4xl">My Profile</div>

          {/* Pic and Details */}
          <div className="flex flex-row justify-start space-x-8 p-8">
            <div className="flex">
              <img
                src= {IMAGES.student_avatar}
                alt="Avatar"
                className={`w-32 h-32 rounded-full cursor-pointer block`}
              />
{/* 
              <img
                src={IMAGES.edit_icon}
                alt="Edit Icon"
                onClick={() => toggleEditModal(user)}
                className="w-5 h-5 absolute mt-16 ml-14 cursor-pointer "
              ></img> */}
            </div>
            <div className="flex flex-col">
              <p className="text-3xl">Zaki Mazhar</p>
              <p className="font-normal text-sm">zakimazharsultan@gmail.com</p>
            </div>
          </div>

          {/* Buttons  */}
          <div className="px-5">
            <p className="mb-3 ml-2">Account</p>
            <div>
                <div
                  onClick={handleEditProfile}
                  className="flex items-center space-x-3 rounded-lg hover:bg-slate-200 p-2 cursor-pointer"
                >
                  <div className={`bg-customPurpleShade p-3 rounded-lg`}>
                    <MdEditDocument color="purple"/>
                  </div>
                  <p className="text-customGray font-medium text-sm">
                    Edit Profile
                  </p>
                </div>
                <div
                  onClick={handlePrivacyPolicy}
                  className="flex items-center space-x-3 rounded-lg hover:bg-slate-200 p-2 cursor-pointer"
                >
                  <div className={`bg-customLightBlueShade p-3 rounded-lg`}>
                    <img
                      src={IMAGES.lockColored_icon}
                      alt={`Lock icon`}
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="text-customGray font-medium text-sm">
                    Privacy and Policy
                  </p>
                </div>
                <div
                  onClick={handleTermsConditions}
                  className="flex items-center space-x-3 rounded-lg hover:bg-slate-200 p-2 cursor-pointer"
                >
                  <div className={`bg-customLightYellowShade p-3 rounded-lg`}>
                    <img
                      src={IMAGES.termsColored_icon}
                      alt={`Tems icon`}
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="text-customGray font-medium text-sm">
                    Terms & Conditions
                  </p>
                </div>
                <div
                  onClick={handleLogout}
                  className="flex items-center space-x-3 rounded-lg hover:bg-slate-200 p-2 cursor-pointer"
                >
                  <div className={`bg-customLightRedShade p-3 rounded-lg`}>
                    <img
                      src={IMAGES.logoutColored_icon}
                      alt={`Logout icon`}
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="text-customGray font-medium text-sm">
                    Log Out
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsScreen;
