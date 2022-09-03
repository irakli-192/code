import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import Group from '../../assets/Group.png'
import Computer from '../../assets/Computer.png'
import './WelcomePage.css'
import { navContext } from '../Context/navContext'

function WelcomePage() {
  const{goFunction}=useContext(navContext)
  return (
    <div className='main'>
      <div className='images'>
        <img src={logo} alt='Redberry_logo' className='logo'/>
        <img src={Group} alt='Back_image' className='back_photo'/>
        <img src={Computer} alt='Computer_image' className='computer_photo'/>
      </div>
      <div className='buttons'>
        <button onClick={goFunction} className='first_button'>ჩანაწერის დამატება</button>
        <button className='second_button'>ჩანაწერების სია</button>
      </div>
    </div>
  )
}

export default WelcomePage
