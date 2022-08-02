import React from 'react'
import Navbar from '../utils/Navbar'

export default function Viewdetail() {
  return (
    <div>
        <Navbar />
        <div className='relative md:container mx-auto px-4 py-6'>

            <div className="grid grid gap-2 grid-cols-2 sm:gap-2 md:gap-2 lg:gap-4 xl:gap-4">
                <img className='w-full h-full aspect-square object-cover rounded-2xl' src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80' />
                <div className='grid grid-cols-1 gap-2 sm:gap-2 md:gap-2 lg:gap-4 xl:gap-4'>
                    <div className='grid grid-cols-2 gap-2 sm:gap-2 md:gap-2 lg:gap-4 xl:gap-4'>
                        <img className='w-full aspect-square object-cover rounded-2xl' src='https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80' />
                        <img className='w-full aspect-square object-cover rounded-2xl' src='https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' />
                    </div>
                    <div className='grid grid-cols-1'>
                        <img className='grid grid-cols-1 w-full aspect-video object-cover rounded-2xl' src='https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                        <button class="mt-4 float-right bg-white hover:bg-gray-100 text-gray-800 text-sm font-normal py-2 px-4 border border-gray-300 rounded">Show All Photos (16)</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
