import React, { useContext, useEffect, useState } from 'react'
import Group4 from '../../assets/Group4.png'
import Computer from '../../assets/Computer.png'
import back from '../../assets/back.png'
import './Member.css'
import { navContext } from '../Context/navContext'
import { fetchContext } from '../Context/fetchContext'
import { thirdPageContext } from '../Context/ThirdPageContext'
let t=''
let posit=''
let lap=''
function Member(props) {
  const{obj,backFunction}=useContext(navContext)
  const{position,team}=useContext(fetchContext)
  const{laptop}=useContext(thirdPageContext)

  {laptop.map(laptop=>{
    if(obj.laptop.brand_id==laptop.id){
      lap=laptop.name
      return lap
    }
  })}
  console.log(obj)
  {team.map(item=>{
    if(obj.user.team_id==item.id){
      t=item.name
      return t
    }
  })}
  {position.map(pos=>{
    if(obj.user.position_id==pos.id){
      posit=pos.name
      return posit
    }
  })}
 
  return (
      <div className='main_member'>
        <div>
          <img className='backGRoup' src={Group4} onClick={backFunction}/>
          <img className='backGRoup_mobile' src={back} onClick={backFunction}/>
        </div>
        <div className='member_laptop_parent'>
          <h1 className='member_laptop'>ლეპტოპის ინფო</h1>
        </div>
        <div className='first_member_section'>
            <div className='left_member_section'>
              <img src={`https://pcfy.redberryinternship.ge${obj.laptop.image}`} className='member_back'/> 
            </div>
            <div className='right_parent'>
              <div className='right_member_section'>
                <span>სახელი:</span>
                <span>თიმი:</span>
                <span>პოზიცია:</span>
                <span>მეილი:</span>
                <span>ტელ.ნომერი:</span>             
              </div>
              <div className='right2_member_section'>
                <span>{obj.user.name} {obj.user.surname}</span>
                 <span>{t}</span>
                 <span>{posit}</span> 
                <span>{obj.user.email}</span>
                <span>{obj.user.phone_number}</span>
              </div>
            </div>
        </div>
        <div className='divider_line'></div>
        <div className='second_member_section'>
          <div className='left_member_section2'>
            <div className='left_member_section2_left'>
              <span>ლეპტოპის სახელი:</span>
              <span>ლეპტოპის ბრენდი:</span>
              <span>RAM:</span>
              <span>მეხსიერების ტიპი:</span>
            </div>
            <div className='left_member_section2_right'>
              <span>{obj.laptop.name}</span>
              <span>{lap}</span>
              <span>{obj.laptop.ram}</span>
              <span>{obj.laptop.hard_drive_type}</span>
            </div>
          </div>
          <div className='right_member_section2'>
            <div className='right_member_section2_left'>
              <span>CPU:</span>
              <span>CPU-ს ბირთვი:</span>
              <span>CPU-ს ნაკადი:</span>
            </div>
            <div className='right_member_section2_right'>
              <span>{obj.laptop.cpu.name}</span>
              <span>{obj.laptop.cpu.cores}</span>
              <span>{obj.laptop.cpu.threads}</span>
            </div>
          </div>
        </div>
        <div className='divider_line'></div>
        <div className='bottom_member'> 
          <div className='botom_member_left'>
            <div className='botom_member_left2'>
              <span>ლეპტოპის მდგომარეობა:</span>
              <span>ლეპტოპის ფასი:</span>
            </div>
            <div className='botom_member_left_right'>
              <span>{obj.laptop.state}</span>
              <span>{obj.laptop.price}</span>
            </div>
          </div>
          <div className='botom_member_right'>
            <div className='botom_member_right_left'>
              <span>შეძენის რიცხვი:</span>
            </div>
            <div className='botom_member_right_right'>
              <span>{obj.laptop.purchase_date}</span>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Member
