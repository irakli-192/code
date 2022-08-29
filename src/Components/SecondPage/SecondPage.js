import React, { useContext } from 'react'
import './SecondPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'
import { fetchContext } from '../Context/fetchContext'

function SecondPage() {
  const{name,lastName,email,phone,changeLastName,changeName,changeEmail,changePhone,goThirdPage,returnPreviousPage,changeTeam,chosenTeam,changePosition,chosenPosition}=useContext(navContext)
  const{team,position}=useContext(fetchContext)
  return (
    <div>
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
          <form className='form' onSubmit={goThirdPage}>
            <div className='first_part'>
              <div className="inputs">
                <label>სახელი</label>
                <input type='text' placeholder='გრიშა' className='name' value={name} onChange={changeName}/>
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
              <div className="inputs">
                <label>გვარი</label>
                <input type='text' placeholder='ბაგრატიონი' className='name' value={lastName} onChange={changeLastName}/>
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
            </div>
            <select className='select1' value={chosenTeam} onChange={changeTeam}>
              <option>თიმი</option>
              {team.map(item=>{
                return <option key={item.id}>{item.name}</option>
              })}
            </select>
            <select className='select1' value={chosenPosition} onChange={changePosition}>
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

            <div className="second_part">
              <label>მეილი</label>
              <input type='text' placeholder='grisha666@redberry.ge' className='inputs2' value={email} onChange={changeEmail}/>
              <span>უნდა მთავრდებოდეს redberry.ge-ით</span>
            </div>
            <div className="second_part">
              <label>ტელეფონის ნომერი</label>
              <input type='text' placeholder='+995 598 00 07 01' className='inputs2' value={phone} onChange={changePhone}/>
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
