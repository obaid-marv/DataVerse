import { useNavigate } from "react-router-dom";
import introVideo from "../assets/introVideo.mp4"; // Sample video import
import coursecover from "../assets/coursecover.png"; // Example cover image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faArrowLeft,
    faVideo,
    faCode,
    faQuestionCircle,
    faFlask,
    faProjectDiagram,
    faChevronDown,
    faChevronUp,
  } from "@fortawesome/free-solid-svg-icons";
  import { modules } from "../constants/modules";

const CourseScreen = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("lessons");
  const [expandedModules, setExpandedModules] = useState([]);

  const toggleModule = (id) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((moduleId) => moduleId !== id) : [...prev, id]
    );
  };

  const getContentTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <FontAwesomeIcon icon={faVideo} className="text-blue-500 mr-2" />;
      case "code":
        return <FontAwesomeIcon icon={faCode} className="text-green-500 mr-2" />;
      case "quiz":
        return <FontAwesomeIcon icon={faQuestionCircle} className="text-yellow-500 mr-2" />;
      case "practice":
        return <FontAwesomeIcon icon={faFlask} className="text-purple-500 mr-2" />;
      case "project":
        return <FontAwesomeIcon icon={faProjectDiagram} className="text-red-500 mr-2" />;
      default:
        return null;
    }
  };
  return (
    <div className="container max-w-screen-lg mx-auto my-10 p-6 bg-gray-50 shadow-lg rounded-lg">
      {/* Back Button */}
      <div className="flex items-center mb-8">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="w-6 h-6 text-gray-500 hover:text-blue-500 transition duration-200 cursor-pointer"
          onClick={() => navigate("/app/courses/catalog")}
        />
        <p
          className="text-xl font-medium ml-4 text-gray-600 hover:text-blue-500 cursor-pointer transition duration-200"
          onClick={() => navigate("/app/courses/catalog")}
        >
          Go Back
        </p>
      </div>

      {/* Course Overview Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg shadow-md">
        <img
          src={coursecover}
          alt="Course Cover"
          className="w-80 h-48 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Machine Learning and Data Analysis</h1>
          <p className="text-md mt-4">
            This course provides an in-depth introduction to machine learning techniques
            and data analysis, focusing on real-world applications and projects.
          </p>
          <div className="mt-6">
            <button
              onClick={() => navigate("/courses/lesson/1")}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 transform hover:scale-105"
            >
              Start First Lesson
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Section for Lessons and Discussions */}
      <div className="mt-10">
        <div className="flex justify-center">
          <button
            className={`px-6 py-2 font-semibold text-lg ${
              activeTab === "lessons"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            } rounded-l-lg focus:outline-none`}
            onClick={() => setActiveTab("lessons")}
          >
            Lessons
          </button>
          <button
            className={`px-6 py-2 font-semibold text-lg ${
              activeTab === "discussions"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600"
            } rounded-r-lg focus:outline-none`}
            onClick={() => setActiveTab("discussions")}
          >
            Discussions
          </button>
        </div>
      </div>

      {/* Content for Lessons or Discussions based on activeTab */}
      {activeTab === "lessons" ? (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((module) => (
              <div key={module.id} className="border rounded-lg">
                <div
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex items-center">
                    {getContentTypeIcon(module.contentType)}
                    <p className="text-lg font-medium text-gray-700">{module.title}</p>
                  </div>
                  <FontAwesomeIcon
                    icon={expandedModules.includes(module.id) ? faChevronUp : faChevronDown}
                    className="text-gray-500"
                  />
                </div>
                {expandedModules.includes(module.id) && (
                  <div className="p-4 bg-gray-50 text-gray-600">
                    {module.description}
                    <div className="mt-4">
                      <button
                        onClick={() => navigate(`/courses/lesson/${module.id}`)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        Start Lesson
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Discussions</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">John Doe:</p>
              <p className="mt-2 text-gray-600">
                "I have a question regarding the second module, how do you approach
                hyperparameter tuning for SVM models?"
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-semibold">Jane Smith:</p>
              <p className="mt-2 text-gray-600">
                "I found the project assignment on clustering really interesting. Could
                anyone share how they handled feature scaling in their solution?"
              </p>
            </div>
          </div>

          {/* Add a comment section */}
          <div className="mt-6">
            <textarea
              placeholder="Add your comment or question..."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Post Comment
            </button>
          </div>
        </div>
      )}

      {/* Introductory Video and Course Details Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Introductory Video</h2>
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800">
            Course Details
          </h2>
          <ul className="list-disc list-inside mt-4 text-gray-600 leading-relaxed">
            <li>7 Lessons covering key topics in machine learning and data science</li>
            <li>Hands-on projects and quizzes after each lesson</li>
            <li>Guidance from experienced tutors</li>
            <li>Quizzes to assess understanding</li>
            <li>Final project to build a complete machine learning model</li>
          </ul>
        </div>
      </div>

      {/* Course Reviews and Language */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Course Reviews</h2>
          <ul className="list-none space-y-4">
            <li className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="font-medium">John Doe:</p>
              <p className="text-gray-600 mt-2">"A fantastic course! The content was thorough and easy to follow."</p>
              <p className="text-yellow-500 mt-2">★★★★☆</p>
            </li>
            <li className="bg-gray-100 p-4 rounded-md shadow-sm">
              <p className="font-medium">Jane Smith:</p>
              <p className="text-gray-600 mt-2">"Great introduction to machine learning with plenty of hands-on experience."</p>
              <p className="text-yellow-500 mt-2">★★★★★</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Instructor Information Section */}
      <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800">About the Instructor</h2>
        <p className="mt-4 text-gray-600">
          The course is taught by Obaid Ur Rehman, an experienced data scientist
          with years of experience in machine learning and AI development. He has
          worked on several industry-leading projects in the field of AI.
        </p>
      </div>
    </div>
  );
};

export default CourseScreen;
