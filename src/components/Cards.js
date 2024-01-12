import React from 'react'

const Cards = () => {
    return (
        <div className='relative'>
            <div class="max-w-sm bg-white rounded-lg dark:bg-[#21225F]  ">
                <a href="/">
                    <img class="rounded-t-lg" src="https://media.licdn.com/dms/image/C4E03AQHTUxUkHor73w/profile-displayphoto-shrink_800_800/0/1653453612907?e=2147483647&v=beta&t=cjefGABWy--A3pQYtOhMQ0qvHeA6Fd12fOTEGg9UZ_I" alt="" />
                </a>
                <div class="p-5">
                    <a href="/">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#08A9E6] bg-[#0E113D] rounded-lg hover:bg-[#08A9E6] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Cards