import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/navbar";

export default function GlobalLayout() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="h-screen w-screen flex flex-row bg-white overflow-hidden">
      {/* Sidebar Section */}
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content Section */}
      <div className={`flex flex-col flex-grow transition-all`}>
        {/* Navbar */}
        <div
          className="fixed top-0 left-0 right-0 h-[64px] flex bg-white transition-all"   
        >
          <Navbar />
        </div>

        {/* Page Content Below Navbar */}
        <div className="flex flex-col mt-16 p-4 overflow-auto h-full no-scrollbar">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
