import React, { useContext, useState } from 'react'
import './ThirdPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'

function ThirdPage() {
  const[file,setFile]=useState(null)
  const{returnPreviousPage,returnSecondPage}=useContext(navContext)
  const uploadPhoto=(e)=>{
    setFile(e.target.files[0])
    
  }
  return (
    <div className='parent'>
      <img src={Group4} onClick={returnSecondPage} className='returnmark'/>
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
              <label>ლეპტოპის სახელი</label>
              <div className='leptop_name'>
                <input type='text' placeholder='HP' className='leptop_name_input'/>
                <select className='brand_select'>
                  <option>ლეპტოპის ბრენდი</option>
                </select>
              </div>
              <span className='third_span'>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
            </div>
            <div className='grey_line'></div>
            <div className='middle_inputs'>
              <div className='middle_top'>
                <select className='middle_top_select'>
                  <option>CPU</option>
                </select>
                <div className='middle_inputs_CPU'>
                  <label>CPU-ს ბირთვი</label>
                  <input type='text' placeholder='14' className='middle_inputs_CPU_input'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
                <div className='middle_inputs_laptop'>
                  <label>ლეპტოპის სახელი</label>
                  <input type='text' placeholder='365' className='middle_inputs_CPU_input'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
              </div>
              <div className='middle_bottom'>
                <div className='middle_bottom_ram'>
                  <label>ლეპტოპის RAM-ი</label>
                  <input type='text' placeholder='16' className='middle_bottom_ram_input'/>
                  <span className='middle_bottom_ram_label'>მხოლოდ ციფრები </span>
                </div>
                <div>
                  <label className='label_ram'>მეხსიერების ტიპი</label>
                  <div className='radio'>
                    <div className='SSD'>
                      <input type='radio' value='SSD' name="memory" className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>SSD</label>
                      </div>
                    </div>
                    <div className='SSD'>
                      <input type='radio' value='HDD' name="memory" className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>HDD</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grey_line'></div>
            <div className='bottom_inputs'>
              <div className='bottom_inputs_left'>
                <label>შეძენის რიცხვი (არჩევითი)</label>
                <input type='date' className='bottom_inputs_left_date'/>
              </div>
              <div className='bottom_inputs_right'> 
                  <label>ლეპტოპის ფასი</label>
                  <input type='text' placeholder='0000' className='bottom_inputs_right_input'/>
                  <span>მხოლოდ ციფრები </span>
              </div>
            </div>
            <div className='last_inputs'>
                  <label>ლეპტოპის მდგომარეობა</label>
                  <div className='radio'>
                    <div className='SSD'>
                      <input type='radio' name='condition' className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>ახალი</label>
                      </div>
                    </div>
                    <div className='SSD'>
                      <input type='radio' name='condition' className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>მეორადი</label>
                      </div>
                    </div>
                  </div>
            </div>
            <div className='nav_buttons'>
              <button className='back' onClick={returnSecondPage}>უკან</button>
              <button className='save'>დამახსოვრება</button>
            </div>
          </form>
        </div>
           <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
      </div>
    </div>
  )
}

export default ThirdPage
