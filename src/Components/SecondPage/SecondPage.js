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
          <div>
            <h2 className='personal_info'>თანამშრომლის ინფო</h2>
            <div className='black_line'></div>
          </div>
          <h2>ლეპტოპის მახასიათებლები</h2>
        </div>
        <div className='box'>
          <form>
            <div className='first_part'>
              <div>
                <label>სახელი</label>
                <input type='text' placeholder='გრიშა'/>
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
              <div>
                <label>გვარი</label>
                <input type='text' placeholder='ბაგრატიონი'/>
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
            </div>
            <select>
              <option>თიმი</option>
            </select>
            <select>
              <option>პოზიცია</option>
            </select>
            <div>
              <label>მეილი</label>
              <input type='text' placeholder='grisha666@redberry.ge'/>
              <span>უნდა მთავრდებოდეს redberry.ge-ით</span>
            </div>
            <div>
              <label>ტელეფონის ნომერი</label>
              <input type='text' placeholder='+995 598 00 07 01'/>
              <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
            </div>
            <button>შემდეგი</button>
          </form>
        </div>
        <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
      </div>
    </div>
  )
}

export default SecondPage
