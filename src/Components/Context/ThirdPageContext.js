import React, { createContext, useContext, useEffect, useState } from 'react'
import { navContext } from './navContext';
let lapNameRegex=/^[a-zA-Z0-9_+=()!@#$%\^&*']*$/
let digRegex=/^\d+$/;
export const thirdPageContext=createContext();
console.log('yes')
function ThirdPageContext(props) {
  const{page,setPage}=useContext(navContext)
  const[laptop,setLaptop]=useState([])
  const[CPU,setCPU]=useState([])
  useEffect(()=>{
    fetch('https://pcfy.redberryinternship.ge/api/brands').then(response=>{
      return response.json()
    }).then(data=>{
      setLaptop(data.data)
    })
  },[])
  useEffect(()=>{
    fetch('https://pcfy.redberryinternship.ge/api/cpus').then(response=>{
      return response.json()
    }).then(data=>{
      setCPU(data.data)
    })
  },[])
  const[laptopNameError,setLaptopNameError]=useState(false)
  const[selectLaptopError,setSelectLaptopError]=useState(false)
  const[selectCPUError,setSelectCPUError]=useState(false)
  const[CPUInputError,setCPUInputError]=useState(false)
  const[streamError,setStreamError]=useState(false)
  
  const[laptopName,setLaptopName]=useState('')
  const[selectLaptop,setSelectLaptop]=useState('ლეპტოპის ბრენდი')
  const[selectCPU,setSelectCPU]=useState('CPU')
  const[CPUInput,setCPUInput]=useState('')
  const[stream,setStream]=useState('')
  const[memory,setMemory]=useState(false)
  const[ram,setRam]=useState('')
  const[date,setDate]=useState('')
  const[cost,setCost]=useState('')
  const[conditionLaptop,setConditionLaptop]=useState(false)
  const LaptopName=(e)=>{
    setLaptopName(e.target.value)
  }
  const Condition=(e)=>{
    setConditionLaptop(e.target.checked)
  }
  const Cost=(e)=>{
    setCost(e.target.value)
  }
  const Date=(e)=>{
    setDate(e.target.value)
  }
  const Ram=(e)=>{
    setRam(e.target.value)
  }
  const Memory=(e)=>{
    setMemory(e.target.checked)
    
  }
  const Stream=(e)=>{
    setStream(e.target.value)
  }
  const InputCpu=(e)=>{
    setCPUInput(e.target.value)
  }
  const SelectCPU=(e)=>{
    setSelectCPU(e.target.value)
  }
  
  const SelectLaptop=(e)=>{
    setSelectLaptop(e.target.value)
  }
  const valid=laptopName.match(lapNameRegex)&&laptopName.trim().length>0&&selectLaptop!='ლეპტოპის ბრენდი'&&selectCPU!='CPU'&&
  CPUInput.match(digRegex)&&stream.match(digRegex)&&memory&&cost.match(digRegex)&&conditionLaptop
  const GoSavePage=(e)=>{
    e.preventDefault()
    // if(!laptopName.test(lapNameRegex)){
      //   setLaptopNameError(true)
      // }else{
        //   setLaptopNameError(false)
        // }
        // if(selectLaptop=='ლეპტოპის ბრენდი'){
          //   setSelectLaptopError(true)
          // }else{
            //   setSelectLaptopError(false)
            // }
            // if(selectCPU=='CPU'){
    //   setSelectCPUError(true)
    // }else{
    //   setSelectCPUError(false)
    // }
    // if(!CPUInput.test(digRegex)){
    //   setCPUInputError(true)
    // }else{
    //   setCPUInputError(false)
    // }
    // if(!stream.test(digRegex)){
    //   setStreamError(true)
    // }else{
    //   setStreamError(false)
    // }
    if(valid){
      setPage(page+1)
    }
  }
  const value={laptop,CPU,laptopName,GoSavePage,LaptopName,selectLaptop,laptopNameError,selectLaptopError,selectCPUError,CPUInputError,streamError,
    SelectLaptop,selectCPU,SelectCPU,CPUInput,InputCpu,stream,Stream,ram,Ram,Memory,memory,date,Date,cost,Cost,conditionLaptop,Condition}

    

    return (
    <thirdPageContext.Provider value={value}>
        {props.children}
    </thirdPageContext.Provider>
  )
}

export default ThirdPageContext
