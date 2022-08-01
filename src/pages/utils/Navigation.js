import React from 'react'
import { MdOutlineLuggage } from "react-icons/md";
import { MdBeachAccess } from "react-icons/md";
import { MdOutlineLandscape } from "react-icons/md";
import { MdWater } from "react-icons/md";
import { MdOutlineWaterfallChart } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";

export default function Navigation() {
  return (
    <div className='relative md:container mx-auto px-4 py-6'>

        <div class="grid grid-cols-2 gap-4">
            <div className='grid grid-cols-2 text-right gap-x-4 container-filter'>
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option disabled>Choose a country</option>
                    <option value="1" selected>Indonesia</option>
                    <option value="2">Malaysia</option>
                    <option value="3">Singapore</option>
                </select>
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option disabled>Choose a province</option>
                    <option selected value="Java">Java</option>
                    <option value="SUM">Sumatera</option>
                    <option value="KAL">Kalimanatan</option>
                    <option value="PAP">Papua</option>
                    <option value="SUL">Sulawesi</option>
                </select>
            </div>

            <div className='grid grid-cols-1 text-right gap-x-4'>
                <ul className='flex gap-x-6' >
                    <li className='text-center border-b-2 border-gray-400'>
                        <MdOutlineLuggage style={{margin: 'auto', fontSize: '24px', color: 'grey'}} />
                        <button type="button" class="group text-sm text-gray-800 w-full flex flex-col items-center ">All Vacation</button>
                    </li>
                    <li className='text-center'>
                        <MdBeachAccess style={{margin: 'auto', fontSize: '24px', color: '#d0d0d0'}} />
                        <button type="button" class="group text-sm text-gray-400 w-full flex flex-col items-center ">Beach</button>
                    </li>
                    <li className='text-center'>
                        <MdOutlineLandscape style={{margin: 'auto', fontSize: '24px', color: '#d0d0d0'}} />
                        <button type="button" class="group text-sm text-gray-400 w-full flex flex-col items-center ">Mount</button>
                    </li>
                    <li className='text-center'>
                        <MdWater style={{margin: 'auto', fontSize: '24px', color: '#d0d0d0'}} />
                        <button type="button" class="group text-sm text-gray-400 w-full flex flex-col items-center ">Lake</button>
                    </li>
                    <li className='text-center'>
                        <MdOutlineWaterfallChart style={{margin: 'auto', fontSize: '24px', color: '#d0d0d0'}} />
                        <button type="button" class="group text-sm text-gray-400 w-full flex flex-col items-center ">Waterfall</button>
                    </li>
                    <li className='text-center'>
                        <MdCorporateFare style={{margin: 'auto', fontSize: '24px', color: '#d0d0d0'}} />
                        <button type="button" class="group text-sm text-gray-400 w-full flex flex-col items-center ">Urban</button>
                    </li>
                </ul>
            </div>



        </div>
    </div>
  )
}
