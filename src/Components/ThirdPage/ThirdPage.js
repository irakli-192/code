import React, { useContext, useState } from 'react'
import './ThirdPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'

function ThirdPage() {
  const[file,setFile]=useState(null)
  const{returnPreviousPage}=useContext(navContext)
  const uploadPhoto=(e)=>{
    setFile(e.target.files[0])
    
  }
  return (
    <div className='parent'>
      <img src={Group4} onClick={returnPreviousPage} className='returnmark'/>
      <div className='main_box'>
      <div className='headers'>
          <div className='employe'>
            <h2 className='personal_info'>თანამშრომლის ინფო</h2>
            <h2 className='h2'>ლეპტოპის მახასიათებლები</h2>
          </div>
            <div className='line'></div>
        </div>
        <div className='box'>
          <form>
            <div className='drop_zone'>
              <div className='drop_zone_text'>ჩააგდე ან ატვირთე</div>
              <div className='drop_zone_text2'>ლეპტოპის ფოტო</div>
              <button type='file' className='image_button'>ატვირთე
                <input type='file' placeholder='ატვირთე' onChange={uploadPhoto} className='inputFile'/>
              </button>
            </div>
            <div className='top_inputs'>
              <div>
                <label>ლეპტოპის სახელი</label>
                <input type='text' placeholder='HP'/>
                <span>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
              </div>
              <select>
                <option>ლეპტოპის ბრენდი</option>
              </select>
            </div>
            <div className='grey_line'></div>
            <div className='middle_inputs'>
              <div className='middle_top'>
                <select>
                  <option>CPU</option>
                </select>
                <div>
                  <label>CPU-ს ბირთვი</label>
                  <input type='text' placeholder='14'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
                <div>
                  <label>ლეპტოპის სახელი</label>
                  <input type='text' placeholder='365'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
              </div>
              <div className='middle_bottom'>
                <div>
                  <label>ლეპტოპის RAM-ი</label>
                  <input type='text' placeholder='16'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
                <div>
                  <label>მეხსიერების ტიპი</label>
                  <div>
                    <div>
                      <label>SSD</label>
                      <input type='radio'/>
                    </div>
                    <div>
                      <label>HDD</label>
                      <input type='radio'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grey_line'></div>
            <div className='bottom_inputs'>
              <div>
                <label></label>
                <input type='date'/>
              </div>
              <div>
                  <label>ლეპტოპის ფასი</label>
                  <input type='text' placeholder='0000'/>
                  <span>მხოლოდ ციფრები </span>
              </div>
            </div>
            <div>
                  <label>მეხსიერების ტიპი</label>
                  <div>
                    <div>
                      <label>SSD</label>
                      <input type='radio'/>
                    </div>
                    <div>
                      <label>HDD</label>
                      <input type='radio'/>
                    </div>
                  </div>
            </div>
          </form>
        </div>
           <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
      </div>
    </div>
  )
}

export default ThirdPage
