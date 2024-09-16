import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { IoMenu } from "react-icons/io5";
import Navbar from "../components/navbar";

export default function GlobalLayout() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  

  return (
    <div>
      {/* Full Screen Div  */}
      <div className={`h-screen w-screen overflow-hidden flex flex-row bg-white`}>
        {/* Menu Icon Div */}
        {/* <div
          className={`absolute md:hidden bg-custom-gradient top-4 ${
            menu ? "left-48" : "left-4"
          } rounded-lg`}
          onClick={toggleMenu}
        >
          <IoMenu size={35} color="white" />
        </div>

        {menu && (
          <div className="flex-1 md:hidden">
            <Sidebar />
          </div>
        )}

        <div className="flex-1 hidden md:flex ">
          <Sidebar />
        </div> */}
        <div className="flex-1">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        </div>
        <div
        className={`flex flex-col flex-grow transition-all ${
          collapsed ? "" : ""
        }`}
      >
        <div
          className={`fixed top-0 left-0 transition-all ${
            collapsed ? "ml-16" : "ml-52"
          } right-0 h-[64px] flex bg-white`}
        >
          <Navbar />
        </div>

        <div className="flex flex-col mt-16 p-4 overflow-auto h-full no-scrollbar">
          <Outlet />
        </div>
      </div>

          {/* <Navbar />
        <div className={`flex-[5] min-h-screen no-scrollbar overflow-y-auto `}>
          <Outlet />
        </div> */}
      </div>
    </div>
  );
}
