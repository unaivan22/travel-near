import React from 'react'

export default function Navigation() {
  return (
    <div className='relative md:container mx-auto px-4 py-6'>
        {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option disabled>Choose a country</option>
            <option selected value="Indonesia">Indonesia</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
        </select> */}

        <div class="grid grid-cols-3 gap-4">
            <div className='grid grid-cols-2 text-right gap-x-4'>
                <select id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option disabled>Choose a country</option>
                    <option selected value="Indonesia">Indonesia</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                <select id="province" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option disabled>Choose a country</option>
                    <option selected value="Java">Java</option>
                    <option value="SUM">Sumatera</option>
                    <option value="KAL">Kalimanatan</option>
                    <option value="PAP">Papua</option>
                    <option value="SUL">Sulawesi</option>
                </select>
            </div>

        </div>
    </div>
  )
}
