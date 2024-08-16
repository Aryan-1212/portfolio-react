import React from 'react'
import { Link } from 'react-router-dom'

function Jarvis() {
  return (
    <div className='dark:bg-gray-800'>
    <div className="mx-auto w-full max-w-7xl py-20">
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 xl:px-20 space-y-20'>
        <div className='flex flex-col p-2 sm:p-10 rounded-lg custom-shadow space-y-5 dark:bg-gray-600'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-orange-700 dark:text-[#ffb703] font-bold'>Jarvis AI</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\jarvis.jpg" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl dark:text-white'>Technologies - Python</p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>JARVIS AI is a Python-based voice-activated assistant designed to perform a wide range of tasks using intuitive voice commands. It leverages various APIs and libraries, including openai-api for content generation, weather-api for real-time weather updates, news-api for delivering the latest news, and the Speech Recognition library for processing voice input. Additionally, the 'pywin32' library enables JARVIS AI to vocalize responses, creating an interactive user experience.
            </p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>
            With JARVIS AI, users can effortlessly open specified websites like Google, Wikipedia, and Stack Overflow, access current time information, create new Python files, and retrieve details from Wikipedia. It can also deliver breaking news, provide weather updates, search Google, and play specific YouTube videos. For communication, JARVIS AI can send emails and WhatsApp messages. Furthermore, it can generate text content such as programs, essays, or descriptions and even shut down the PC, making it a versatile and valuable tool for both personal and professional use.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='space-y-2'>
            <p className='text-sm md:text-2xl dark:text-white'>Watch Demo Video Here</p>
            <div className='text-lg md:text-2xl text-orange-700 dark:text-[#ffb703]'><Link to="https://youtu.be/MBAcF-OAueA?si=FQ4u8fVkMuNZkFvM" target='_blank' className='relative link-underline dark:link-underline-dark'>Demo Video</Link></div>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='flex text-sm flex-col items-center space-y-2 sm:flex-row sm:text-lg sm:px-10 xl:text-2xl justify-between xl:px-32 text-orange-700 dark:text-[#ffb703]'>
            <div><Link to="https://github.com/Aryan-1212/JARVIS_AI.git" target='_blank' className='relative link-underline dark:link-underline-dark'>Github</Link></div>
            <div><Link to="https://www.linkedin.com/posts/aryan-parvani-1a1b0b250_ai-python-voiceassistant-activity-7206581071369428994-4VNO?utm_source=share&utm_medium=member_desktop" target='_blank' className='relative link-underline dark:link-underline-dark'>Linkedin</Link></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Jarvis