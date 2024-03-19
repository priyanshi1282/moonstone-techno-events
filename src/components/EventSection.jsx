import React from 'react'
import Heading from './Heading'
import EventCard from './EventCard'
import eventData from '../assets/events.json'

const EventSection = () => {
    const data = eventData.events;

  return (
    <div className='m-4 md:mt-24 mt-20'>
        <Heading title= "Techno Events" />
        <div className='md:mt-10 mt-5 flex  gap-8 md:gap-16 flex-wrap justify-center items-end'>
        {
            data.map((item)=>(
                <EventCard key={item.id} item = {item} />
            ))
        }
        </div>
        <img src="https://ik.imagekit.io/0ob92jg8l/Location/V.png?updatedAt=1710861107711" className='w-[80%] my-16 mx-auto rounded-xl' alt="" />
    </div>
  )
}

export default EventSection