import React, { useContext } from 'react'
import './ThirdPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'

function ThirdPage() {
  const{returnPreviousPage}=useContext(navContext)
  return (
    <div className='parent'>
      <img src={Group4} onClick={returnPreviousPage} className='returnmark'/>
      <div className='main_box'>
        <div className='headers'>
          <div>
            <h2 className='personal_info'>თანამშრომლის ინფო</h2>
            <div className='black_line'></div>
          </div>
          <h2>ლეპტოპის მახასიათებლები</h2>
        </div>
        <div className='box'>
          <div className='drop_zone'>
              <div className='drop_zone_text'>ჩააგდე ან ატვირთე</div>
              <div className='drop_zone_text2'>ლეპტოპის ფოტო</div>
              <button className='image_button'>ატვირთე</button>
          </div>
        </div>
           <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
           </div>
    </div>
  )
}

export default ThirdPage
