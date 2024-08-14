import React from 'react'
import { Link } from 'react-router-dom'

function AutoVideoGenerator() {
  return (
    <div className="mx-auto w-full max-w-7xl my-20">
      <div className='px-20 space-y-20'>
        <div className='flex flex-col p-10 rounded-lg custom-shadow space-y-5'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-7xl text-orange-700 font-bold'>Auto-Video Generator</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\videoGen.jpg" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-2xl'>Technologies - Python</p>
            <p className='text-lg text-gray-700'>This project is a sophisticated video generation tool designed to automate the process of creating professional-quality videos. It allows users to specify key parameters such as topics, video orientation, language, and maximum video duration. The program then fetches relevant video clips from online APIs, merges them, and overlays a voiceover generated from a script provided by the user. The script can be in various languages, including Hindi, making this tool versatile and adaptable to different content needs. The automation aspect not only saves time but also eliminates the need for expensive software, making it an accessible solution for content creators.
            </p>
            <p className='text-lg text-gray-700'>
              This project was born out of a need to create a video with voiceovers for a college assignment. After researching various online platforms, I found that most required payment for the services I needed. This led to the idea of developing a program that could automatically create videos, complete with voiceovers, without any additional cost. The development of this tool involved significant research and learning, allowing me to explore various technologies and implement them into a functional, user-friendly application.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700'></div>
          <div className='space-y-5'>
            <p className='text-2xl'>Video Script</p>
            <div>
              <img className='rounded-lg custom-shadow' src="../src\assets\videoGen-2.png" alt="" />
            </div>
            <div className='w-full h-0.5 bg-orange-700'></div>
            <p className='text-2xl'>Generated Video</p>
            <div>
              <img className='rounded-lg custom-shadow' src="../src\assets\videoGen3.png" alt="" />
            </div>

          </div>
          <div className='w-full h-0.5 bg-orange-700'></div>
          <div className='flex text-2xl justify-between px-32 text-orange-700'>
            <div><Link to="https://github.com/Aryan-1212/AutoVideoGenerator.git" target='_blank' className='relative link-underline'>Github</Link></div>
            <div><Link to="https://www.linkedin.com/posts/aryan-parvani-1a1b0b250_techinnovation-videoediting-pythonprogramming-activity-7213423117770117120-BF91?utm_source=share&utm_medium=member_desktop" target='_blank' className='relative link-underline'>Linkedin</Link></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AutoVideoGenerator