import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='dark:bg-gray-800'>
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black dark:text-white rounded-lg sm:mx-16 mx-2 sm:py-16 flex items-center justify-center lg:block">
                <div className="relative z-10 max-w-screen-xl px-4 pb-0 pt-10 lg:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl lg:mt-1 mt-80 space-y-8 text-center lg:text-right lg:ml-auto">
                        <h2 className="text-4xl font-bold lg:text-5xl">
                            ARYAN PARVANI
                            <span className="hidden sm:block text-4xl text-orange-700 dark:text-[#ffb703]">I'm a developer.</span>
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-10 sm:pt-1 pt-12 h-full flex items-start justify-center lg:block">
                    <img className="w-96 mix-blend-color-burn dark:hidden" src="src\assets\index-logo2.jpg" alt="image1" />
                    <img className="w-96 hidden dark:block" src="src\assets\dark-index.png" alt="image1" />
                </div>
            </aside>

            <div className="grid place-items-center px-10 sm:px-0">
                <img className="w-96 mix-blend-color-burn dark:hidden" src="src\assets\index-logo1.png" alt="image2" />
                <img className="w-96 hidden dark:block" src="src\assets\dark-index-logo1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl dark:text-white sm:text-5xl -mt-10 py-10 font-medium">It's a portfolio website.</h1>

            <div className='flex flex-col justify-center items-center my-5 sm:my-10 lg:my-20 space-y-5 sm:mx-20 lg:flex-row lg:space-x-5 lg:mx-2'>
                <img className='md:w-10/12 lg:w-[50%] lg:rounded-lg lg:shadow-2xl' src="src/assets/scantodine.webp" alt="" />
                <div className='flex flex-col justify-center items-center space-y-5 text-center px-5 sm:px-0'>
                    {/* <h2 className='text-2xl font-medium sm:text-5xl'>ScanToDine College Project</h2> */}
                    <Link to="projectlayout" className='text-2xl relative font-medium sm:text-5xl text-orange-700 link-underline dark:link-underline-dark dark:text-[#ffb703]'>ScanToDine College Project</Link>
                    <p className='text-gray-700 sm:text-xl dark:text-gray-300'>Showcased our college project 'ScanToDine' at LJ Innovation Village. Had amazing experience with my teammates and guides.</p>
                </div>
            </div>

            <div className='flex items-center justify-center py-10'>
                <Link to="projectlayout" onClick={()=>window.scrollTo(0,0)} className='text-2xl text-orange-700 dark:link-underline-dark dark:text-[#ffb703] relative link-underline'>visit more projects...</Link>
            </div>
        </div>
        </div>
    );
}