import React from 'react'

const CreditsCard = (props) => {
  return (
    <div className='credits-card w-[220px] md:w-[300px] rounded-xl p-5 text-center'>
        <img src="/assets/images/moonstone-qr.svg" alt="" className='w-full rounded-full mb-2' />    
        <p className='text-2xl'>{props.item.name}</p>
        <p className='mb-2'>{props.item.position}</p>
        <button onClick={()=> window.open(props.item.url, '_blank')}>
            <img src="/assets/images/Linkedin.svg" alt="" />
        </button>
    </div>
  )
}

export default CreditsCard