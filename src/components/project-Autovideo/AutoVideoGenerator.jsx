import React from 'react'
import { Link } from 'react-router-dom'

function AutoVideoGenerator() {
  return (
    <div className='dark:bg-gray-800'>
    <div className="mx-auto w-full max-w-7xl py-20">
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 xl:px-20 space-y-20'>
        <div className='flex flex-col p-2 sm:p-10 rounded-lg custom-shadow space-y-5 dark:bg-gray-600'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-3xl text-center sm:text-4xl md:text-5xl xl:text-7xl text-orange-700 dark:text-[#ffb703] font-bold'>Auto-Video Generator</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\videoGen.jpg" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl dark:text-white'>Technologies - Python</p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>This project is a sophisticated video generation tool designed to automate the process of creating professional-quality videos. It allows users to specify key parameters such as topics, video orientation, language, and maximum video duration. The program then fetches relevant video clips from online APIs, merges them, and overlays a voiceover generated from a script provided by the user. The script can be in various languages, including Hindi, making this tool versatile and adaptable to different content needs. The automation aspect not only saves time but also eliminates the need for expensive software, making it an accessible solution for content creators.
            </p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>
              This project was born out of a need to create a video with voiceovers for a college assignment. After researching various online platforms, I found that most required payment for the services I needed. This led to the idea of developing a program that could automatically create videos, complete with voiceovers, without any additional cost. The development of this tool involved significant research and learning, allowing me to explore various technologies and implement them into a functional, user-friendly application.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='space-y-5'>
            <p className='text-lg md:text-2xl dark:text-white'>Video Script</p>
            <div>
              <img className='rounded-lg custom-shadow' src="../src\assets\videoGen-2.png" alt="" />
            </div>
            <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
            <p className='text-lg md:text-2xl dark:text-white'>Generated Video</p>
            <div>
              <img className='rounded-lg custom-shadow' src="../src\assets\videoGen3.png" alt="" />
            </div>

          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='flex text-sm flex-col items-center space-y-2 sm:flex-row sm:text-lg sm:px-10 xl:text-2xl justify-between xl:px-32 text-orange-700 dark:text-[#ffb703]'>
            <div><Link to="https://github.com/Aryan-1212/AutoVideoGenerator.git" target='_blank' className='relative link-underline dark:link-underline-dark'>Github</Link></div>
            <div><Link to="https://www.linkedin.com/posts/aryan-parvani-1a1b0b250_techinnovation-videoediting-pythonprogramming-activity-7213423117770117120-BF91?utm_source=share&utm_medium=member_desktop" target='_blank' className='relative link-underline dark:link-underline-dark'>Linkedin</Link></div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default AutoVideoGenerator