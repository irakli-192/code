import React from 'react'
import './FourthPage.css'
import Frame from '../../assets/Frame.png'
function FourthPage() {
  return (
    <div className='gray_box'>
      <div className='content'>
        <div>
          <img src={Frame} alt='Frame' className='frame'/>
        </div>
        <h1 className='addRecord'>ჩანაწერი დამატებულია!</h1>
        <div className='FourthPageButtons'>
          <button className='list_button'>სიაში გადაყვანა</button>
          <button className='welcomeButton'>მთავარი</button>
        </div>
      </div>
    </div>
  )
}

export default FourthPage
