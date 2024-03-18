import React from 'react'

const MoonstoneSection = () => {
  return (
    <div className='md:m-20 m-10 md:p-10 p-5 moonstone-section rounded-xl gap-4 flex md:flex-row flex-col justify-evenly items-center'>
        <div className='lg:text-7xl md:text-5xl text-3xl md:text-left text-center md:w-1/2 w-full'>
            Want to know more about moonstone?
        </div>
        <div className='md:w-1/2 flex justify-end'>
            <img src="/assets/images/moonstone-qr.svg" alt="" className='md:w-[80%] w-full' />
        </div>
    </div>
  )
}

export default MoonstoneSection