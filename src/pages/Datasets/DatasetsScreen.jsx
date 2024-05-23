import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Navbar from '../../components/navbar';
import Tag from '../../components/Datasets/Tag';
import CustomButton from "../../components/Datasets/CustomButton"
import CustomInput from "../../components/Datasets/CustomInput"
import DataSetcategorySection from '../../components/Datasets/DataSetcategorySection/DataSetcategorySection';
import DataSetcategorySection2 from '../../components/Datasets/DataSetcategorySection2/DataSetcategorySection2';
import { IMAGES } from '../../constants/images';
import { MdAutoGraph } from 'react-icons/md';

const DatasetsScreen = () => {

    const [searchText, setSearchText] = useState('');
    const [tileView, setTileView] = useState(false);

    const handleSearchClick = (val) =>{
        console.log('searchText', searchText);
        setSearchText(val);
        if(val){
            setTileView(true);
        }
    }

    const tags = [
        {
            title: "All datasets",
            active: false
        },
        {
            title: "Computer Science",
            active: false
        },
        {
            title: "All datasets",
            active: false
        },
        {
            title: "All datasets",
            active: false
        },
        {
            title: "All datasets",
            active: false
        },
        {
            title: "All datasets",
            active: false
        },
    ]

    const datasetcarddata = [
        {
            heading: "Trending",
            icon: <MdAutoGraph size={34} />,
            datasets: [
                {
                    title: "Shein Footware Datast",
                    description: "",
                    image: IMAGES.solar,
                    size: "347 KB",
                    files: 2,
                    filetypes: [
                        "CSV", "json"
                    ],
                    usability: 10,
                    author: "Athrava Taras",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 5,
                    time: "Updated 18 hours ago"
                },
                {
                    title: "Dataset for renewable energy systems",
                    description: "",
                    image: IMAGES.solar,
                    size: "874 KB",
                    files: 1,
                    filetypes: [
                        "CSV"
                    ],
                    usability: 8.7,
                    author: "Afroz",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 9,
                    time: "Updated 5 days ago"
                },
                {
                    title: "Shein Footware Datast",
                    description: "",
                    image: IMAGES.solar,
                    size: "347 KB",
                    files: 2,
                    filetypes: [
                        "CSV", "json"
                    ],
                    usability: 10,
                    author: "Athrava Taras",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 5,
                    time: "Updated 18 hours ago"
                },
                {
                    title: "Dataset for renewable energy systems",
                    description: "",
                    image: IMAGES.solar,
                    size: "874 KB",
                    files: 1,
                    filetypes: [
                        "CSV"
                    ],
                    usability: 8.7,
                    author: "Afroz",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 9,
                    time: "Updated 5 days ago"
                },
            ]
        },
        {
            heading: "Music",
            icon: <MdAutoGraph size={34} />,
            datasets: [
                {
                    title: "Shein Footware Datast",
                    description: "",
                    image: IMAGES.solar,
                    size: "347 KB",
                    files: 2,
                    filetypes: [
                        "CSV", "json"
                    ],
                    usability: 10,
                    author: "Athrava Taras",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 5,
                    time: "Updated 18 hours ago"
                },
                {
                    title: "Dataset for renewable energy systems",
                    description: "",
                    image: IMAGES.solar,
                    size: "874 KB",
                    files: 1,
                    filetypes: [
                        "CSV"
                    ],
                    usability: 8.7,
                    author: "Afroz",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 9,
                    time: "Updated 5 days ago"
                },
                {
                    title: "Shein Footware Datast",
                    description: "",
                    image: IMAGES.solar,
                    size: "347 KB",
                    files: 2,
                    filetypes: [
                        "CSV", "json"
                    ],
                    usability: 10,
                    author: "Athrava Taras",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 5,
                    time: "Updated 18 hours ago"
                },
                {
                    title: "Dataset for renewable energy systems",
                    description: "",
                    image: IMAGES.solar,
                    size: "874 KB",
                    files: 1,
                    filetypes: [
                        "CSV"
                    ],
                    usability: 8.7,
                    author: "Afroz",
                    authorProfileLink: "https://www.dataverse.com/atharvataras",
                    upvotes: 9,
                    time: "Updated 5 days ago"
                },
            ]
        },
    ]

    return (
        <div className={""}>
            <Navbar />
            <div className={`  font-poppins p-8 mt-8 mx-8  `}>
                <div className='flex flex-col gap-4'>
                    <div className={""}>
                        <p className="text-3xl" >Datasets</p>
                        <p>Explore, analyze, and share quality data. Learn more about data types, creating, and collaborating.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <CustomButton label={"New Dataset"} icon={<FaPlus />} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <CustomInput onchangetext={(val) => handleSearchClick(val)} />
                            <div className='flex gap-2 items-center'>
                                {tags.map((item) => {
                                    return (
                                        <Tag title={item.title} active={item.active} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex py-10 flex-col">
                        {!tileView?
                        datasetcarddata?.map((item, index) => {
                            return (
                                <>
                                    <DataSetcategorySection key={index} data={item} />
                                    <div className='w-full h-[0.1px] bg-black/20 my-14 rounded-l'></div>
                                </>
                            )
                        })
                    :
                        datasetcarddata?.map((item, index) => {
                            return (
                                <>
                                    <DataSetcategorySection2 key={index} data={item} />
                                    <div className='w-full h-[0.1px] bg-black/20 my-14 rounded-l'></div>
                                </>
                            )
                        })
                    }
                    </div>
                    <div className='pb-20'>
                        <div className='flex flex-col gap-4 items-center justify-center text-center'>
                            <p className='font-semibold text-5xl'>Didn't Find What You are Looking for?</p>
                            <div className='flex'>
                                <p className='text-white bg-black px-8 py-2 cursor-pointer hover:scale-95 rounded-3xl'>Explore all public datasets</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DatasetsScreen