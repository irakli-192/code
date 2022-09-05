import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { navContext } from '../Context/navContext'
import Member from './Member'
import './Template.css'

function Template(props) {
  
  return (
    <div className='template'>
      <img src={`https://pcfy.redberryinternship.ge/${props.image}`} className='member_image'/>
      <div className='member_texts'>
        <h1 className='full_name'>{props.member_name} {props.member_surname}</h1>
        <h3 className='leptop_brand'>{props.laptop_name}</h3>
        <span className='see_more'>მეტის ნახვა</span>
      </div>

    </div>
  )
}

export default Template
