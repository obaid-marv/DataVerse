import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoSample from "../assets/introVideo.mp4"; // Sample video import
// import codeSample from "../assets/sampleCodeSnippet"; 
// import quizSample from "../assets/sampleQuiz"; 

const LessonScreen = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();

  // Define the sections array with type and content
  const sections = [
    {
      type: 'video',
      title: 'Introduction to Machine Learning',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lesson Video</h2>
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src={videoSample} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ),
    },
    {
      type: 'coding',
      title: 'Code Example',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coding Exercise</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>
              {`// Sample code snippet here
function exampleFunction() {
  console.log('Hello, World!');
}`}
            </code>
          </pre>
        </div>
      ),
    },
    {
      type: 'practice',
      title: 'Practice Quiz',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practice Quiz</h2>
          <p className="text-gray-700 mb-4">Test your knowledge with the following questions:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>What is machine learning?</li>
            <li>Explain the difference between supervised and unsupervised learning.</li>
            {/* Add more questions or a quiz component here */}
          </ul>
        </div>
      ),
    },
  ];

  // Render content based on section type
  const renderSectionContent = (type) => {
    switch (type) {
      case 'video':
        return (
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lesson Video</h2>
            <video className="w-full rounded-lg shadow-lg" controls>
              <source src={videoSample} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case 'coding':
        return (
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coding Exercise</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>
                {`// Sample code snippet here
function exampleFunction() {
  console.log('Hello, World!');
}`}
              </code>
            </pre>
          </div>
        );
      case 'practice':
        return (
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practice Quiz</h2>
            <p className="text-gray-700 mb-4">Test your knowledge with the following questions:</p>
            <ul className="list-disc list-inside text-gray-600">
              <li>What is machine learning?</li>
              <li>Explain the difference between supervised and unsupervised learning.</li>
              {/* Add more questions or a quiz component here */}
            </ul>
          </div>
        );
      default:
        return <p>Content not available</p>;
    }
  };

  // Handle navigation
  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="container max-w-screen-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Section Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{sections[currentSection].title}</h1>
        {renderSectionContent(sections[currentSection].type)}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentSection === 0}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentSection === sections.length - 1}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonScreen;
