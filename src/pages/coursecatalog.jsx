import Navbar from "../components/navbar";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Coursetile from "../components/coursetile";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import coursecover from "../assets/coursecover.png";
import { useNavigate } from "react-router-dom";

const Catalog = ()=> {
    
    const navigate = useNavigate();
    return (
        <div>
            {/* <Navbar/> */}
            <div className="container max-w-screen-6xl mx-auto h-max font-poppins p-5">
                <div className="flex items-center ml-2">
                    <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6 hover:scale-125 transition duration-200 cursor-pointer" onClick={()=>navigate('/app/courses')}/>
                    <p className="text-2xl font-medium ml-4">Catalog</p>
                </div>
                <div className="relative p-4 ml-4 ">
                        <input
                        type="text"
                        placeholder="search"
                        className="p-2 pl-10 w-96 text-sm border-2 border-textgrey text-textgrey placeholder-textgrey font-poppins bg-white  rounded-full focus:outline-none"
                        />
                        <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-textgrey"
                        />
                </div>

                <div className="flex items-center text-textgrey space-x-2 px-4 ml-4">
                    <div className="w-max rounded-full flex items-center h-8 border-theme border px-4">
                        <p className="text-theme">All</p>
                    </div>

                    <div className="w-max rounded-full flex items-center h-8 border-textgrey hover:text-theme hover:border-theme border px-4 cursor-pointer">
                        <p >Machine Learning</p>
                    </div>
                    <div className="w-max rounded-full flex items-center h-8 border-textgrey hover:text-theme hover:border-theme border px-4 cursor-pointer">
                        <p>Data Science</p>
                    </div>
                </div>

                

            </div>
            <div className="max-w-6xl flex mx-auto h-max flex-wrap items-center justify-around py-2">
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    <Coursetile cover={coursecover} title="Machine Learning and Data Analysis" tutor="obaid ur rehman" lessons="7" quiz="7"/>
                    
                    
                </div>  
        </div>
    )
}


export default Catalog;