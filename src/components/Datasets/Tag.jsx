import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Tag = ({title, onclick, active }) => {
    return (
        <div onClick={onclick} className={`border flex items-center gap-2 cursor-pointer border-black/20 hover:border-black rounded-3xl py-2 px-4`}>
            <p>{title}</p>
            {active && <p className='hover:bg-black hover:rounded-full'><IoCloseOutline /></p>}
        </div>
    )
}

export default Tag
