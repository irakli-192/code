import React, { createContext, useContext, useEffect, useState } from 'react'
import { navContext } from './navContext';

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
  const[laptopName,setLaptopName]=useState('')
  const[selectLaptop,setSelectLaptop]=useState('ლეპტოპის ბრენდი')
  const[selectCPU,setSelectCPU]=useState('CPU')
  const[CPUInput,setCPUInput]=useState('')
  const InputCpu=(e)=>{
    setCPUInput(e.target.value)
  }
  const SelectCPU=(e)=>{
    setSelectCPU(e.target.value)
  }
  const LaptopName=(e)=>{
    setLaptopName(e.target.value)
  }
  const SelectLaptop=(e)=>{
    setSelectLaptop(e.target.value)
  }
  const GoSavePage=(e)=>{
    e.preventDefault()
    setPage(page+1)
  }
  const value={laptop,CPU,laptopName,GoSavePage,LaptopName,selectLaptop,SelectLaptop,selectCPU,SelectCPU,CPUInput,InputCpu}

    

    return (
    <thirdPageContext.Provider value={value}>
        {props.children}
    </thirdPageContext.Provider>
  )
}

export default ThirdPageContext
