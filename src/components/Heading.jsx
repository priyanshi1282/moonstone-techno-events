import React from 'react'

const Heading = (props) => {
  return (
    <h1 className='text-3xl shadow-sm md:text-4xl text-center font-bold'>{props.title}</h1>
  )
}

export default Heading