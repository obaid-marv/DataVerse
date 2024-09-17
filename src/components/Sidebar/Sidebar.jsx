import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebar_links } from "../../constants/sidebarLinks";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/AuthSlice";

export default function Sidebar({ collapsed, toggleSidebar }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token);
  return (
    <div
      className={`text-lightGrey1 min-h-screen bg-customDarkBlue mt-16 border-gray-200 transition-all ${
        collapsed ? "w-16" : "w-52"
      }`}
  
    >
      {/* Logo Div */}
      <div
        className={`flex-1 w-full flex justify-between ${
          !collapsed ? "px-4" : "px-2"
        } py-4 items-center`}
      >
        <div className={`cursor-pointer rounded-lg ${!collapsed ? "" : "ml-2"}`} onClick={toggleSidebar}>
          <IoMenu size={28} color="white" />
        </div>
      </div>
      
      {/* Sidebar Links Div */}
      <div className="flex-[4] w-full mt-4 border-t border-blue-950 text-white">
        {sidebar_links.map((item) => (
          <SidebarLink key={item.key} item={item} collapsed={collapsed} />
        ))}
      </div>
      {isAuthenticated?<div>
        <button onClick={()=> dispatch(logout())} className="px-3 py-1 ml-4 bg-theme transform-all duration-200 text-white rounded-md text-sm hover:scale-110">Logout</button>
      </div>:<></>}

    </div>
  );
}

function SidebarLink({ item, collapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = location.pathname.includes(item.key);

  const handleClick = () => {
    console.log(item);
    navigate(item.path);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex justify-normal items-center text-base mx-2 py-2 pl-3 pr-3 rounded mb-2 mt-2 cursor-pointer font-inter ${
        isActive
          ? "bg-[#2D9CDB] text-white"
          : "hover:bg-[#062e3d] hover:font-semibold"
      }`}
    >
      <span className="mr-3 flex-shrink-0 w-[23px] h-[23px] flex items-center">
        {item.icon}
      </span>
      {!collapsed && (
        <span className="text-sm font-inter font-medium">{item.label}</span>
      )}
    </div>
  );
}
