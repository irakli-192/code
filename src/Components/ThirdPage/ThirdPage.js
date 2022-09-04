import React, { useContext, useState } from 'react'
import './ThirdPage.css'
import logo2 from '../../assets/logo2.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'
import { thirdPageContext } from '../Context/ThirdPageContext.js'
import Vector from '../../assets/Vector.png'
import accept from '../../assets/accept.png'
import stop from '../../assets/stop.png'
import photo from '../../assets/photo.png'

function ThirdPage() {
 
  const{urlError,type,notUrl,url,uploadPhoto,memory2,Memory2,conditionLaptop2,Condition2,conditionError,costError,ramTypeError,ramError,laptop,
    CPU,laptopName,GoSavePage,LaptopName,selectLaptop,SelectLaptop,
    laptopNameError,selectLaptopError,selectCPUError,CPUInputError,streamError,
    selectCPU,SelectCPU,CPUInput,InputCpu,stream,Stream,ram,Ram,Memory,memory,
    date,Date,cost,Cost,conditionLaptop,Condition}=useContext(thirdPageContext)
  const{backFunction}=useContext(navContext)

  const SubmitForm=(e)=>{
    e.preventDefault()
  }
  
  return (
    <div className='parent2'>
      <img src={Group4} onClick={backFunction} className='returnmark'/>
      <div className='main_box'>
      <div className='headers2'>
          <div className='employe'>
            <h2 className='personal_info_2' onClick={backFunction}>თანამშრომლის ინფო</h2>
            <h2 className='h2_2'>ლეპტოპის მახასიათებლები</h2>
            <span className='two'>2/2</span>
          </div>
            <div className='line2'></div>
        </div>
        <div className='box'>
          <form onSubmit={SubmitForm} className={`laptop_form ${urlError ? 'urlError' :''}`}>
            <div className={`drop_zone ${!notUrl ? 'addstyle' : ''} `}>
              {urlError&&<img src={stop} className='stop'/>}
              <div className='camera'>
                <button type='file' className='photo_mobile'>
                  <input type='file' placeholder='ატვირთე' onChange={uploadPhoto} className='inputFile'/>
                  <img src={photo} alt='photo' className='photo_mobile'/>
                </button>
                <div className='responsive_texts'>
                  <div className='drop_zone_text'>ჩააგდე ან ატვირთე</div>
                  <div className='drop_zone_text2'>ლეპტოპის ფოტო</div>
                </div>
                <div className='drop_zone_text_mobile'>
                  <div>ლეპტოპის ფოტოს</div>
                  <div>ატვირთვა</div>
                </div>
                {urlError&&<img src={stop} className='stop_mobile'/>}
              </div>
              {!notUrl&&<img className='main_image' src={url}/>}
              {notUrl&&<button type='file' className='image_button'>ატვირთე
                <input type='file' placeholder='ატვირთე' onChange={uploadPhoto} className='inputFile'/>
              </button>}
            </div>
            {!notUrl&&<div className='add_button'>
              <div className='left_info'>
                <div className='accept_photo'>
                  <img src={accept} alt='photo_uploaded_image'/>
                </div>
                <h5 className='photo_text'>{type}</h5>
                 
              </div>
              <button type='file' className='image_button2'>თავიდან ატვირთე
                  <input type='file' placeholder='ატვირთე' onChange={uploadPhoto} className='inputFile2'/>
              </button>
            </div>}
            <div className={`top_inputs ${laptopNameError ? 'laptopNameError':''}`}>
              <label>ლეპტოპის სახელი</label>
              <div className='leptop_name'>
                <input type='text' placeholder='HP' className={`leptop_name_input ${laptopNameError ? 'laptopNameError':''}`} value={laptopName} onChange={LaptopName}/>
                <span className='third_span_mobile'>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
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
                  <span className='only_num'>მხოლოდ ციფრები </span>
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
                      <input type='radio'  checked={memory} onChange={Memory} name="memory" className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>SSD</label>
                      </div>
                    </div>
                    <div className='SSD'>
                      <input type='radio' checked={memory2} onChange={Memory2} name="memory" className='radio_input'/>
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
                      <input type='radio' name='condition' checked={conditionLaptop} onChange={Condition} className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>ახალი</label>
                      </div>
                    </div>
                    <div className='SSD'>
                      <input type='radio' name='condition' checked={conditionLaptop2} onChange={Condition2} className='radio_input'/>
                      <div className='radio_label'>
                        <label className='SSD_label'>მეორადი</label>
                      </div>
                    </div>
                  </div>
            </div>
            <div className='nav_buttons'>
              <button className='back2' onClick={backFunction}>უკან</button>
              <button type="submit" className='save' onClick={GoSavePage}>დამახსოვრება</button>
            </div>
          </form>
        </div>
           <img src={logo2} alt='Redberry Logo' className='RedLogo'/>
      </div>
    </div>
  )
}

export default ThirdPage
