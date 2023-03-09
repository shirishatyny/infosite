import React from 'react'
import {FaEnvelopeSquare, FaLinkedinIn} from 'react-icons/fa'

const Buttons = () => {
  return (
    <div className='buttons'>
      
      <button className='buttonClass'><FaEnvelopeSquare/> Email</button>
      <button className='buttonClass1'><FaLinkedinIn/>LinkedIn</button>
    </div>
  )
}

export default Buttons