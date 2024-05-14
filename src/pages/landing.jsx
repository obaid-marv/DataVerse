import Landingnav from "../components/landingnav";
import model from "../assets/model.png";

const Landing = ()=> {
    return (
        <div className="container bg-blue-500">
            <div className="container flex flex-col max-w-full mx-auto h-screen bg-themeblack">
                    <Landingnav/>
                    <div className="container max-w-screen-lg mx-auto h-full flex items-center mt-8">
                        <div className="flex flex-col justify-between h-4/6 w-2/5">
                            <div className="flex items-center bg-theme bg-opacity-30 p-2 w-10/12 rounded-full">
                                <div className="rounded-full flex items-center justify-center bg-theme w-10 h-10">
                                    <p className="text-xs text-white font-abeezee">New</p>
                                </div>
                                <p className="text-sm font-medium text-white ml-2 font-abeezee">Becoming a data Scientist in 180 days</p>
                            </div> 
                            <p className="text-4xl font-medium text-white h-max font-scp leading-10">
                            Improve your skills by    study with coding 
                            </p>
                            <button className="text-sm font-medium text-white w-40 font-abeezee bg-theme bg-opacity-100 mt-12 py-3 px-8 rounded-lg transform-all duration-200">Get Started</button> 
                        </div>
                        <div className="flex w-3/5 h-full">
                            <img src={model} alt="COVER IMG" className="ml-16 h-full w-full object-cover"/>
                        </div>


                    </div>
            </div>

        </div>
    )
}

export default Landing;