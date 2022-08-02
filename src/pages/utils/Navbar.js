import React from 'react'
import {Link} from 'react-router-dom'
import { MdSearch } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="relative md:container mx-auto px-4 flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
                <img src="assets/media/Logo/logo.png" className="mr-3 h-8" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-dark ">Travel Near Me </span> <MdOutlinePlace style={{color: 'gray', fontSize: '24px', margin: '0 .5rem 0 3rem'}}/> Madiun, East Java, Indoneias
            </Link>
            <div className="flex md:order-2 items-center">
                <MdSearch style={{color: 'gray', fontSize: '55px', padding: '0 1rem'}}/>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded-xl">Sign In</button>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    </nav>
  )
}
