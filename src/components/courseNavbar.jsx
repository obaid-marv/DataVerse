import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import coursecover from '../assets/coursecover.png'; // Example course cover

const CourseNavbar = ({ courseModules }) => {
  const navigate = useNavigate();
  const [showOverview, setShowOverview] = useState(false);

  const handleToggleOverview = () => {
    setShowOverview(!showOverview);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="w-6 h-6 text-gray-700 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="flex items-center">
        <button
          className="p-2 border rounded-full bg-gray-200 hover:bg-gray-300 transition"
          onClick={() => handleToggleOverview()}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
          <span className="mx-2 text-gray-700">Course Overview</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-700" />
        </button>
      </div>

      {/* Course Overview Popup */}
      {showOverview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
            <ul className="list-disc list-inside text-gray-700">
              {courseModules.map((module, index) => (
                <li key={index} className="mb-2">
                  <strong>{module.title}:</strong> {module.description} ({module.type})
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => setShowOverview(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseNavbar;
