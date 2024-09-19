import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoScreen = () => {
  const [showTranscript, setShowTranscript] = useState(false);
  const navigate = useNavigate();

  // Sample Transcript
  const transcript = `
    Welcome to this lesson. In this video, we will cover the basics of data science.
    You'll learn how to apply data analysis techniques using real-world datasets...
    (the rest of the transcript would go here).
  `;

  // Handler for toggling transcript
  const handleShowTranscript = () => {
    setShowTranscript(!showTranscript);
  };

  // Handler for 'Got It' button
  const handleGotIt = () => {
    navigate('/course-started/code-screen'); // Adjust the path based on your routing
  };

  return (
    <div className="flex flex-row h-screen">
      {showTranscript && (
        <div className="w-1/4 p-4 bg-gray-100 overflow-y-scroll">
          <h2 className="text-lg font-semibold mb-2">Transcript</h2>
          <p>{transcript}</p>
        </div>
      )}

      <div className={`flex-1 ${showTranscript ? 'w-3/4' : 'w-full'} p-4`}>
        {/* Video Section */}
        <div className="aspect-w-16 aspect-h-9">
          <video width="100%" controls className='h-[450px]'>
            <source src="https://example.com/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleShowTranscript}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
          </button>

          <button
            onClick={handleGotIt}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoScreen;
