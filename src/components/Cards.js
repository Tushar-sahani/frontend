import React from 'react'
import KIC from '../assets/KIC.jpeg'
import {Link} from 'react-router-dom'
const Cards = () => {
    return (
        <div className='relative p-10 top-28'>
            <h1 className='text-white bg-[#0E113D] text-center text-4xl font-bold'>Department</h1>
            <div className=" flex justify-between p-6 mt-8">
                <div class="max-w-sm bg-white rounded-lg dark:bg-[#21225F] overflow-hidden ">
                    <div className='overflow-clip'>
                        <Link to="/KEC" >
                            <img class="rounded-t-lg " className='transition duration-300 ease-in-out hover:scale-110 ' src={KIC} alt="" />
                        </Link>
                    </div>
                    <div class="p-5">
                        <a href="/">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><span className='hover:text-[#08A9E6]'>Innovation Center</span></h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none transition duration-300 ease-in-out">
                            Read more
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg dark:bg-[#21225F] overflow-hidden ">
                    <div className='overflow-clip'>
                        <a href="/" >
                            <img class="rounded-t-lg" className='transition duration-300 ease-in-out hover:scale-110' src={KIC} alt="" />
                        </a>
                    </div>
                    <div class="p-5">
                        <a href="/">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><span className='hover:text-[#08A9E6]'>Center of Excellence</span></h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none transition duration-300 ease-in-out">
                            Read more
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-white rounded-lg dark:bg-[#21225F] overflow-hidden ">
                    <div className='overflow-clip'>
                        <a href="/" >
                            <img class="rounded-t-lg" className='transition duration-300 ease-in-out hover:scale-110' src={KIC} alt="" />
                        </a>
                    </div>
                    <div class="p-5">
                        <a href="/">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><span className='hover:text-[#08A9E6]'>TBI</span></h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none transition duration-300 ease-in-out">
                            Read more
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards