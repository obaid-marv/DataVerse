import CourseCompletionPieChart from "./coursecompletionchart";
import school from '../assets/school.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import tutot from "../assets/tutoricon.svg"
import { useNavigate } from "react-router-dom";

const Dashcourse = ({tutor,title,percentage, courseId, course}) => {
    const navigate = useNavigate();    

    return(
        <div onClick={() => navigate(`/app/courses/course-screen/${courseId}`, {state: course})} className="flex w-64 h-80 bg-themeblack p-4 rounded-lg shadow-xl hover:scale-110 transform-all duration-200 cursor-pointer">
            <div className="flex flex-col justify-around w-full text-white">
                <div className="flex flex-1 flex-col">
                    <div className="flex justify-between">
                        <img src={school} alt="icon" className="w-4 h-4"/>
                        {/* <FontAwesomeIcon icon={faEllipsisV} size="lg" className="cursor-pointer hover:scale-125" /> */}
                    </div>
                    <div className="flex flex-col justify-around pt-8">
                        <div className="h-12">
                            <p className="text-sm font-medium">{title}</p>
                        </div>
                        <div className="flex">
                            <img src={tutot} alt="icon here" className="w-4 h-4"/>
                            <p className="text-xs font-medium ml-2">{tutor}</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-1 justify-center">
                    <CourseCompletionPieChart completedPercentage={percentage}/>
                </div>
            </div> 
        </div>
    )

}

export default Dashcourse;