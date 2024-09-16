import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebar_links } from "../../constants/sidebarLinks";
import { IoMenu } from "react-icons/io5";
import {IMAGES} from "../../assets"

export default function Sidebar({ collapsed, toggleSidebar }) {
  return (
    // <div className="fixed top-0 left-0 flex flex-col h-screen mx-4">
    // <div className="fixed flex flex-col min-h-screen bg-custom-gradient w-52">
    <div
      className={`text-lightGrey1 min-h-screen bg-custom-gradient border-gray-200 transition-all ${
        collapsed ? "w-16" : "w-52"
      }`}
    >
      {/* Logo Div */}
      <div
        className={`flex-1 w-full flex justify-between ${
          !collapsed ? "px-4" : "px-2"
        } py-4 items-center  `}
      >
        {!collapsed && (
          <>
            {/* <img src={IMAGES.Logo} alt="Logo" className="h-12" /> */}
            <h1 className="text-lg font-bold px-1 text-white">DataVerse</h1>
          </>
        )}
        <div className={`cursor-pointer rounded-lg ${!collapsed ? "" : "ml-2"}`} onClick={toggleSidebar}>
          <IoMenu size={28} color="white" />
        </div>
        {/* <p className="text-white ">DataVerse</p> */}
        {/* <img src={mainlogo} alt="Academy Logo" className="w-[80px] h-[80px]" /> */}
      </div>

      {/* Sidebar Links Div  */}
      <div className="flex-[4] w-full mt-4 border-t border-blue-950 text-white ">
        {sidebar_links.map((item) => (
          <SidebarLink key={item.key} item={item} collapsed={collapsed} />
        ))}
      </div>
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
          ? "bg-customYellow text-white"
          : "hover:bg-blue-400 hover:text-black hover:font-semibold"
      }`}
    >
      <span className=" mr-3 flex-shrink-0 w-[23px] h-[23px] flex items-center">
        {item.icon}
      </span>
      {!collapsed && (
        <span className=" text-sm font-inter font-medium">{item.label}</span>
      )}
    </div>
  );
}
