import React, { createContext, useContext, useEffect, useState } from 'react'
import { navContext } from './navContext';
let lapNameRegex=/^[a-zA-Z0-9_+=()!@#$%\^&*']*$/
let digRegex=/^\d+$/;
export const thirdPageContext=createContext();
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
  const[ramError,setRamError]=useState(false)
  const[ramTypeError,setRamTypeError]=useState(false)
  const[costError,setCostError]=useState(false)
  const[conditionError,setConditionError]=useState(false)
  
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
  const valid=lapNameRegex.test(laptopName)&&laptopName.trim().length>0&&selectLaptop!='ლეპტოპის ბრენდი'&&selectCPU!='CPU'&&
  digRegex.test(CPUInput)&&digRegex.test(stream)&&memory&&digRegex.test(cost)&&conditionLaptop&&digRegex.test(ram)
  const GoSavePage=(e)=>{
    e.preventDefault()
    if(!lapNameRegex.test(laptopName)||laptopName.trim().length===0){
      setLaptopNameError(true)      
    }else{
      setLaptopNameError(false)
    }
    if(selectLaptop=='ლეპტოპის ბრენდი'){
      setSelectLaptopError(true)
    }else{
      setSelectLaptopError(false)
    }
    if(selectCPU=='CPU'){
      setSelectCPUError(true)
    }else{
      setSelectCPUError(false)
    }
    if(!digRegex.test(CPUInput)){
      setCPUInputError(true)
    }else{
      setCPUInputError(false)
    }
    if(!digRegex.test(stream)){
      setStreamError(true)
    }else{
      setStreamError(false)
    }
    if(!digRegex.test(ram)){
      setRamError(true)
    }else{
      setRamError(false)
    }
    if(memory==false){
      setRamTypeError(true)
    }else{
      setRamTypeError(false)
    }
    if(!digRegex.test(cost)){
      setCostError(true)
    }else{
      setCostError(false)
    }
    if(!conditionLaptop){
      setConditionError(true)
    }else{
      setConditionError(false)
    }
    if(valid){
      setPage(page+1)
    }
  }
  const value={conditionError,costError,ramTypeError,ramError,laptop,CPU,laptopName,GoSavePage,LaptopName,selectLaptop,laptopNameError,selectLaptopError,selectCPUError,CPUInputError,streamError,
    SelectLaptop,selectCPU,SelectCPU,CPUInput,InputCpu,stream,Stream,ram,Ram,Memory,memory,date,Date,cost,Cost,conditionLaptop,Condition}

    

    return (
    <thirdPageContext.Provider value={value}>
        {props.children}
    </thirdPageContext.Provider>
  )
}

export default ThirdPageContext
