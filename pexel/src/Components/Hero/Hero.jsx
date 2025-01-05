import React from 'react'
import Navibar from '../Nav/Navibar'
import "./hero.css"
import searchIcon from '/src/Images/icons8-search-24.png';

const Hero = () => {
  return (
    <div className='h-container'>
      <Navibar />
        <main className='hero-main'>
        <div className='hero-text'>
        <div>The best free stock photos, royalty free images & videos shared by creators.</div>
        <div className='input-con'>
          <select name="" id="" className='i-btn'>
          <option value="">Pictures</option>
          <option value="">Videos</option>
          </select>
          <input style={{width:"70%", display:"inline-list-item"}} type="text" placeholder='Search for free photos' />
          <img src={searchIcon} alt="" />
        </div>
        </div>
        
        
        </main>
    </div>
  )
}

export default Hero