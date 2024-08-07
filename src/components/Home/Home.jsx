import React from 'react'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import './Home.css'

const Home = () => {
  return (
    <div className='shop'>
      <div className='shop-left'>
        <h2>NEW ARRAVIALS ONLY </h2>
        <div className='shop-hand-icon'>
        <p>New</p>
        <img src={hand_icon} alt=''/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className='shop-button'>
          <div>Latest Collection</div>
          <img src={arrow_icon}></img>
        </div>
      </div>
      <div className='shop-right'>
        <img src={hero_image}></img>
      </div>
    </div>
  )
}

export default Home