import React from 'react'
import { Link } from 'react-router-dom'

function Youtube() {
  return (
    <div className='dark:bg-gray-800'>
    <div className="mx-auto w-full max-w-7xl py-20">
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 xl:px-20 space-y-20'>
        <div className='flex flex-col p-2 sm:p-10 rounded-lg custom-shadow space-y-5 dark:bg-gray-600'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-3xl text-center sm:text-4xl md:text-5xl xl:text-7xl text-orange-700 dark:text-[#ffb703] font-bold'>Youtube Clone</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\youtube.png" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl dark:text-white'>Technologies - HTML, CSS</p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>A YouTube clone using HTML and CSS, showcasing my front-end development skills and my ability to replicate complex, real-world interfaces. This project allowed me to delve deeply into the structure and design of one of the most popular websites, focusing on recreating its layout and functionality with precision.

            </p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>
            Through this project, I concentrated on crafting a clean, user-friendly interface that mirrors the essential features of YouTube. This involved building a responsive design that adapts seamlessly to various screen sizes, ensuring an optimal viewing experience on both desktop and mobile devices. By carefully structuring the HTML and applying CSS styling techniques, I was able to replicate YouTube's dynamic layout, including its header, navigation bar, video grid, and sidebar.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='space-y-5'>
            <p className='text-lg md:text-3xl text-center font-bold dark:text-white'>More Visuals</p>
            <div className='space-y-10'>
              <div>
                <img className='rounded-lg custom-shadow' src="../src\assets\youtube-1.png" alt="" />
              </div>
              <div className='flex justify-around'>
                <div>
                  <img className='rounded-lg h-[40vh] sm:h-[70vh] custom-shadow' src="../src\assets\youtube-2.png" alt="" />
                </div>
                <div>
                  <img className='rounded-lg h-[40vh] sm:h-[70vh] custom-shadow' src="../src\assets\youtube-3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='flex text-lg sm:text-2xl justify-center sm:px-32 text-orange-700 dark:text-[#ffb703]'>
            <div><Link to="https://github.com/Aryan-1212/youtube-clone.git" target='_blank' className='relative link-underline dark:link-underline-dark'>Github</Link></div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Youtube