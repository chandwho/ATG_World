import React from 'react'
import {BsShareFill} from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'

export default function TopPostItem(props) {
  return (
    <div className='border shadow-lg sm:shadow-none'>
        <img src={props.img} alt="Image" 
        className='w-full'
        />
        <div className='p-5 flex flex-col gap-3'>
          <h4 className='font-semibold'>{props.type}</h4>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-sm md:text-lg w-[70%]'>{props.heading}</h3>
            <button className='font-bold text-2xl mt-[-50px]'>...</button>
          </div>
          <p className='text-xs md:text-sm mb-5'>{props.content}</p>
          <div className='flex justify-between'>
              <div className='flex gap-2 md:gap-5 items-center'>
                <img src={props.posterImg} alt="" />
                <p className='font-semibold text-sm md:text-[16px]'>{props.posterName}</p>
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
