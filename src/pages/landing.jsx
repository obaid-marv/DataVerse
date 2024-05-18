import Landingnav from "../components/landingnav";
import model from "../assets/model.png";
import Track from "../components/track";
import icon1 from "../assets/track1.svg"
import icon2 from "../assets/track2.svg"
import icon3 from "../assets/track3.svg"
import Feature from "../components/feature";
import profile1 from "../assets/profile1.svg";
import calender from "../assets/calender.svg";
import imagesec from "../assets/imagesec.png";
import Faqs from "../components/faqs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add all brand icons to the library
library.add(fab);



const Landing = ()=> {
    return (
        <div className="container bg-white">
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
            <div className="container max-w-screen-lg mx-auto flex flex-col  items-center h-screen">
                <p className="text-3xl font-bold font-poppins text-black mt-8">LEARNING TRACKS TAILORED FOR NOVICE </p>
                <p className="text-lg font-poppins text-black mt-4">We provide practical skills to novice users aiming to excel in the most growing fields.</p>
                <div className="flex items-center justify-between w-full mt-12 px-4">

                    <div className="flex flex-col items-center justify-between h-96 p-4">
                        <Track icon={icon1} textcolor="white" bgIcon="white" bgColor="themeblack" head="EASY ACCESS" text="Access premium facilities tailored for skillful learning ML and Data Science."/>
                        <div className="h-2 w-20 bg-themeblack rounded-full shadow-md"></div>
                    </div>
                    <div className="flex flex-col items-center justify-between h-96 p-4">
                        <Track icon={icon2} textcolor="black" bgIcon="themeblack" bgColor="trackgrey" head="FLEXIBLE" text="Code anywhere you want need not to worry about environment for coding."/>
                        <div className="h-2 w-20 bg-trackgrey rounded-full shadow-md"></div>
                    </div>
                    <div className="flex flex-col items-center justify-between h-96 p-4">
                        <Track icon={icon3} textcolor="white" bgIcon="white" bgColor="themeblack" head="Best Tracks" text="Easy learning tracks for to enhance users skills with a practical approach"/>
                        <div className="h-2 w-20 bg-themeblack rounded-full shadow-md"></div>
                    </div>
                </div>            
            </div>

            <div className="contianer max-w-screen-lg mx-auto flex flex-col h-screen">
                <div className="flex items-center mt-12">
                    <p className="text-2xl font-medium font-poppins">Here is <span className="text-theme">What</span>  you can do </p>
                    <div className="w-24 h-1 rounded-full bg-theme ml-4 shadow-md"></div>
                </div>
                <div className="flex w-full h-4/5"> 
                    <div className="flex flex-1 flex-col justify-around px-4 py-8">
                        <Feature icon={profile1} head="Collaborate" text="Create projects in collaboration with fellows."/>
                        <Feature icon={calender} head="Job Board" text="Get contacted by industries based on performance"/>
                        <Feature icon={calender} head="Featured News" text="Get latest news related to industry and level up."/>
                    </div>
                    <div className="flex flex-1 justify-end items-center">
                        <img src={imagesec} alt="img here" className="h-4/5 w-11/12" />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-24 h-2 bg-theme rounded-full shadow-md"></div>
                    <div className="w-12 h-2 bg-themeblack rounded-full ml-4 shadow-md"></div>
                    <div className="w-12 h-2 bg-themeblack rounded-full ml-4 shadow-md"></div>                   
                </div>
            </div>

            <div className="container max-w-screen-lg mx-auto">
                <Faqs/>
            </div>
            
            <div className="h-screen pt-40">
                <div className="relative z-10 bg-theme flex flex-col text-white py-16 px-32 rounded-lg w-full md:w-2/3 mx-auto -mb-32 shadow-2xl">
                    <h2 className="text-4xl font-bold font-scp text-center">Start upgrading your <br/> skills free for this month</h2>
                    <form className="mt-4 flex justify-center">
                    <input type="email" placeholder="Submit your email here" className="p-2 w-64 text-sm border-none text-white placeholder-white font-poppins bg-white bg-opacity-50" />
                    <button type="submit" className="bg-black text-sm text-white px-4 ml-4 font-abeezee">Get started <span><FontAwesomeIcon icon={faExternalLinkAlt} className="text-white" /></span></button>
                    </form>
                </div>
                <div className="bg-themeblack pt-32">
                    <div className="container max-w-screen-lg mx-auto py-12 text-center">
                        <div className="text-white flex flex-col p-4">
                            <div className="flex justify-between pb-4 items-center px-4 border-b border-gray">
                                <h1 className="text-2xl font-abeezee font-medium">DataVerse</h1>
                                <div className="flex justify-center font-abeezee space-x-12 mt-4">
                                    <a href="#" className="text-white italic">Courses</a>
                                    <a href="#" className="text-white italic">Career Paths</a>
                                    <a href="#" className="text-white italic">Jobs</a>
                                    <a href="#" className="text-white italic">News</a>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <div className="mt-8 flex justify-center space-x-4">
                                        <a href="#" className="text-white"><FontAwesomeIcon icon={['fab', 'facebook-f']} className="h-5 w-5 text-gray-300" /></a>
                                        <a href="#" className="text-white"><FontAwesomeIcon icon={['fab', 'instagram']} className="h-5 w-5 text-gray-300" /></a>
                                        <a href="#" className="text-white"><FontAwesomeIcon icon={['fab', 'linkedin']} className="h-5 w-5 text-gray-300" /></a>
                                        <a href="#" className="text-white"><FontAwesomeIcon icon={['fab', 'x-twitter']} className="h-5 w-5 text-gray-300" /></a>
                                
                                    </div>
                                    <p className="mt-8 text-white italic">&copy; 2024 Copyright. <span className="text-blue-400 text-abeezee not-italic">DataVerse</span></p>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}


export default Landing;