import React from 'react'
import bannerSm from '../assets/banner-sm.png'
import banner from '../assets/banner.png'

export default function Banner() {
  return (
    <div className='relative w-full object-contain mt-32 md:mt-16'>
        <div className=' absolute bg-black/50 w-full h-full'></div>
        {/* <img src={banner}
                className='object-contain'
        /> */}
        <picture className='w-full'>
            <source media="(min-width: 640px)" srcSet={banner}/>
            <img src={bannerSm} className='w-full'/>
        </picture>
        <div className='absolute top-[60%] left-[5%] md:left-[15%] text-white'>
            <h2 className='font-bold text-xl md:text-3xl'>Computer Engineering</h2>
            <p className='text-xs md:text-sm'>142,765 Computer Engineers follow this</p>
        </div>
    </div>
  )
}
