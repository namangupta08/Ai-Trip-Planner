import React from 'react'
import PlaceCard from './PlaceCard'

function PlacestoVisit({trip}) {
  return (
    <div>
      <h2 className='text-2xl font-bold mt-5'>Places to Visit</h2>

      <div>
        {trip?.tripData?.itinerary.map((item , index) => (
            <div key={index} className='mt-5'>
                
                    <h2 className='font-bold text-xl mt-3'>{item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            item.plan.map((place) => (
                                <div className='my-3 '>
                                    <h2 className='font-medium text-sm text-orange-700'>{place.time}</h2>
                                    <PlaceCard place={place} trip={trip}/>
                                </div>
                            ))
                        }
                    </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacestoVisit
