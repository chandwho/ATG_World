import React from 'react'
import logo from '../assets/logo.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {GoTriangleDown} from 'react-icons/go'


export default function Navbar(props) {

    function handleModal(){

    }
  return (
    <div className='fixed top-0 z-40 w-full bg-white flex flex-col md:flex-row justify-between items-center gap-5 px-10 py-3'>
        <img src={logo} alt="logo" className='cursor-pointer object-contain h-4 md:h-6'/>
        <div className='flex items-center bg-gray-200 rounded-full h-8 md:h-10 w-[100%] sm:w-[50%] lg:w-[30%] pl-5 gap-2 md:gap-5'>
            <AiOutlineSearch className='text-2xl text-gray-700'/>
            <input type="text" 
            placeholder='Search for your favorite groups in ATG'
            className='bg-gray-200 rounded-r-full placeholder-gray-700 text-xs md:text-sm h-full w-full'
            />
        </div>
        <div className='flex items-center text-sm'>
            <p>Create Account.</p>
            <button
                className='font-semibold text-blue-700 mx-1'
                onClick={props.handleModal}
                >
                {"It's free!"}
            </button>
            <GoTriangleDown/>
        </div>
        
    </div>
  )
}
