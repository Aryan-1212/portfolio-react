import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../../contexts/Theme';

export default function Header() {

    const { themeMode, darkTheme, lightTheme } = useTheme()

    const themeBtn = (e) => {
        const checkBoxStatus = e.currentTarget.checked
        const moon = document.getElementById('moon')
        const sun = document.getElementById('sun')
        if(checkBoxStatus){
            darkTheme()
            sun.classList = 'hidden'
            moon.classList = 'block'
        }else{
            lightTheme()
            sun.classList = 'block'
            moon.classList = 'hidden'
        }
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/src/assets/logo.png"
                            className="mr-3 h-20 dark:hidden"
                            alt="Logo"
                        />
                        <img
                            src="/src/assets/dark-logo.png"
                            className="mr-3 h-20 hidden dark:block"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="https://www.github.com/Aryan-1212"
                            target='_blank'
                            className="text-gray-800 dark:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            GitHub
                        </Link>
                        <Link
                            to="projectlayout"
                            onClick={() => window.scrollTo(0, 0)}
                            className="text-white bg-orange-700 dark:bg-[#ffb703] dark:hover:bg-[#ff9203] dark:text-black hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Projects
                        </Link>
                        <div>
                            <label class="relative inline-block w-16 h-8 cursor-pointer">
                                <input type="checkbox" class="sr-only peer" onClick={themeBtn} checked={themeMode === 'dark'}/>
                                    <div class="absolute inset-0 bg-gray-700 rounded-full peer-checked:bg-gray-300 transition-colors duration-300"></div>
                                    <div class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 peer-checked:translate-x-8 flex items-center justify-center">
                                        <span id='sun' class="block">☀️</span>
                                        <span id='moon' class="hidden">🌙</span>
                                    </div>
                            </label>
                        </div>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className='space-x-10'>
                                <NavLink
                                    to="/"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) =>
                                        `py-2 pr-4 ${isActive ? "text-orange-700 dark:text-[#ffb703]" : "text-gray-700 dark:text-white"} pl-3 duration-200 border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#ffb703] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="about"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) =>
                                        `py-2 pr-4 ${isActive ? "text-orange-700 dark:text-[#ffb703]" : "text-gray-700 dark:text-white"} pl-3 duration-200 border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#ffb703] lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="contact"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) =>
                                        `py-2 pr-4 ${isActive ? "text-orange-700 dark:text-[#ffb703]" : "text-gray-700 dark:text-white"} pl-3 duration-200 border-b border-gray-100  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 dark:hover:text-[#ffb703] lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}