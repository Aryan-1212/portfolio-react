import React from 'react'
import { Link } from 'react-router-dom'

function Microsoft() {
  return (
    <div className="mx-auto w-full max-w-7xl my-20">
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 xl:px-20 space-y-20'>
        <div className='flex flex-col p-2 sm:p-10 rounded-lg custom-shadow space-y-5'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-3xl text-center sm:text-4xl md:text-5xl xl:text-7xl text-orange-700 font-bold'>Microsoft Clone</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\microsoft.png" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl'>Technologies - HTML, CSS(Tailwind)</p>
            <p className='text-sm md:text-lg text-gray-700'>A responsive clone of Microsoft's website using TailwindCSS to deepen my understanding of responsive design principles and modern CSS frameworks. This project served as a comprehensive learning experience, allowing me to explore the intricacies of creating adaptive user interfaces that work seamlessly across various devices and screen sizes.

            </p>
            <p className='text-sm md:text-lg text-gray-700'>
              Through this project, I honed my skills in replicating complex layouts, paying close attention to the details that make the Microsoft website both visually appealing and highly functional. TailwindCSS played a crucial role in this process, providing a utility-first approach that streamlined the development workflow. By utilizing Tailwind's extensive set of pre-built classes, I was able to efficiently manage spacing, typography, colors, and other design elements, ensuring that the clone closely mirrored the original site's look and feel.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700'></div>
          <div className='space-y-5'>
            <p className='text-lg md:text-3xl text-center font-bold'>More Visuals</p>
            <div className='space-y-10'>
              <div>
                <img className='rounded-lg custom-shadow' src="../src\assets\microsoft-2.png" alt="" />
              </div>
              <div>
                <img className='rounded-lg custom-shadow' src="../src\assets\microsoft-3.png" alt="" />
              </div>
              <div className='flex justify-around'>
                <div>
                  <img className='rounded-lg h-[40vh] sm:h-[70vh] custom-shadow' src="../src\assets\microsoft-5.png" alt="" />
                </div>
                <div>
                  <img className='rounded-lg h-[40vh] sm:h-[70vh] custom-shadow' src="../src\assets\microsoft-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-0.5 bg-orange-700'></div>
          <div className='flex text-lg sm:text-2xl justify-center sm:px-32 text-orange-700'>
            <div><Link to="https://github.com/Aryan-1212/microsoft-clone.git" target='_blank' className='relative link-underline'>Github</Link></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Microsoft