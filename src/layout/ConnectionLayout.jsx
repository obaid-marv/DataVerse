import React from 'react'
import CourseNavbar from '../components/courseNavbar';
import { Outlet } from 'react-router-dom';
import ConnectionNavbar from '../components/Navbar/ConnectionNavbar';

export default function ConnectionLayout() {
    return (
        <div className="h-screen w-screen flex flex-row bg-white overflow-hidden">    
          {/* Main Content Section */}
          <div className={`flex flex-col flex-grow transition-all`}>
            {/* Navbar */}
            <div
              className="fixed top-0 left-0 right-0 h-[64px] flex bg-white transition-all"
            >
              <ConnectionNavbar />
            </div>
    
            {/* Page Content Below Navbar */}
            <div className="flex flex-col mt-16 p-4 overflow-auto h-full no-scrollbar">
              <Outlet />
            </div>
          </div>
        </div>
      );
}
