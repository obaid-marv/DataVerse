import Navbar from "../components/navbar";
import ProgressBar from "../components/progressbar";
import book from '../assets/book.svg';
import apps from '../assets/apps.svg';
import hat from '../assets/hat.svg';
import timelapse from '../assets/timelapse.svg';
import CourseProgress from "../components/courseprogress";
import { useNavigate } from "react-router-dom";


const Courses = () => {

    const navigate = useNavigate();
    return (
        <div >
            <Navbar/>
            <div className="container max-w-6xl mx-auto h-max font-poppins mt-8">
                <p className="text-2xl font-medium">MY LEARNING</p>
                <div className="flex">
                    <div className="w-2/3 p-4">
                        <div className="flex flex-col">
                            <div className="flex flex-col text-white p-8 bg-themeblack rounded-xl shadow-lg">
                                <p className="font-semibold">Weekly Goal</p>
                                <ProgressBar progress={30} label={true} width="50%" containerWidth='100%' containerHeight='50px'/>                   
                            </div>
                            <div className="flex flex-col mt-8">
                                <p>Weekly Progress</p>
                                <div className="flex h-32 w-full py-4 rounded-lg shadow-lg">
                                    <div className="flex flex-col justify-center px-16">
                                        <img src={book} alt="" className="h-6 w-6"/>
                                        <p className="text-sm font-semibold">3/7 Course</p>
                                    </div>
                                    <div className="flex flex-col justify-center border-r border-grey-700 border-l px-16">
                                        <img src={apps} alt="" className="h-6 w-6"/>
                                        <p className="text-sm font-semibold">30/74 Quizes</p>
                                    </div>
                                    <div className="flex flex-col justify-center px-16">
                                        <img src={timelapse} alt="" className="h-6 w-6"/>
                                        <p className="text-sm font-semibold">24 hrs Learning</p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col w-full h-max p-2 mt-8">
                                <div className="flex items-center justify-between">
                                    <p className="text-xl font-semibold">Enrolled Courses</p>
                                    <button className="py-2 px-4 text-sm font-medium w-max bg-theme hover:bg-opacity-60 text-white items-center justify-between transform-all duration-200 rounded shadow-md flex px-2" onClick={()=>navigate('/courses/catalog')}><span><img src={hat} alt="icon" className="w-6 h-6 mr-2"/></span>COURSE CATALOG</button>
                                </div>
                                <div className="flex flex-col">
                                    <CourseProgress title="Introduction to Data Science" progress={30}/>
                                    <CourseProgress title="AI Fundamentals" progress={100}/>
                                    <CourseProgress title="Machine Learning" progress={70}/>
                                    <CourseProgress title="Python" progress={100}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 bg-orange-200 p-4">
                    2
                    </div>
                </div>
                    


            </div>
        </div>
    )
}

export default Courses;