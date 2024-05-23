import Navbar from "../components/navbar";
import hat from "../assets/hat.svg";
import clock from "../assets/clock.svg";
import flag from "../assets/flag.svg";
import LearningHeatmap from "../components/heatmap";
import Dashcourse from "../components/dashcourse";



const Dashboard = ()=>{
    return(
        <div className="">
            <Navbar/>
            <div className="max-w-screen-lg h-max mx-auto mt-8 p-4 font-poppins">
                <p className="text-2xl font-medium font-poppins">Dashboard</p>
                <p className="text-xl font-base font-poppins">OVERVIEW</p>
                <div className="flex items-center p-4 space-x-12">
                    <div className="w-60 h-40 border-2 text-textgrey shadow-md flex flex-col justify-around rounded-xl p-4">
                        <div className="flex items-center">
                            <img src={hat} alt="logo here" className="w-7 h-7"/>
                            <p className="text-md font-medium ml-2">Courses in progress</p>
                            
                        </div>  
                        <p className="text-4xl font-medium">3</p>
                    </div>
                    <div className="w-60 h-40 border-2 text-textgrey shadow-md flex flex-col justify-around rounded-xl p-4">
                        <div className="flex items-center">
                            <img src={clock} alt="logo here" className="w-7 h-7"/>
                            <p className="text-md font-medium ml-2">Hours Learning</p>
                            
                        </div>  
                        <p className="text-4xl font-medium">3h 15m</p>
                    </div>
                    <div className="w-60 h-40 border-2 text-textgrey shadow-md flex flex-col justify-around rounded-xl p-4">
                        <div className="flex items-center">
                            <img src={flag} alt="logo here" className="w-7 h-7"/>
                            <p className="text-md font-medium ml-2">Weekly Points</p>
                            
                        </div>  
                        <p className="text-4xl font-medium">250</p>
                    </div>
                </div>

                <div>
                    <LearningHeatmap/>

                </div>
                <div className="max-w-screen-lg h-max p-4">
                    <p className="text-lg font-semibold">Continue ...</p>
                    <div className="flex flex-wrap items-center justify-around mt-4">
                        <Dashcourse tutor="Obaid" title="Intro to Data Science" percentage={40}/>
                        <Dashcourse tutor="Zaki" title="AI Fundamentals" percentage={60}/>
                        <Dashcourse tutor="Zaki" title="Python" percentage={12}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;