import React, { useEffect, useState } from 'react'
import './Template.css'

function Template(props) {
    
  return (
    <div className='template'>
      <img src={`https://pcfy.redberryinternship.ge/${props.image}`} className='member_image'/>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Template
