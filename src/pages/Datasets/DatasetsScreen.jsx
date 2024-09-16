import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Navbar from '../../components/navbar';
import Tag from '../../components/Datasets/Tag';
import CustomButton from "../../components/Datasets/CustomButton"
import CustomInput from "../../components/Datasets/CustomInput"
import DataSetcategorySection from '../../components/Datasets/DataSetcategorySection/DataSetcategorySection';
import DataSetcategorySection2 from '../../components/Datasets/DataSetcategorySection2/DataSetcategorySection2';
import { DATASETSDATA, TAGS } from '../../constants/datasets';
import { getAlldatasets } from '../../api/dataset';
import DatasetCard from '../../components/Datasets/DataSetcategorySection/components/DatasetCard';

const DatasetsScreen = () => {

    const [searchText, setSearchText] = useState('');
    const [tileView, setTileView] = useState(false);

    const handleSearchClick = (val) => {
        console.log('searchText', searchText);
        setSearchText(val);
        if (val) {
            <Navbar/>
            setTileView(true);
        } else if (val?.length == 0) {
            setTileView(false);
        }
    }

    const [fetcheddatasetsarr, setFetcheddatasetarr] = useState([]);

    const [filter, setFilter] = useState(false);
    const [filterarr, setFiltersArr] = useState([]);

    const getSelectedTag = (tagdata) => {
        const arr = filterarr;

        if (arr?.includes(tagdata?.title)) {
            if (tagdata.activestatus == false) {
                arr.splice(arr.indexOf(tagdata?.title), 1);
            }
        } else {
            if (tagdata?.activestatus) {
                arr.push(tagdata?.title);
            }
        }

        if (arr.length > 0) {
            setFilter(true);
        }

        setFilter(arr);


        // setFilter(filterarr?.length > 0);
        // if (arr.includes(tagdata?.title)) {
        //     console.log("tag data : ", tagdata);
        // } else {
        //     setFiltersArr([...filterarr, tagdata?.title]);
        // }

        console.log("filter array is : ", arr)
    }

    const handleGetAllDatasets = async () => {
        const resp = await getAlldatasets();
        console.log("resp in data is  : ", resp)
        setFetcheddatasetarr(resp);
    }

    useEffect(() => {
        handleGetAllDatasets();
    }, [])


    return (
        <div className={""}>
            {/* <Navbar /> */}
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
                            <div className='flex gap-2 items-center flex-wrap'>
                                {TAGS.map((item) => {
                                    return (
                                        <Tag title={item.title} active={item.active} onclick={getSelectedTag} />
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <CustomButton label={"Reset Filters"} clickaction={() => { setFiltersArr([]) }} />
                        </div>
                    </div>

                    <div className="flex py-10 flex-col">
                        {/*                         
                        {filter ? filterarr?.map((filterval) => {
                            return DATASETSDATA?.map((item, index) => {
                                if (item.heading == filterval) {
                                    return (
                                        <>
                                            <DataSetcategorySection2 key={item.heading} data={item} />
                                            <div className='w-full h-[0.1px] bg-black/20 my-14 rounded-l'></div>
                                        </>
                                    )
                                }
                            })
                        }) : 
                        !tileView ?
                            DATASETSDATA?.map((item, index) => {
                                return (
                                    <>
                                        <DataSetcategorySection key={item.heading} data={item} />
                                        <div className='w-full h-[0.1px] bg-black/20 my-14 rounded-l'></div>
                                    </>
                                )
                            })
                            :
                            DATASETSDATA?.map((item, index) => {
                                return (
                                    <>
                                        <DataSetcategorySection2 key={index} data={item} />
                                        <div className='w-full h-[0.1px] bg-black/20 my-14 rounded-l'></div>
                                    </>
                                )
                            })
                        
                        } */}

                        {/* {fetcheddatasetsarr.map((item, index) =>{ */}
                        {/* return( <DataSetcategorySection data={item} key={index} /> ) */}
                        {fetcheddatasetsarr?.length > 0 &&
                            <DataSetcategorySection data={fetcheddatasetsarr} />
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