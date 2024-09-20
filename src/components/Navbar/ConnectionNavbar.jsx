import React, { useState } from "react"; // Combined import for React and useState
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faHome, faUsers, faCommentDots, faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FaPen, FaTrophy, FaVideo } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";

const ConnectionNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/connection/post-screen", icon: faHome },
    { name: "Network", path: "/connection/networks-screen", icon: faUsers },
    { name: "Messaging", path: "/connection/messaging-screen", icon: faCommentDots },
    { name: "Notifications", path: "/connection/notifications-screen", icon: faBell },
  ];

  return (
    <div className="bg-customBlue text-white shadow-md px-4 py-2 flex items-center justify-between w-full">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="w-6 h-6 text-white cursor-pointer"
        onClick={() => navigate("/app/connection-screen")}
      />
       <ul className="flex items-center justify-center space-x-20 flex-1">
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer flex items-center space-x-2 text-lg px-2 transition-colors duration-300 hover:text-blue-300 ${
              isActive(item.path) ? "text-blue-300 font-bold border-b border-blue-300 pb-1" : ""
            }`}
            onClick={() => navigate(item.path)} 
          >
            <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
        
    </div>
  );
};

export default ConnectionNavbar;
