import React from 'react'
import logo from '../../assets/logo.png'
import Group from '../../assets/Group.png'
import './WelcomePage.css'

function WelcomePage() {
  return (
    <div className='main'>
      <div className='images'>
        <img src={logo} alt='Redberry_logo' className='logo'/>
        <img src={Group} alt='Back_image' className='back_photo'/>
      </div>
      <div className='buttons'>
        <button className='first_button'>ჩანაწერის დამატება</button>
        <button className='second_button'>ჩანაწერების სია</button>
      </div>
    </div>
  )
}

export default WelcomePage
