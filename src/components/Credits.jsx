import React from 'react'
import Heading from './Heading'
import CreditsCard from './CreditsCard'
import creditData from '../assets/credits.json'

const Credits = () => {
  const data = creditData.credits;
  return (
    <div className='my-10 bg-black md:p-10 p-5'>
        <Heading title="Developers" />
        <div className='mt-10 flex gap-10 justify-center items-center flex-wrap'>
          {
            data.map((item) => (
              <CreditsCard key={item.id} item={item} />
            ))
          }
        </div>
    </div>
  )
}

export default Credits