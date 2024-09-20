import React, { useState } from "react";

const EditProfileModal = ({ isOpen, onClose, profileDetails, onSave }) => {
  const [formData, setFormData] = useState(profileDetails);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Edit Profile</h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {/* Profile Summary Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Profile Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="3"
          />
        </div>

        {/* Skills Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Skills</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="2"
          />
          <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
        </div>

        {/* Save and Cancel Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
