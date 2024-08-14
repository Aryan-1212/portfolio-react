import React from 'react'
import { Link } from 'react-router-dom'

function Jarvis() {
  return (
    <div className="mx-auto w-full max-w-7xl my-20">
      <div className='px-20 space-y-20'>
        <div className='flex flex-col p-10 rounded-lg custom-shadow space-y-5'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-7xl text-orange-700 font-bold'>Jarvis AI</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\jarvis.jpg" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-2xl'>Technologies - Python</p>
            <p className='text-lg text-gray-700'>JARVIS AI is a Python-based voice-activated assistant designed to perform a wide range of tasks using intuitive voice commands. It leverages various APIs and libraries, including openai-api for content generation, weather-api for real-time weather updates, news-api for delivering the latest news, and the Speech Recognition library for processing voice input. Additionally, the 'pywin32' library enables JARVIS AI to vocalize responses, creating an interactive user experience.
            </p>
            <p className='text-lg text-gray-700'>
            With JARVIS AI, users can effortlessly open specified websites like Google, Wikipedia, and Stack Overflow, access current time information, create new Python files, and retrieve details from Wikipedia. It can also deliver breaking news, provide weather updates, search Google, and play specific YouTube videos. For communication, JARVIS AI can send emails and WhatsApp messages. Furthermore, it can generate text content such as programs, essays, or descriptions and even shut down the PC, making it a versatile and valuable tool for both personal and professional use.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700'></div>
          <div className='space-y-2'>
            <p className='text-2xl'>Watch Demo Video Here</p>
            <div className='text-2xl text-orange-700'><Link to="https://youtu.be/MBAcF-OAueA?si=FQ4u8fVkMuNZkFvM" target='_blank' className='relative link-underline'>Demo Video</Link></div>
          </div>
          <div className='w-full h-0.5 bg-orange-700'></div>
          <div className='flex text-2xl justify-between px-32 text-orange-700'>
            <div><Link to="https://github.com/Aryan-1212/JARVIS_AI.git" target='_blank' className='relative link-underline'>Github</Link></div>
            <div><Link to="https://www.linkedin.com/posts/aryan-parvani-1a1b0b250_ai-python-voiceassistant-activity-7206581071369428994-4VNO?utm_source=share&utm_medium=member_desktop" target='_blank' className='relative link-underline'>Linkedin</Link></div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Jarvis