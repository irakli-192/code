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
  const[urlError,setUrlError]=useState(false)


  const[url,setUrl]=useState(null)
  const[type,setType]=useState('')
  const[notUrl,setNotUrl]=useState(true)
  const[laptopName,setLaptopName]=useState('')
  const[selectLaptop,setSelectLaptop]=useState('ლეპტოპის ბრენდი')
  const[selectCPU,setSelectCPU]=useState('CPU')
  const[CPUInput,setCPUInput]=useState('')
  const[stream,setStream]=useState('')
  const[memory,setMemory]=useState(false)
  const[memory2,setMemory2]=useState(false)
  const[ram,setRam]=useState('')
  const[date,setDate]=useState('')
  const[cost,setCost]=useState('')
  const[conditionLaptop,setConditionLaptop]=useState(false)
  const[conditionLaptop2,setConditionLaptop2]=useState(false)
  let datas2={laptopName,selectLaptop,selectCPU,CPUInput,stream,memory,ram,date,cost,conditionLaptop,conditionLaptop2,memory2,url}
  const uploadPhoto=(e)=>{
    const file=e.target.files[0];
    console.log(file)
    setType(file.name)
    const reader=new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      setUrl(reader.result)
    } 
    setNotUrl(false)
  }
  useEffect(()=>{
    const formData2=window.localStorage.getItem("dataObj2")
    const form2=JSON.parse(formData2)
    if(formData2!=null){
      setLaptopName(form2.laptopName)
      setSelectLaptop(form2.selectLaptop)
      setSelectCPU(form2.selectCPU)
      setCPUInput(form2.CPUInput)
      setStream(form2.stream)
      setMemory(form2.memory)
      setMemory2(form2.memory2)
      setRam(form2.ram)
      setCost(form2.cost)
      setConditionLaptop(form2.conditionLaptop)
      setConditionLaptop2(form2.conditionLaptop2)
      setDate(form2.date)
    }
  },[])
  
  useEffect(()=>{
    window.localStorage.setItem('dataObj2',JSON.stringify(datas2))
  })
  const LaptopName=(e)=>{
    setLaptopName(e.target.value)
  }
  const Condition=(e)=>{
    setConditionLaptop(e.target.checked)
    setConditionLaptop2(!e.target.checked)
  }
  const Condition2=(e)=>{
    setConditionLaptop2(e.target.checked)
    setConditionLaptop(!e.target.checked)
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
    setMemory2(!e.target.checked)  
  }
  const Memory2=(e)=>{
    setMemory2(e.target.checked)
    setMemory(!e.target.checked)  

    
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
  const valid=lapNameRegex.test(laptopName)&&laptopName.trim().length>0&&selectLaptop!='ლეპტოპის ბრენდი'&&selectCPU!='CPU'&&url!=null&&
  digRegex.test(CPUInput)&&digRegex.test(stream)&&(memory||memory2)&&digRegex.test(cost)&&(conditionLaptop||conditionLaptop2)&&digRegex.test(ram)
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
    if(url==null){
      setUrlError(true)
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
    if(!memory&&!memory2){
      setRamTypeError(true)
    }else{
      setRamTypeError(false)
    }
    if(!digRegex.test(cost)){
      setCostError(true)
    }else{
      setCostError(false)
    }
    if(!conditionLaptop&&!conditionLaptop2){
      setConditionError(true)
    }else{
      setConditionError(false)
    }
    if(valid){
      setPage(page+1)
    }
    console.log(conditionLaptop,conditionLaptop2)
  }
  const value={urlError,type,notUrl,uploadPhoto,url,memory2,Memory2,conditionLaptop2,Condition2,conditionError,costError,ramTypeError,ramError,laptop,CPU,laptopName,GoSavePage,LaptopName,selectLaptop,laptopNameError,selectLaptopError,selectCPUError,CPUInputError,streamError,
    SelectLaptop,selectCPU,SelectCPU,CPUInput,InputCpu,stream,Stream,ram,Ram,Memory,memory,date,Date,cost,Cost,conditionLaptop,Condition}

    

    return (
    <thirdPageContext.Provider value={value}>
        {props.children}
    </thirdPageContext.Provider>
  )
}

export default ThirdPageContext
