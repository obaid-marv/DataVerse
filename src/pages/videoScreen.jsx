import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import your custom video player
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import introVideo from "../assets/introVideo.mp4";
import { useSelector } from 'react-redux';

const VideoScreen = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const navigate = useNavigate();
  const { courseId, index } = useParams();
  const course = useSelector((state) => state.course.course);
  // Sample Transcript
  const transcript = `
    Welcome to this lesson. In this video, we will cover the basics of data science.
    You'll learn how to apply data analysis techniques using real-world datasets...
    (the rest of the transcript would go here).
  `;

  const handleShowTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  const handleGotIt = () => {
    navigate(`/course-started/code-screen/${courseId}/${index}`);
  };
  
  return (
    <div className="flex flex-row h-screen bg-gray-200">
      {showTranscript && (
        <div className="w-1/4 p-4 bg-gray-100 overflow-y-scroll">
          <h2 className="text-lg font-semibold mb-2">Transcript</h2>
          <p>{transcript}</p>
        </div>
      )}

      <div className={`flex-1 ${showTranscript ? 'w-3/4' : 'w-full'} flex items-center flex-col justify-center p-4`}>
        {/* Replace default video tag with Custom Video Player */}
        <CustomVideoPlayer videoSrc={course?.lectures[index-1].videoUrl} />

        {/* Buttons */}
        <div className="mt-4 w-3/4 flex items-center justify-between">
          <button
            onClick={handleShowTranscript}
            className="px-4 py-2 bg-white text-customDarkBlue border-2 border-gray-400 rounded-sm"
          >
            {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
          </button>

          <button
            onClick={handleGotIt}
            className="px-4 py-2 bg-theme text-white rounded"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;
