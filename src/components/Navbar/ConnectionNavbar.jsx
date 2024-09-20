import React, { useState } from "react"; // Combined import for React and useState
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FaPen, FaTrophy, FaVideo } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";

const ConnectionNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-customBlue text-white shadow-md px-4 py-2 flex items-center justify-between w-full">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="w-6 h-6 text-white cursor-pointer"
        onClick={() => navigate("/app/connection-screen")}
      />
      {/* <div className="bg-customBlue rounded-2xl flex text-white mb-4 px-2 py-3"> */}
            <p className="flex-1 flex justify-center items-center">Home</p>
            <p className="flex-1 flex justify-center items-center">Network</p>
            <p className="flex-1 flex justify-center items-center">Messaging</p>
            <p className="flex-1 flex justify-center items-center">Notifications</p>
        {/* </div> */}
    </div>
  );
};

export default ConnectionNavbar;
