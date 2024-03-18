import React from 'react'
const EventCard = () => {
  return (
    <div className='rounded-xl w-[200px] md:w-[250px] event-card'>
        <img src="/assets/images/eventsPost/tic-tac-toe.jpeg" alt="event-img" className='w-full rounded-xl' />
        <div className='px-2 md:py-4 py-2 text-center'>
        <p className='md:text-xl text-lg font-semibold my-0 leading-none'>Kon banega cr</p>
        <p className='mt-1 md:mb-3 mb-2'>23 march | 9pm</p>
        <button className='bg-white hover:scale-95	 transition-all duration-300 ease-in-out rounded-full text-black px-6 py-1'>View Location</button>
        </div>
    </div>
  )
}

export default EventCard