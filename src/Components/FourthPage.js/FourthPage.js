import React, { useContext } from 'react'
import './FourthPage.css'
import Frame from '../../assets/Frame.png'
import { navContext } from '../Context/navContext'
function FourthPage() {
  const{setPage}=useContext(navContext)
  const mainPage=(e)=>{
    e.preventDefault();
    setPage(1)
  }
  return (
    <div className='gray_box'>
      <div className='content'>
        <div>
          <img src={Frame} alt='Frame' className='frame'/>
        </div>
        <h1 className='addRecord'>ჩანაწერი დამატებულია!</h1>
        <div className='FourthPageButtons'>
          <button className='list_button'>სიაში გადაყვანა</button>
          <button className='welcomeButton' onClick={mainPage}>მთავარი</button>
        </div>
      </div>
    </div>
  )
}

export default FourthPage
