import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../config/api";
import { completeLecture, setCurrentLecture } from "../redux/course/CourseSlice";

const MCQScreen = ({ onQuizEnd }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course.course);
  const currentLecture = useSelector((state)=>state.course.currentLecture);
  const { courseId, index } = useParams();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const lecture = course?.lectures[index - 1];
        const response = await axiosInstance.get(`/learning/quiz/${lecture.quiz}`);
        const fetchedQuiz = response.data.quiz;

        if (fetchedQuiz.type === "multiple-choice") {
          setQuiz({
            title: fetchedQuiz.title,
            questions: fetchedQuiz.choices.map((choice) => ({
              question: fetchedQuiz.title,
              options: fetchedQuiz.choices,
              correctAnswer: fetchedQuiz.correctAnswer,
            })),
          });
        } else {
          console.error("Invalid quiz type:", fetchedQuiz.type);
        }
      } catch (err) {
        toast.error("Failed to load quiz: " + err.message);
      }
    };

    if (course) fetchQuiz();
  }, [course, index]);

  const handleAnswerClick = async (optionIndex) => {
    setSelectedAnswer(optionIndex);
    const currentQuestion = quiz.questions[currentQuestionIndex];
  
    if (optionIndex === currentQuestion.correctAnswer) {
      setFeedback("Correct!");
      setTimeout(async () => {
        setFeedback("");
        setSelectedAnswer(null);
  
        if (currentQuestionIndex < quiz.questions.length - 1) {
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          const lecture = course.lectures.find((lecture) => lecture.index == index);
          const lectureId = lecture._id;
  
          // Mark the current lecture as completed
          await dispatch(completeLecture({ lectureId, courseId }));
        console.log("here i am")
          if (course.lectures.length === parseInt(index, 10)) {

            toast.success("Course Completed Successfully");
            navigate("/app/dashboard");
          } else {
            // Navigate to the next lecture
            const nextLectureIndex = parseInt(index, 10) + 1;
            dispatch(setCurrentLecture(nextLectureIndex));
          }
        }
      }, 1000);
    } else {
      setFeedback("Try Again!");
    }
  };
  
  useEffect(() => {
    if (!currentLecture) {
      dispatch(setCurrentLecture(parseInt(index, 10))); // Set current lecture on load
    } else if (currentLecture > parseInt(index, 10)) {
      // Redirect to the latest lecture if user tries to access a previous one
      navigate(`/course-started/notes-screen/${courseId}/${currentLecture}`);
    }
  }, [dispatch, currentLecture, index, courseId, navigate]);
  

  const currentQuestion = quiz?.questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{currentQuestion?.question}</h2>
        <div className="flex flex-col space-y-4">
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`py-2 px-4 rounded border transition-all duration-300 ${
                selectedAnswer === index
                  ? index === currentQuestion.correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              disabled={feedback === "Correct!"}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && (
          <p
            className={`mt-4 text-lg font-medium ${
              feedback === "Correct!" ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default MCQScreen;
