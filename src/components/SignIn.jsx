import React from 'react'
import {MdCancel} from 'react-icons/md'
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook2} from 'react-icons/im'
import modalImg from '../assets/modal-image.png'

export default function SignIn(props) {
  return (
    props.open?
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-40'>
        <div className='absolute top-1/4 w-full sm:w-[60%] lg:w-[50%] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 flex flex-col items-end gap-3'>
            <MdCancel className='text-white text-xl cursor-pointer'
            onClick={props.handleModal}
            />
            <div className='bg-white rounded-lg w-full'>
                <div className='hidden md:block p-3 bg-green-300 text-xs text-green-700 px-5 rounded-tl-lg rounded-tr-lg text-center'>
                {"Let's learn, share & inspire each other with our passion for computer engineering. Sign in now 🤘🏼"}
                </div>
                <div className='flex p-5'>
                    <div className='w-full lg:w-1/2 flex flex-col gap-5'>
                        <h3 className='text-lg md:text-xl font-bold'>Sign In</h3>
                        <form className='w-full text-sm'>
                            <input 
                                className='border p-2 bg-gray-300 text-gray-800 placeholder-gray-700 w-full rounded-t-md'
                                type="email" placeholder='Email'/>
                            <input 
                                className='border p-2 bg-gray-300 text-gray-800 placeholder-gray-700 w-full rounded-b-md'
                                type="password" placeholder='Password'/>

                            <div className='flex gap-5 justify-between w-full'>
                                <button className='rounded-full w-1/2 lg:w-full p-2 bg-blue-700 hover:bg-blue-800 text-white mt-3'>Sign In</button>
                                <button
                                    className='lg:hidden underline mx-1'
                                    onClick={props.handleSignUpModal}
                                    >
                                    or, Create Account
                                </button>
                            </div>    
                        </form>
                        <button className='w-full border p-2 flex justify-center gap-2 items-center text-sm rounded'><FcGoogle/> Sign up with Facebook</button>
                        <button className='w-full border p-2 flex justify-center gap-2 items-center text-sm rounded'><ImFacebook2 className='text-blue-700'/> Sign up with Google</button>
                    </div>
                    <div className='hidden w-1/2 text-xs lg:flex flex-col items-end'>
                        <div className='flex items-center'>
                            <p>Don’t have an account yet?</p>
                            <button
                                className='font-semibold text-blue-700 mx-1'
                                onClick={props.handleSignUpModal}
                                >
                                Create new for free!
                            </button>
                        </div>
                        <img src={modalImg} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    :
    ""
  )
}
