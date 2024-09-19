import React from 'react';
import { FiSearch, FiBriefcase, FiSend } from 'react-icons/fi'; // Icons from react-icons

export default function JobBoardLanding() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-themeblack to-theme text-white py-20 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Job in Data Science</h1>
          <p className="text-lg mb-6">Explore thousands of job listings from top companies worldwide.</p>
          <div className="flex justify-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search for jobs..."
                className="px-10 py-2 rounded-md text-gray-800"
              />
            </div>
            <button className="bg-white text-theme px-6 py-2 rounded-md font-semibold">
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="max-w-7xl mx-auto mt-16 px-8">
        <h2 className="text-2xl font-bold text-themeblack mb-6">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Card */}
          {[1, 2, 3, 4, 5, 6].map((job) => (
            <div
              key={job}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <FiBriefcase className="text-theme mb-3" size={24} />
              <h3 className="text-lg font-bold mb-2">Data Scientist</h3>
              <p className="text-gray-600">Awesome Tech Company</p>
              <p className="text-sm text-gray-500 mb-4">Remote | Full-time</p>
              <a href="#" className="text-theme font-semibold">
                View Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-themeblack text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Over 10,000 Jobs Available Worldwide</h2>
          <p className="text-lg mb-6">Our job board has helped thousands of professionals find their dream data science roles.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="flex items-center justify-center flex-col">
              <FiBriefcase size={32} className="mb-2" />
              <p className="text-2xl font-bold">5,000+</p>
              <p>Data Science Jobs</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <FiSend size={32} className="mb-2" />
              <p className="text-2xl font-bold">1,000+</p>
              <p>Remote Opportunities</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <FiSearch size={32} className="mb-2" />
              <p className="text-2xl font-bold">500+</p>
              <p>Hiring Companies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-theme text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Looking to Hire Talented Data Scientists?</h2>
          <p className="text-lg mb-6">Post your job listing and find the perfect candidate today!</p>
          <button className="bg-white text-themeblack px-6 py-3 rounded-md font-semibold">
            Post a Job
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto mt-16 px-8">
        <h2 className="text-2xl font-bold text-themeblack mb-6 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial Card */}
          {[1, 2, 3].map((testimonial) => (
            <div
              key={testimonial}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "This platform helped me land my first data science job at a leading tech company. Highly recommend!"
              </p>
              <h4 className="font-bold">Jane Doe</h4>
              <p className="text-gray-500">Data Scientist at TechCorp</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
