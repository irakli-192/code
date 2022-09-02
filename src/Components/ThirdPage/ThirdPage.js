import React, { useContext, useState } from 'react'
import './ThirdPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'
import { thirdPageContext } from '../Context/ThirdPageContext.js'
import Vector from '../../assets/Vector.png'

function ThirdPage() {
  const[file,setFile]=useState(null)
  const{conditionLaptop2,Condition2,conditionError,costError,ramTypeError,ramError,laptop,
    CPU,laptopName,GoSavePage,LaptopName,selectLaptop,SelectLaptop,
    laptopNameError,selectLaptopError,selectCPUError,CPUInputError,streamError,
    selectCPU,SelectCPU,CPUInput,InputCpu,stream,Stream,ram,Ram,Memory,memory,
    date,Date,cost,Cost,conditionLaptop,Condition}=useContext(thirdPageContext)
  const{backFunction}=useContext(navContext)
  const uploadPhoto=(e)=>{
    setFile(e.target.files[0])
    
  }
  return (
    <div className='parent'>
      <img src={Group4} onClick={backFunction} className='returnmark'/>
      <div className='main_box'>
      <div className='headers2'>
          <div className='employe'>
            <h2 className='personal_info'>თანამშრომლის ინფო</h2>
            <h2 className='h2'>ლეპტოპის მახასიათებლები</h2>
          </div>
            <div className='line2'></div>
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
            <div className={`top_inputs ${laptopNameError ? 'laptopNameError':''}`}>
              <label>ლეპტოპის სახელი</label>
              <div className='leptop_name'>
                <input type='text' placeholder='HP' className={`leptop_name_input ${laptopNameError ? 'laptopNameError':''}`} value={laptopName} onChange={LaptopName}/>
                <select className={`brand_select ${selectLaptopError ?'laptopNameError':''}`} value={selectLaptop} onChange={SelectLaptop}>
                  <option>ლეპტოპის ბრენდი</option>
                  {laptop.map(item=>{
                    return <option key={item.id}>{item.name}</option>
                  })}
                </select>
              </div>
              <span className='third_span'>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
            </div>
            <div className='grey_line'></div>
            <div className='middle_inputs'>
              <div className='middle_top'>
                <select value={selectCPU} onChange={SelectCPU} className={`middle_top_select ${selectCPUError ? 'laptopNameError':''}`}>
                  <option>CPU</option>
                  {CPU.map(item=>{
                    return <option key={item.id}>{item.name}</option>
                  })}
                </select>
                <div className={`middle_inputs_CPU ${CPUInputError ? 'laptopNameError':''}`}>
                  <label>CPU-ს ბირთვი</label>
                  <input type='text' placeholder='14' value={CPUInput} onChange={InputCpu} className='middle_inputs_CPU_input'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
                <div className={`middle_inputs_CPU ${streamError ? 'laptopNameError2':''}`}>
                  <label>CPU-ს ნაკადი</label>
                  <input type='text' placeholder='365' value={stream} onChange={Stream} className='middle_inputs_CPU_input'/>
                  <span>მხოლოდ ციფრები </span>
                </div>
              </div>
              <div className='middle_bottom'>
                <div className={`middle_bottom_ram ${ramError ? 'laptopNameError':''}`}>
                  <label>ლეპტოპის RAM-ი</label>
                  <input type='text' placeholder='16' value={ram} onChange={Ram} className='middle_bottom_ram_input'/>
                  <span className='middle_bottom_ram_label'>მხოლოდ ციფრები </span>
                </div>
                <div className={`radio_option ${ramTypeError ? 'laptopNameError':''}`}>
                  <h3 className='label_ram'>მეხსიერების ტიპი</h3>
                  <img src={Vector} className='vector'/>
                  <div className='radio'>
                    <div className='SSD'>
                      <input type='radio'  value={memory} onChange={Memory} name="memory" className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>SSD</label>
                      </div>
                    </div>
                    <div className='SSD'>
                      <input type='radio' value={memory} onChange={Memory} name="memory" className='radio_input'/>
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
                <input type='string' value={date} onChange={Date} className='bottom_inputs_left_date' placeholder='დდ / თთ / წწწწ'/>
              </div>
              <div className={`bottom_inputs_right ${costError ? 'laptopNameError':''}`}> 
                  <label>ლეპტოპის ფასი</label>
                  <input type='text' value={cost} onChange={Cost} placeholder='0000' className='bottom_inputs_right_input'/>
                  <span>მხოლოდ ციფრები </span>
              </div>
            </div>
            <div className={`last_inputs ${conditionError ? 'laptopNameError':''}`}>
                  <h3 className='condition_laptop'>ლეპტოპის მდგომარეობა</h3>
                  <img src={Vector} className='vector'/>
                  <div className='radio'>
                    <div className='SSD'>
                      <input type='radio' name='condition' value={conditionLaptop} onChange={Condition} className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>ახალი</label>
                      </div>
                    </div>
                    <div className='SSD'>
                      <input type='radio' name='condition' value={conditionLaptop2} onChange={Condition2} className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>მეორადი</label>
                      </div>
                    </div>
                  </div>
            </div>
            <div className='nav_buttons'>
              <button className='back' onClick={backFunction}>უკან</button>
              <button className='save' onClick={GoSavePage}>დამახსოვრება</button>
            </div>
          </form>
        </div>
           <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
      </div>
    </div>
  )
}

export default ThirdPage
