import React from 'react'
import {GoTriangleDown} from 'react-icons/go'
import {MdGroupAdd} from 'react-icons/md'

export default function PostNav() {
  return (
    <div className='flex flex-col items-center lg:flex-row md:justify-between md:items md:mx-32 md:mt-10 text-sm border-b border-gray-4'>
        <div className='flex gap-5 pt-[23px]'>
            <p className='cursor-pointer md:pb-4 font-bold text-black border-b border-black'>All Posts(32)</p>
            <p tabIndex={0} className='md:pb-4 cursor-pointer text-gray-500 focus:text-black focus:font-bold focus:border-b border-black'>Article</p>
            <p tabIndex={0} className='md:pb-4 cursor-pointer text-gray-500 focus:text-black focus:font-bold focus:border-b border-black'>Event</p>
            <p tabIndex={0} className='md:pb-4 cursor-pointer text-gray-500 focus:text-black focus:font-bold focus:border-b border-black'>Education</p>
            <p tabIndex={0} className='md:pb-4 cursor-pointer text-gray-500 focus:text-black focus:font-bold focus:border-b border-black'>Job</p>
        </div>
        <div className='flex gap-5 items-center p-3'>
            <button className='flex p-[6px] md:p-2 text-xs md:text-sm bg-gray-300 hover:bg-gray-400  rounded-md items-center gap-2'>
                Write a Post
                <GoTriangleDown/>
            </button>
            <button className='flex p-[6px] md:p-2 text-xs md:text-sm bg-blue-700 text-white hover:bg-blue-800 rounded-md items-center gap-2'>
                <MdGroupAdd />
                Join Group
            </button>
        </div>
    </div>
  )
}
