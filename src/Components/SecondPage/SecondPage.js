import React, { useContext, useState } from 'react'
import './SecondPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'
import { fetchContext } from '../Context/fetchContext'


function SecondPage() {
  const{name,lastName,email,phone,changeLastName,changeName,changeEmail,changePhone,selectError,backFunction,phoneError,emailError,
    changeTeam,chosenTeam,namesErrors,lanErrors,changePosition,lastNameErrors,chosenPosition,selectError2,goFunction}=useContext(navContext)
  const{team,position}=useContext(fetchContext)
  
  return (
    <div className='parent'>
      <img src={Group4} onClick={backFunction} className='returnmark'/>
      <div className='main_box'>
        <div className='headers'>
          <div className='employe'>
            <h2 className='personal_info'>თანამშრომლის ინფო</h2>
            <h2 className='h2' onClick={goFunction}>ლეპტოპის მახასიათებლები</h2>
          </div>
            <div className='line'></div>
        </div>
        <div className='box'>

          <form className='form' onSubmit={goFunction}>
            <div className='first_part'>
              <div className={`inputs ${namesErrors || lanErrors ? 'lengthError':''} `}>
                <label>სახელი</label>
                <input type='text' placeholder='გრიშა' className='name' value={name} onChange={changeName}/>
                <div className='spans'>
                  <span className='span1'>მინიმუმ 2 სიმბოლო,</span>
                  <span className='span2'>ქართული ასოები</span>
                </div>
              </div>
              <div className={`inputs ${lastNameErrors ? 'lengthError':''} `}>
                <label>გვარი</label>
                <input type='text' placeholder='ბაგრატიონი' className='name' value={lastName} onChange={changeLastName}/>
                <div className='spans'>
                  <span className='span1'>მინიმუმ 2 სიმბოლო,</span>
                  <span className='span2'>ქართული ასოები</span>
                </div>
              </div>
            </div>
            <select className={`select1 ${selectError ? 'selectError':''}`} value={chosenTeam} onChange={changeTeam}>
              <option>თიმი</option>
              {team.map(item=>{
                return <option key={item.id}>{item.name}</option>
              })}
            </select>
            <select className={`select1 ${selectError2 ? 'selectError':''}`} value={chosenPosition} onChange={changePosition}>
              <option>პოზიცია</option>
              {team.map(items=>{
                if(items.name==chosenTeam){
                      return(
                        position.map(pos=>{
                          if(items.id===pos.team_id){
                            return <option key={pos.id}>{pos.name}</option>
                          }
                        })
                      )
                }
              })}
            </select>
            <div className={`second_part ${emailError ? 'selectError':''}`}>
              <label>მეილი</label>
              <input type='text' placeholder='grisha666@redberry.ge' className='inputs2' value={email} onChange={changeEmail}/>
              <span>უნდა მთავრდებოდეს redberry.ge-ით</span>
            </div>
            <div className={`second_part ${phoneError ? 'selectError':''}`}>
              <label>ტელეფონის ნომერი</label>
              <input type='text' placeholder='+995 598 00 07 01' className='inputs2'  value={phone} onChange={changePhone}/>
              <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
            </div>
            <div className='button_div'>
              <button className='button' type='submit'>შემდეგი</button>
            </div>
          </form>
        
           </div>
              <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
           </div>
    </div>
  )
}

export default SecondPage
