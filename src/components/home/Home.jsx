import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            ARYAN PARVANI
                            <span className="hidden sm:block text-4xl">I'm a developer.</span>
                        </h2>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">This is my portfolio website.</h1>

            <div className='flex flex-col justify-center items-center my-5 sm:my-10 lg:my-20 space-y-5 sm:mx-20 lg:flex-row lg:space-x-5 lg:mx-2'>
                <img className='md:w-10/12 lg:w-[50%] lg:rounded-lg lg:shadow-2xl' src="src/assets/scantodine.webp" alt="" />
                <div className='flex flex-col justify-center items-center space-y-5 text-center px-5 sm:px-0'>
                    {/* <h2 className='text-2xl font-medium sm:text-5xl'>ScanToDine College Project</h2> */}
                    <Link to="projects" className='text-2xl relative font-medium sm:text-5xl text-orange-700 link-underline'>ScanToDine College Project</Link>
                    <p className='text-gray-700 sm:text-xl'>Showcased our college project 'ScanToDine' at LJ Innovation Village. Had amazing experience with my teammates and guides.</p>
                </div>
            </div>

            <div className='flex items-center justify-center my-10'>
                <Link to="projects" className='text-2xl text-orange-700 relative link-underline'>visit more projects...</Link>
            </div>
        </div>
    );
}