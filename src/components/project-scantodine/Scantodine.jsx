import React from 'react'
import { Link } from 'react-router-dom'

function Scantodine() {
  return (
    <div className='dark:bg-gray-800'>
    <div className="mx-auto w-full max-w-7xl py-20">
      <div className='px-5 sm:px-10 md:px-16 lg:px-20 xl:px-20 space-y-20'> {/* Change */}
        <div className='flex flex-col p-2 sm:p-10 rounded-lg custom-shadow space-y-5 dark:bg-gray-600'>{/* Change */}
          <div className='flex space-y-4 flex-col py-5 items-center'>
            <div><p className='text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-orange-700 dark:text-[#ffb703] font-bold'>ScanToDine</p></div>{/* Change */}
          </div>
          <div>
            <img className='rounded-lg shadow-2xl' src="../src\assets\scantodine-ss.png" alt="" />
          </div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl dark:text-white'>Technologies - HTML, CSS, JavaScript, Php</p>{/* Change */}
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>"ScanToDine" is an innovative and user-friendly digital food ordering system that seamlessly connects restaurants with their customers through the power of QR code technology. This platform empowers restaurant owners to create and manage their personalized digital menus effortlessly, including prices and inventory. Customers, on the other hand, can conveniently scan QR codes at tables, access the restaurant's menu, and place orders from their smartphones. They also enjoy customization options for ingredients and spice levels, real-time order status updates, and the ease of generating and paying digital bills online. The platform equips chefs with the ability to manage incoming food orders, update order statuses, and maintain efficient kitchen operations. Through effective integration, the "ScanToDine" system enhances communication, expedites order preparation, and guarantees a smooth dining experience. Furthermore, the system offers a robust feedback mechanism for customers to share their dining experiences and for restaurant owners to track analytics and reporting, ensuring an optimal and delightful dining journey for all parties involved.</p>{/* Change */}
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='space-y-2'>
            <p className='text-lg md:text-2xl dark:text-white'>My Role in the Project</p>{/* Change */}
            <p className='text-sm md:text-lg text-gray-700 dark:text-gray-50'>As the project leader for "ScanToDine," I oversaw the entire development process, effectively managing and distributing tasks among team members. I ensured that each team member's contributions were well-coordinated and aligned with the project goals. In addition to my leadership role, I was actively involved in back-end development, database integration, and contributed to front-end design, ensuring a seamless and functional system.</p>{/* Change */}
          </div>
          <div className='w-full h-0.5 bg-orange-700 dark:bg-[#ffb703]'></div>
          <div className='flex text-sm flex-col items-center space-y-2 sm:flex-row sm:text-lg sm:px-10 xl:text-2xl justify-between xl:px-32 text-orange-700 dark:text-[#ffb703]'>{/* Change */}
            <div><Link to="https://github.com/Aryan-1212/scanToDine.git" target='_blank' className='relative link-underline dark:link-underline-dark'>Github</Link></div>
            <div><Link to="https://drive.google.com/file/d/17KlGb0qamUpFqFMc9bku-jeQ2R7EvXq-/view?usp=drive_link" target='_blank' className='relative link-underline dark:link-underline-dark'>Documentation</Link></div>
            <div><Link to="https://www.linkedin.com/posts/aryan-parvani-1a1b0b250_scantodine-innovation-digitaldining-activity-7169968335160295424-2BMx?utm_source=share&utm_medium=member_desktop" target='_blank' className='relative link-underline dark:link-underline-dark'>Linkedin</Link></div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Scantodine