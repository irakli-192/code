import React, { createContext, useEffect, useState } from 'react'

export const thirdPageContext=createContext();
function ThirdPageContext(props) {
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
    const value={laptop,CPU}
    return (
    <thirdPageContext.Provider value={value}>
        {props.children}
    </thirdPageContext.Provider>
  )
}

export default ThirdPageContext
