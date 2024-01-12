import React from 'react'
import banner from '../assets/banner-main.webp'
import shape1 from '../assets/os-shape1.webp'
import shape2 from '../assets/os-shape2.webp'
import shape3 from '../assets/os-shape3.webp'
const Home = () => {
    return (
        <div className='w-full h-screen relative'>
            <div className='absolute right-16 top-10 z-10'>
                <img src={banner} alt="" srcset="" className='w-' />
            </div>
            <div className='absolute top-20 left-10 -z-0'>
                <img src={shape1} alt="" srcset="" />
            </div>
            <div className='absolute left-2/4 top-20 -z-0'>
                <img src={shape2} alt="" srcset="" className='animate-pulse'/>
            </div>
            <div className='absolute right-0 top-44 -z-0'>
                <img src={shape3} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Home