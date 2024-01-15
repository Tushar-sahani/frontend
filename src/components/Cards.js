import React from 'react'
import KIC from '../assets/KIC.jpeg'
import { Link } from 'react-router-dom'
const Cards = () => {
    return (
        <div className='relative p-10 top-28'>
            <h1 className='text-white bg-[#0E113D] text-center text-4xl font-bold'>Department</h1>
            <div className=" flex justify-between p-6 mt-8">
                <div className="max-w-sm bg-white rounded-lg dark:bg-[#21225F] overflow-hidden ">
                    <div className='overflow-clip'>
                        <Link to="/KEC" >
                            <img className='rounded-t-lg transition duration-300 ease-in-out hover:scale-110 ' src={KIC} alt="Innovation Center" />
                        </Link>
                    </div>
                    <div className="p-5">
                        <Link to="/KEC">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><span className='hover:text-[#08A9E6]'>Innovation Center</span></h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/KEC" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none transition duration-300 ease-in-out">
                            Read more
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg dark:bg-[#21225F] overflow-hidden ">
                    <div className='overflow-clip'>
                        <Link to="/excellence" >
                            <img className='rounded-t-lg transition duration-300 ease-in-out hover:scale-110' src={KIC} alt="Center of Excellence" />
                        </Link>
                    </div>
                    <div className="p-5">
                        <Link to="/excellence">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><span className='hover:text-[#08A9E6]'>Center of Excellence</span></h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/excellence" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none transition duration-300 ease-in-out">
                            Read more
                        </Link>
                    </div>
                </div>
                <div className="max-w-sm bg-white rounded-lg dark:bg-[#21225F] overflow-hidden ">
                    <div className='overflow-clip'>
                        <Link to="/TBI" >
                            <img className='rounded-t-lg transition duration-300 ease-in-out hover:scale-110' src={KIC} alt="TBI" />
                        </Link>
                    </div>
                    <div className="p-5">
                        <Link to="/TBI">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white "><span className='hover:text-[#08A9E6]'>TBI</span></h5>
                        </Link>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <Link to="/TBI" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none transition duration-300 ease-in-out">
                            Read more
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards