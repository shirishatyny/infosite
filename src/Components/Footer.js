import React from 'react'
import {FaFacebookSquare,FaGithub,FaInstagram,FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footerClass'>
      
      <div className='icon1'><FaFacebookSquare/></div>
      <div className="icon2"><FaInstagram/></div>
     <div className='icon3'><FaGithub/></div>
     <div className='icon4'><FaTwitter/></div>
    </div>
  )
}

export default Footer