import tutot from "../assets/tutoricon.svg"
import { useNavigate } from "react-router-dom";

const Coursetile = ({cover,title , tutor, lessons, quiz})=>{
    const navigate = useNavigate();

    const handleStartCourse = () => {
        navigate("/app/courses/course-screen");
      };
    return(
        <div className="container w-60 h-72 font-poppins mt-4 shadow-md cursor-pointer rounded-xl">
            <img src={cover} alt="cover here" />
            <div className="flex flex-col justify-around px-1 gap-3 text-textgrey">
                <p className="px-1 mt-1 text-base font-abeezee font-semibold">{title}</p>
                <div className="flex flex-col justify-normal px-2 ">
                    <div className="flex items-center space-x-2 mb-3">
                        <img src={tutot} alt="icon here" className="w-4 h-4"/>
                        <p className="text-xs font-semibold">{tutor}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                    <p className="text-xs font-medium">{lessons} Lessons<span className="text-sm font-normal"> / </span>{quiz} Quizzes </p>
                        <button onClick={handleStartCourse} className="px-3 py-1 bg-theme text-white rounded-md text-sm hover:scale-110">Start</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Coursetile;