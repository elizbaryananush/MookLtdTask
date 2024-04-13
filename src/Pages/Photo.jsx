import React from 'react'
import image from '../assets/legoboss.png'

function Photo() {
  return (
    <div className='Photo'>
        <img src={image} alt="lego" />
        <button className='first'>Save</button>
        <button className='second'>More</button>
    </div>
  )
}

export default Photo