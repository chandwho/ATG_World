import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import {HiPencil} from 'react-icons/hi'
import {CgDanger} from 'react-icons/cg'

export default function LocationInput() {
  return (
    <div className='w-[30%] hidden lg:flex flex-col p-10'>
        <div className='flex gap-2 items-center border-b mb-10'>
            <MdLocationPin />
            <input type="text"
                placeholder='Enter your location' 
                className='w-[80%] text-sm p-1 outline-none' 
            />
            <HiPencil className='text-xl'/>      
        </div>
        <div className='flex gap-2 text-gray-500 items-start'>
            <CgDanger className='w-10'/>
            <p className='text-xs'>Your location will help us serve better and extend a personalised experience.</p>
        </div>
    </div>
  )
}


