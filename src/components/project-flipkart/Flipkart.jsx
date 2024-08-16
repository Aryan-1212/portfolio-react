import React from 'react'
import { Link } from 'react-router-dom'

function Flipkart() {
  return (
    <div className='dark:bg-gray-800'>
    <div className="mx-auto w-full max-w-7xl py-20">
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 xl:px-20 space-y-20'>
        <div className='flex flex-col p-2 sm:p-10 rounded-lg custom-shadow space-y-5 dark:bg-gray-600'>
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-orange-700 dark:text-[#ffb703] font-bold'>Flipkart Clone</p></div>
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\flipkart.png" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl dark:text-white'>Technologies - HTML, CSS, JavaScript</p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>I developed a Flipkart clone using HTML and CSS, showcasing my expertise in front-end development and my ability to recreate intricate e-commerce layouts. This project provided an opportunity to dive into the complexities of designing a functional and visually appealing online store, with a focus on replicating the detailed structure and features of the Flipkart website.
            </p>
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>
              Throughout the project, I focused on accurately replicating the various components of an e-commerce platform, such as the product listings, navigation menus, and shopping cart interface. The challenge was to maintain the look and feel of the original site while ensuring that the layout remained responsive and user-friendly across different devices and screen sizes.
            </p>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='space-y-5'>
            <p className='text-lg md:text-3xl text-center font-bold dark:text-white'>More Visuals</p>
            <div className='space-y-10'>
              <div>
                <img className='rounded-lg custom-shadow' src="../src\assets\flipkart-2.png" alt="" />
              </div>
              <div className='flex justify-around'>
                <div>
                  <img className='rounded-lg h-[40vh] sm:h-[70vh] custom-shadow' src="../src\assets\flipkart-3.png" alt="" />
                </div>
                <div>
                  <img className='rounded-lg h-[40vh] sm:h-[70vh] custom-shadow' src="../src\assets\flipkart-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='flex text-lg sm:text-2xl justify-center sm:px-32 text-orange-700 dark:text-[#ffb703]'>
            <div><Link to="https://github.com/Aryan-1212/flipkart-clone.git" target='_blank' className='relative link-underline dark:link-underline-dark'>Github</Link></div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Flipkart