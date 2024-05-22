import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Navbar from '../../components/navbar';

const DatasetsScreen = () => {

    const DatasetCard = () => {

        return (
            <div>
                <div>
                    <div>

                    </div>
                </div>
            </div>
        )
    };

    const Tags = ({ title }) => {
        return (
            <div className={`border border-black rounded-3xl py-2 px-4`}>
                <p>{title}</p>
            </div>
        )
    };

    const CustomButton = ({ label, icon, clickaction }) => {
        return (
            <div>
                <div>
                    <p>{icon}</p>
                    <p>{label} </p>
                </div>
            </div>
        )
    };

    const CustomInput = () => {
        return (
            <div className=''>
                <div className='border border-black rounded-3xl items-center flex px-2 '>
                    <p><IoSearch /> </p>
                    <input type="text" className='outline-none py-2 px-2 bg-transparent' />
                </div>
            </div>
        )
    };


    return (
        <div className={""}>
            <Navbar />
            <div className={`container max-w-screen-lg h-max font-poppins p-8 mt-8 ml-8 shadow-lg border-2 border-grey-300 rounded-lg `}>
                <div>
                    <div className={""}>
                        {/* <div>
                            <p className="text-2xl text-white bg-themeblack px-2 py-2 rounded-3xl " >Datasets</p>
                        </div> */}
                        <p className="text-3xl" >Datasets</p>
                        <p>Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.</p>
                    </div>
                    <div>
                        <div>
                            <CustomButton label={"New Dataset"} icon={<FaPlus />} />
                        </div>
                        <div>
                            <CustomInput />
                        </div>
                    </div>

                    <div className="flex flex-wrap">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default DatasetsScreen