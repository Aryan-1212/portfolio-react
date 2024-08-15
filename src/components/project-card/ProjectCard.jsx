import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard({title, to, tech, desc, src}) {
    return (
            <div className='flex flex-col p-3 sm:p-10 rounded-lg custom-shadow'>
              <div>
                <Link to={to} onClick={()=>window.scrollTo(0,0)} ><img className='rounded-lg shadow-2xl duration-500 hover:p-2' src={src} alt="" /></Link>
              </div>
              <div className='flex space-y-4 flex-col py-5'>
                <div><Link to={to} onClick={()=>window.scrollTo(0,0)} className='text-2xl sm:text-3xl md:text-5xl text-orange-700 font-bold'>{title}</Link></div>
                <p className='text-lg sm:text-xl md:text-2xl text-gray-700'>Technologies - {tech}</p>
                <p className='text-sm sm:text-lg text-gray-700'>Description - {desc}</p>
              </div>
            </div>
      )
}

export default ProjectCard