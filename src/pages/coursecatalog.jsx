import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Coursetile from "../components/coursetile";
import coursecover from "../assets/coursecover.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/course/CoursesSlice";
import Loader from "../components/Loader/Loader";

const Catalog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const courses = useSelector((state) => state.courses.courses || []);
  
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredCourses, setFilteredCourses] = useState(courses); // State for filtered courses

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
  }, [user, location.pathname, dispatch]);

  useEffect(() => {
    // Filter courses based on search query
    const lowerCaseQuery = searchQuery.toLowerCase();
    const result = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lowerCaseQuery) ||
        course.category?.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredCourses(result);
  }, [searchQuery, courses]);

  return (
    <div className="max-w-screen-lg w-full">
      <div className="mx-auto h-max w-full font-poppins">
        <div className="flex items-center ml-2">
          <p className="text-2xl font-medium ml-4">Catalog</p>
        </div>
        <div className="relative p-4 ">
          <input
            type="text"
            placeholder="Search courses"
            className="p-2 pl-10 w-96 text-sm border-2 border-textgrey text-textgrey placeholder-textgrey font-poppins bg-white rounded-full focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query
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
      <div className="max-w-6xl flex mx-auto h-max flex-wrap items-center justify-between py-2">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Coursetile
              cover={coursecover}
              key={course._id}
              courseId={course._id}
              title={course.title}
              tutor="Zaki"
              lessons={course.totalLectures}
              quiz={course.totalLectures}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Catalog;
