import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Coursetile from "../components/coursetile";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import coursecover from "../assets/coursecover.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/course/CoursesSlice";
import Loader from '../components/Loader/Loader';

const Catalog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const courses = useSelector((state) => state.courses.courses || []);

    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    await dispatch(fetchCourses());
                } catch (err) {
                    console.log("error fetching courses for catalog: ", err);
                }
            }
        };

        fetchData();
    }, [user, location.pathname, dispatch]); // Add location.pathname to the dependency array

    return (
        <div>
            {/* <Navbar/> */}
            <div className="container max-w-screen-6xl mx-auto h-max font-poppins">
                <div className="flex items-center ml-2">

                    <p className="text-2xl font-medium ml-4">Catalog</p>
                </div>
                <div className="relative p-4 ">
                    <input
                        type="text"
                        placeholder="search"
                        className="p-2 pl-10 w-96 text-sm border-2 border-textgrey text-textgrey placeholder-textgrey font-poppins bg-white rounded-full focus:outline-none"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-textgrey"
                    />
                </div>

                <div className="flex items-center text-textgrey space-x-2 px-4">
                    <div className="w-max rounded-full flex items-center h-8 border-theme border px-4">
                        <p className="text-theme">All</p>
                    </div>
                    <div className="w-max rounded-full flex items-center h-8 border-textgrey hover:text-theme hover:border-theme border px-4 cursor-pointer">
                        <p>Machine Learning</p>
                    </div>
                    <div className="w-max rounded-full flex items-center h-8 border-textgrey hover:text-theme hover:border-theme border px-4 cursor-pointer">
                        <p>Data Science</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl flex mx-auto h-max flex-wrap items-center justify-around py-2">
                {Array.isArray(courses) ? courses.map((course) => (
                    <Coursetile
                        cover={coursecover}
                        key={course._id}
                        courseId={course._id}
                        title={course.title}
                        tutor="Zaki"
                        lessons={course.totalLectures}
                        quiz={course.totalLectures}
                    />
                )) : <Loader />}
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                                           

            </div>
        </div>
    );
};

export default Catalog;
