import React from 'react'
import joseph from '../assets/joseph.png'
import {RiSuitcaseLine} from 'react-icons/ri'
import {MdLocationPin} from 'react-icons/md'
import {BsShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'

export default function JobPost() {
  return (
    <div className='p-5 border shadow-lg sm:shadow-none'>
        <h4 className='font-semibold'>💼️ Job</h4>
        <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-lg w-[70%]'>Software Developer</h3>
            <button className='font-bold text-2xl pb-5'>...</button>
        </div>
        <div className='flex gap-8'>
            <div className='flex gap-2 items-center'>
                <RiSuitcaseLine />
                <p className='text-sm'>Innovaccer Analytics Private Ltd.</p>
            </div>
            <div className='flex gap-2 items-center'>
                <MdLocationPin />
                <p className='text-sm'>Noida, India</p>
            </div>
        </div>
        <button className='w-full text-green-700 font-semibold text-sm border rounded-lg p-2 my-5 hover:bg-gray-200'>Apply on Timesjobs</button>
        <div className='flex justify-between'>
            <div className='flex gap-2 md:gap-5 items-center'>
                <img src={joseph} alt="Image" />
                <p className='font-semibold text-sm md:text-[16px]'>Joseph Gray</p>
            </div>
            <div className='flex items-center'>
                <AiOutlineEye/> 
                <p className='text-sm mr-3 md:mr-7 md:ml-2'>1.4k views</p>
                <button className='bg-gray-300 rounded w-10 h-8 flex justify-center items-center'>
                    <BsShareFill />
                </button>
            </div>
        </div>
    </div>
  )
}
