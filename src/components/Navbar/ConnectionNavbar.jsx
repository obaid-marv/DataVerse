import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/vite.svg"
import { HiOutlineGlobeAlt } from "react-icons/hi";
import {
  faArrowLeft,
  faHome,
  faUsers,
  faCommentDots,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="bg-white text-customDarkBlue shadow-md px-4 py-2 flex items-center space-x-20 w-full">
      <div className="flex space-x-1 items-center font-poppins">
        <div className="flex items-center h-6 px-1 rounded-md hover:bg-gray-200 cursor-pointer" onClick={()=> navigate("/app/dashboard")}>
            <img src={logo} alt="" className="w-6 h-6" />
            <p className="text-sm font-medium">DataVerse</p>
        </div>
        <p className="text-xs font-semibold cursor-default">/</p>
        <div className="flex items-center space-x-2 h-6 px-1 rounded-md hover:bg-gray-200 cursor-pointer">
            <p className="text-sm font-medium">Community</p>
            <HiOutlineGlobeAlt/>
        </div>
        
      </div>
      <div className="flex md:ml-4 items-center mr-10 space-x-4 bg-gray-100  p-2 rounded-full">
      
        {navItems.map((item) => (
          <button
            key={item.name} 
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
              isActive(item.path) ? "bg-customDarkBlue text-white font-semibold" : "bg-transparent text-customDarkBlue"
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectionNavbar;
