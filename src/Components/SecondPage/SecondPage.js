import React from 'react'
import './SecondPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'

function SecondPage() {
  return (
    <div>
      <img src={Group4} className='returnmark'/>
      <div className='main_box'>
        <div className='headers'>
          <h2>თანამშრომლის ინფო</h2>
          <h2>ლეპტოპის მახასიათებლები</h2>
        </div>
        <div className='box'>

        </div>
        <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
      </div>
    </div>
  )
}

export default SecondPage
