import React from 'react'
import { IconName } from "react-icons/md";

export default function Navbar() {
  return (
    <nav class="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div class="relative md:container mx-auto px-4 flex flex-wrap justify-between items-center mx-auto">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-dark ">Travel </span>
            </a>
            <div class="flex md:order-2">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-100 rounded-xl">Sign In</button>
                <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    </nav>
  )
}
