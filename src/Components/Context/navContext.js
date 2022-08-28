import React,{createContext, useContext, useState} from 'react'

export const navContext=createContext()
let langDetectorRegex='^[ა-ჰ\s]*$';
function NavContext(props) {
    const[name,setName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const changeName=(e)=>{
      setName(e.target.value)
    }
    const changeLastName=(e)=>{
      setLastName(e.target.value)
    }
    const changeEmail=(e)=>{
      setEmail(e.target.value)
    }
    const changePhone=(e)=>{
      setPhone(e.target.value)
    }
    
    const[secondPage,setSecondPage]=useState(false)
    const[firstPage,setFirstPage]=useState(true)
    const[thirdPage,setThirdPage]=useState(false)
    const goNextPage=(e)=>{
        e.preventDefault();
        setFirstPage(false)
        setSecondPage(true)
    }
    const returnPreviousPage=(e)=>{
        e.preventDefault();
        setSecondPage(false)
        setFirstPage(true)
    }
    const goThirdPage=(e)=>{
      e.preventDefault();
      if(name.trim().length>2){
        setSecondPage(false)
        setThirdPage(true)
      }
    }
    const value={goNextPage,returnPreviousPage,goThirdPage,secondPage,firstPage,thirdPage,name,lastName,email,phone,
    changeLastName,changeName,changeEmail,changePhone}
  return (
    <div>
      <navContext.Provider value={value}>
        {props.children}
      </navContext.Provider>
    </div>
  )
}

export default NavContext
