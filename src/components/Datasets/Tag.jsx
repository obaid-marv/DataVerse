import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Tag = ({title, onclick, active }) => {
    const [activeStatus, setActiveStatus] = useState(false);

    const clickAction = () =>{
        setActiveStatus(!activeStatus);
        onclick({activeStatus:true, title});
    }

    const cancelAction = () =>{
        setActiveStatus(false);
        onclick({activeStatus:false, title})
    }


    useEffect(() =>{
        setActiveStatus(active);
    }, [])
    return (
        <div onClick={clickAction} className={`border flex items-center gap-2 cursor-pointer border-black/20 hover:border-black rounded-3xl py-2 px-4`}>
            <p>{title}</p>
            {activeStatus && <p className='hover:bg-black/20 p-1 hover:rounded-full' onClick={cancelAction}><IoCloseOutline /></p>}
        </div>
    )
}

export default Tag
