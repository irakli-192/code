import React,{createContext, useContext, useState} from 'react'

export const navContext=createContext()
const langDetectorRegex=/^[ა-ჰ\s]*$/g;
const langDetectorRegex2=/^[ა-ჰ\s]*$/g;
const telRegex=/\+\s*9\s*9\s*5\s*5\s*[976514]\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*\d\s*/;
const emailRegex=/^[^@]+@(redberry)\.ge$/i
function NavContext(props) {
    const[name,setName]=useState('')
    const[lastName,setLastName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
    const[chosenTeam,setChosenTeam]=useState('თიმი')
    const[chosenPosition,setChosenPosition]=useState('პოზიცია')
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
    const changeTeam=(e)=>{
      setChosenTeam(e.target.value)
    }
    const changePosition=(e)=>{
      setChosenPosition(e.target.value)
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
      if(name.trim().length>2&&langDetectorRegex.test(name)&&
      lastName.trim().length>2&&langDetectorRegex2.test(lastName)&&
      telRegex.test(phone)&&
      emailRegex.test(email)&&chosenTeam!='თიმი'&&chosenPosition!='პოზიცია'
      ){
        setSecondPage(false)
        setThirdPage(true)
      }
    }
    const value={goNextPage,returnPreviousPage,goThirdPage,secondPage,firstPage,thirdPage,name,lastName,email,phone,
    changeLastName,changeName,changeEmail,changePhone,changeTeam,changePosition,chosenTeam,chosenPosition}
  return (
    <div>
      <navContext.Provider value={value}>
        {props.children}
      </navContext.Provider>
    </div>
  )
}

export default NavContext
