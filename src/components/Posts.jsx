import React from 'react'
import PostNav from './PostNav'
import TopPostItem from './TopPostItem'
import forest from '../assets/forest.png'
import wood from '../assets/wood.png'
import sarthak from '../assets/sarthak.png'
import sarah from '../assets/sarah.png'
import LocationInput from './LocationInput'
import MeetupPost from './MeetupPost'
import JobPost from './JobPost'


export default function Posts() {
  return (
    <div>
        <PostNav/>
        <div className='flex sm:mx-20 md:mx-32 mt-5'>
            <div className='w-full lg:w-[70%] flex flex-col gap-5'>
                <TopPostItem
                    img={forest}
                    type='✍️ Article'
                    heading='What if famous brands had regular fonts? Meet RegulaBrands!'
                    content='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
                    posterImg={sarthak}
                    posterName='Sarthak Kamra'
                    views='1.4k views'
                />
                <TopPostItem
                    img={wood}
                    type='🔬️ Education'
                    heading='Tax Benefits for Investment under National Pension Scheme launched by Government'
                    content='I’ve worked in UX for the better part of a decade. From now on, I plan to rei…'
                    posterImg={sarah}
                    posterName='Sarah West'
                    views='1.4k views'
                />
                <MeetupPost/>
                <JobPost/>  
            </div>
            <LocationInput/>
        </div>
        

    </div>
  )
}
