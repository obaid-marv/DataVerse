import Navbar from "../components/navbar";
import ProgressBar from "../components/progressbar";
import book from '../assets/book.svg';
import apps from '../assets/apps.svg';
import timelapse from '../assets/timelapse.svg';


const Courses = () => {
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
                                <ProgressBar progress={30}/>                   
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