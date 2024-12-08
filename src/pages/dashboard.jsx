import hat from "../assets/hat.svg";
import clock from "../assets/clock.svg";
import flag from "../assets/flag.svg";
import LearningHeatmap from "../components/heatmap";
import Dashcourse from "../components/dashcourse";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProgress } from "../redux/course/ProgressSlice";
import Loader from "../components/Loader";
import illustration from "../assets/dashboard-learning.svg";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa6";


export const NoCoursesEnrolled = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 p-6">
      <img src={illustration} alt="Start Learning" className="w-64 h-64" />
      <h2 className="text-2xl font-semibold text-customDarkBlue">
        You haven't enrolled in any courses yet!
      </h2>
      <p className="text-lg text-gray-600">
        Start your learning journey by exploring our wide range of courses.
      </p>
      <Link
        to="/courses"
        className="mt-4 bg-theme text-white py-2 px-4 rounded-lg hover:bg-customBlue transition"
      >
        Browse Courses
      </Link>
    </div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const progress = useSelector((state) => state.progress.enrolledCourses);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchUserProgress());
      } catch (error) {
        console.error("Failed to fetch progress:", error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, dispatch]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-lg mt-4 mx-auto p-6 font-poppins">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-semibold text-customBlue2">Dashboard</p>
            {user ? (
              <p className="text-xl font-medium text-customDarkBlue mt-2">
                {`Hey, ${user.username}!`}
              </p>
            ) : null}
          </div>
          <div className="flex w-28 px-4 py-4 items-center justify-around rounded-full border border-gray-50 bg-theme">
            <FaTrophy className="trophy-icon" size={25}/>
            <p className="bg-white rounded px-1">{user?.totalPoints}</p>
          </div>
          
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-xl text-center">
            <img src={hat} alt="Courses in Progress" className="w-10 h-10 mx-auto mb-4" />
            <p className="text-md font-medium text-gray-700">Courses in Progress</p>
            <p className="text-4xl font-semibold text-theme mt-2">
              {progress ? `${progress.length}` : <Loader />}
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-xl text-center">
            <img src={clock} alt="Hours Learning" className="w-10 h-10 mx-auto mb-4" />
            <p className="text-md font-medium text-gray-700">Hours Learning</p>
            <p className="text-4xl font-semibold text-theme mt-2">
              {progress ? `${progress.length}h 15m` : <Loader />}
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-lg p-6 rounded-xl text-center">
            <img src={flag} alt="Weekly Points" className="w-10 h-10 mx-auto mb-4" />
            <p className="text-md font-medium text-gray-700">Weekly Points</p>
            <p className="text-4xl font-semibold text-theme mt-2">
              {progress ? user.totalPoints : <Loader />}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <LearningHeatmap />
        </div>

        <div className="mt-8">
          <p className="text-lg font-semibold text-customDarkBlue">Learning</p>
          <div className="flex flex-wrap justify-around mt-6">
            {progress?.length === 0 ? (
              <NoCoursesEnrolled />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {progress?.map((course) => (
                  <Dashcourse
                    key={course.courseId._id}
                    tutor="Zaki Bin Mazhar"
                    title={course.courseId.title}
                    percentage={course.progress}
                    courseId={course.courseId._id}
                    course={course}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
