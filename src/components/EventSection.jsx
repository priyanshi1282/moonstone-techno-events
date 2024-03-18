import React from 'react'
import Heading from './Heading'
import EventCard from './EventCard'
import eventData from '../assets/events.json'

const EventSection = () => {
    const data = eventData.events;

  return (
    <div className='m-4 md:mt-24 mt-20'>
        <Heading title= "Techno Events" />
        <div className='md:mt-10 mt-5 flex  gap-8 md:gap-16 flex-wrap justify-center'>
        {
            data.map((item)=>(
                <EventCard key={item.id} />
            ))
        }
             </div>
    </div>
  )
}

export default EventSection