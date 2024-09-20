
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

const NoCoursesEnrolled = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 p-6">
            <img src={illustration} alt="Start Learning" className="w-64 h-64"/>
            <h2 className="text-2xl font-semibold">You haven't enrolled in any courses yet!</h2>
            <p className="text-lg text-gray-600">Start your learning journey by exploring our wide range of courses.</p>
            <Link to="/courses" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                Browse Courses
            </Link>
        </div>
    );
};

const Dashboard = ()=>{

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const progress = useSelector((state) => state.progress.enrolledCourses)
    progress?console.log(progress):console.log("Not recieved courses");

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchUserProgress());
            } catch (error) {
                console.error("Failed to fetch progress:", error);
            }
        };

        if (user) {
            fetchData();        }
    }, [user, dispatch]);


    return(
        <div className="">
            {/* <Navbar/> */}
            <div className="max-w-screen-lg mt-4 h-max mx-auto p-4 font-poppins">
                <p className="text-2xl font-medium font-poppins">Dashboard</p>
                {user?
                <p className="text-xl font-base font-poppins">{`HEY ${user} !`}</p>:
                <></>
                }
                <div className="flex items-center p-4 space-x-12">
                    <div className="w-60 h-40 border-2 text-textgrey shadow-md flex flex-col justify-around rounded-xl p-4">
                        <div className="flex items-center">
                            <img src={hat} alt="logo here" className="w-7 h-7"/>
                            <p className="text-md font-medium ml-2">Courses in progress</p>
                            
                        </div>  
                        <p className="text-4xl font-medium">{progress?`${progress.length}`:<Loader/>}</p>
                    </div>
                    <div className="w-60 h-40 border-2 text-textgrey shadow-md flex flex-col justify-around rounded-xl p-4">
                        <div className="flex items-center">
                            <img src={clock} alt="logo here" className="w-7 h-7"/>
                            <p className="text-md font-medium ml-2">Hours Learning</p>
                            
                        </div>  
                        <p className="text-4xl font-medium">{progress?`${progress.length}h 15m`:<Loader/>}</p>
                    </div>
                    <div className="w-60 h-40 border-2 text-textgrey shadow-md flex flex-col justify-around rounded-xl p-4">
                        <div className="flex items-center">
                            <img src={flag} alt="logo here" className="w-7 h-7"/>
                            <p className="text-md font-medium ml-2">Weekly Points</p>
                            
                        </div>  
                        <p className="text-4xl font-medium">{progress?`${progress.length}00`:<Loader/>}</p>
                    </div>
                </div>

                <div>
                    <LearningHeatmap/>

                </div>
                <div className="max-w-screen-lg h-max p-4">
                    <p className="text-lg font-semibold">LEARNING</p>
                    <div className="flex flex-wrap items-center justify-around mt-4">
                    {
                        progress?.length === 0 ? <NoCoursesEnrolled /> : (
                            <div className="max-w-screen-lg h-max p-4">
                                <div className="flex flex-wrap space-x-8 items-center justify-between mt-4">
                                    {progress?.map(course => (
                                        <Dashcourse
                                            key={course.courseId._id}
                                            tutor='Zaki Bin Mazhar'
                                            title={course.courseId.title}
                                            percentage={course.progress}
                                        />
                                    ))}
                                </div>
                            </div>
                        )
                    }

                        {/* <Dashcourse tutor="Obaid" title="Intro to Data Science" percentage={40}/>
                        <Dashcourse tutor="Zaki" title="AI Fundamentals" percentage={60}/>
                        <Dashcourse tutor="Zaki" title="Python" percentage={12}/> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;