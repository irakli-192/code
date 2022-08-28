import React, { useContext } from 'react'
import './SecondPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { validContext } from '../Context/validContext'

function SecondPage() {
  const{name,lastName,email,phone}=useContext(validContext)
  return (
    <div>
      <img src={Group4} className='returnmark'/>
      <div className='main_box'>
        <div className='headers'>
          <div>
            <h2 className='personal_info'>თანამშრომლის ინფო</h2>
            <div className='black_line'></div>
          </div>
          <h2>ლეპტოპის მახასიათებლები</h2>
        </div>
        <div className='box'>
          <form className='form'>
            <div className='first_part'>
              <div className="inputs">
                <label>სახელი</label>
                <input type='text' placeholder='გრიშა' className='name' value={name}/>
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
              <div className="inputs">
                <label>გვარი</label>
                <input type='text' placeholder='ბაგრატიონი' className='name' value={lastName}/>
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
            </div>
            <select className='select1'>
              <option>თიმი</option>
            </select>
            <select className='select1'>
              <option>პოზიცია</option>
            </select>

            <div className="second_part">
              <label>მეილი</label>
              <input type='text' placeholder='grisha666@redberry.ge' className='inputs2' value={email}/>
              <span>უნდა მთავრდებოდეს redberry.ge-ით</span>
            </div>
            <div className="second_part">
              <label>ტელეფონის ნომერი</label>
              <input type='text' placeholder='+995 598 00 07 01' className='inputs2' value={phone}/>
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
