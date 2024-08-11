import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div className="mx-auto w-full max-w-7xl my-20">
      <div className='px-40 space-y-20'>
      <div className='flex flex-col p-10 rounded-lg custom-shadow'>
              <div>
                <img className='rounded-lg shadow-2xl' src="../src\assets\scantodine-ss.png" alt="" />
              </div>
              <div className='flex space-y-4 flex-col py-5'>
                <div><p className='text-5xl text-orange-700 font-bold'>ScanToDine</p></div>
                <p className='text-2xl text-gray-700'>Technologies - js</p>
                <p className='text-lg text-gray-700'>Description - temp</p>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Project