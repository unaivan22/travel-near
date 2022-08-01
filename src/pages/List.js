import React, { Component } from 'react'
import data from './data/data.json'

class List extends Component {
	render() {
		return (
            <div className='py-6 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-6'>
                {
					data.Vacation.map((vacation, i) => {
						return (
							<a href='' className="overflow-hidden mb-12">
                                <img className="w-full aspect-square object-cover rounded-2xl" src={vacation.vacationImage} alt="Mountain" />
                                <div className="py-4">
                                    <div className='grid grid-cols-2'>
                                        <h1 className='font-bold mb-2 text-lg'>{vacation.vacationName}</h1>
                                        <div className='grid grid-cols-1 text-right'>
                                            <h1 className='text-md'>{vacation.vacationRating}<span className='px-1 rating-star' >&#9733;</span> </h1>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-base text-sm"> {vacation.vacationDistance} kilometers away </p>
                                </div>
                            </a>
						);
					})
				}
            </div>
        );
    }
} 
export default List;