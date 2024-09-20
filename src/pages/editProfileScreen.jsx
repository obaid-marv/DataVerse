import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileData({ ...profileData, profilePicture: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add form submission logic here (API request, etc.)
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center justify-center ">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center space-y-2">
            {profileData.profilePicture ? (
              <img
                src={URL.createObjectURL(profileData.profilePicture)}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2 text-sm"
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={profileData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a new password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default EditProfile;
