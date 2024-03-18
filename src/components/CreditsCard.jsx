import React from 'react'

const CreditsCard = () => {
  return (
    <div className='credits-card w-[220px] md:w-[300px] rounded-xl p-5 text-center'>
        <img src="/assets/images/moonstone-qr.svg" alt="" className='w-full rounded-full mb-2' />    
        <p className='text-2xl'>Name</p>
        <p className='mb-2'>Position</p>
        <button onClick={()=> window.open('https://www.google.com/', '_blank')}>
            <img src="/assets/images/Linkedin.svg" alt="" />
        </button>
    </div>
  )
}

export default CreditsCard