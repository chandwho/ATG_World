import React from 'react'
import car from '../assets/car.png'
import ronal from '../assets/ronal.png'
import {AiOutlineCalendar} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'
import {BsShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
export default function MeetupPost() {
  return (
    <div className='border shadow-lg sm:shadow-none'>
        <img src={car} alt="Image" 
            className='w-full'
        />
        <div className='p-5'>
            <h4 className='font-semibold'>🗓️ Meetup</h4>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-sm md:text-lg w-[70%]'>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                <button className='font-bold text-2xl pb-5'>...</button>
            </div>
            <div className='flex gap-8'>
                <div className='flex gap-2 items-center'>
                    <AiOutlineCalendar />
                    <p className='text-sm'>Fri, 12 Oct, 2018</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <MdLocationPin />
                    <p className='text-sm'>Ahmedabad, India</p>
                </div>
            </div>
            <button className='w-full text-red-700 font-semibold text-sm border rounded-lg p-2 my-5 hover:bg-gray-200'>Visit Website</button>
            <div className='flex justify-between'>
                <div className='flex gap-2 md:gap-5 items-center'>
                    <img src={ronal} alt="Image" />
                    <p className='font-semibold text-sm md:text-[16px]'>Ronal Jones</p>
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
    </div>
  )
}
