import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axiosInstance from '../config/api';

const NotesScreen = () => {
  const { courseId, index } = useParams();
  const course = useSelector((state) => state.course.course);
  const navigate = useNavigate();

  const lecture = course?.lectures ? course.lectures[index - 1] : null;
  const transcript = lecture?.transcript || [];

  const handleGotIt = async () => {
    console.log("in handle got it");
    try{
      console.log(lecture._id)
      const response = await axiosInstance.get(`/learning/lecture/${lecture._id}`);
      const responseLecture = response.data

      if(responseLecture.quiz[0].type=="coding")
        navigate(`/course-started/code-screen/${courseId}/${index}`);
      else
        navigate(`/course-started/mcq-screen/${courseId}/${index}`)
    
    }
    catch(err){

    }

    

  };

  

  const renderContent = () => {
    if (!lecture) {
      return <div className="text-center text-red-600">Lecture not found.</div>;
    }

    if (!transcript.length) {
      return <div className="text-center text-lg">No transcript available.</div>;
    }

    return transcript.map((section, idx) => (
      <div key={idx} className="my-6">
        {section.type === 'heading' && (
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {section.content}
          </h2>
        )}
        {section.type === 'text' && (
          <p className="text-base leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: section.content }} />
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-screen-xl w-full mx-auto p-8 font-sans bg-gray-50 shadow-lg rounded-lg mt-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6 w-full">
        Lecture : {index}   {lecture?.title}
      </h1>
      <div className="bg-white p-6 shadow rounded-lg border border-gray-200">
        {renderContent()}
      </div>
      <div className='flex items-center w-full  justify-end p-4'>
        <button
              onClick={handleGotIt}
              className="px-4 py-2 bg-theme hover:scale-105 transition-all duration-200 text-white rounded"
            >
              Got It
        </button>

      </div>
      
    </div>
  );
};

export default NotesScreen;
