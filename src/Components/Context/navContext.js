import React,{createContext, useContext, useState} from 'react'

export const navContext=createContext()
const langDetectorRegex=/^[ა-ჰ\s]*$/;

const telRegex=/\+*9*9*5*5*[976514]*\d*\d*\d*\d*\d*\d*\d*/;
const emailRegex=/^[^@]+@(redberry)\.ge$/;
function NavContext(props) {
    const[name,setName]=useState('')
    const[namesErrors,setNamesErrors]=useState(false)
    const[selectError,setSelectError]=useState(false)
    const[selectError2,setSelectError2]=useState(false)
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
      lastName.trim().length>2&&langDetectorRegex.test(lastName)&&
      telRegex.test(phone)&&phone.trim().length===13&&
      emailRegex.test(email)&&chosenTeam!='თიმი'&&chosenPosition!='პოზიცია'
      ){
        setSecondPage(false)
        setThirdPage(true)
      }
      if(chosenTeam=='თიმი'){
        setSelectError(true)
      }else{
        setSelectError(false)
      }
      if(chosenTeam!=='თიმი'&&chosenPosition=='პოზიცია'){
        setSelectError2(true)
      }else{
        setSelectError2(false)
      }
    }
    const value={goNextPage,namesErrors,returnPreviousPage,goThirdPage,secondPage,firstPage,thirdPage,name,lastName,email,phone,
    changeLastName,changeName,changeEmail,changePhone,changeTeam,changePosition,selectError2,chosenTeam,chosenPosition,selectError}
  return (
    <div>
      <navContext.Provider value={value}>
        {props.children}
      </navContext.Provider>
    </div>
  )
}

export default NavContext
