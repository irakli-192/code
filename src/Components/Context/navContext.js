import React,{createContext, useContext, useState} from 'react'

export const navContext=createContext()
const langDetectorRegex=/^[ა-ჰ\s]*$/;

const telRegex=/\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/;
const emailRegex=/^[^@]+@(redberry)\.ge$/;
function NavContext(props) {
    const[name,setName]=useState('')
    const[page,setPage]=useState(1)
    const[namesErrors,setNamesErrors]=useState(false)
    const[lastNameErrors,setLastNameErrors]=useState(false)
    const[lanErrors,setLanErrors]=useState(false)
    const[selectError,setSelectError]=useState(false)
    const[emailError,setEmailError]=useState(false)
    const[phoneError,setPhoneError]=useState(false)
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
  
    const goFunction=(e)=>{
      e.preventDefault();
      if(page===2){
        // if(name.trim().length<2){
        //   setNamesErrors(true)
        // }else{
        //   setNamesErrors(false)
        // }
        // if(lastName.trim().length<2||!langDetectorRegex.test(lastName)){
        //   setLastNameErrors(true)
        // }else{
        //   setLastNameErrors(false)
        // }
        // if(!langDetectorRegex.test(name)){
        //   setLanErrors(true)
        // }else{
        //   setLanErrors(false)
        // }
        // if(chosenTeam=='თიმი'){
        //   setSelectError(true)
        // }else{
        //   setSelectError(false)
        // }
        // if(chosenTeam!=='თიმი'&&chosenPosition=='პოზიცია'){
        //   setSelectError2(true)
        // }else{
        //   setSelectError2(false)
        // }
        // if(!emailRegex.test(email)){
        //   setEmailError(true)
        // }else{
        //   setEmailError(false)
        // }
        // if(phone.trim().length!==13||!telRegex.test(phone)){
        //   setPhoneError(true)
        // }else{
        //   setPhoneError(false)
        // }
        //   if(name.trim().length>=2&&langDetectorRegex.test(name)&&
        // lastName.trim().length>2&&langDetectorRegex.test(lastName)&&
        // telRegex.test(phone)&&phone.trim().length===13&&
        // emailRegex.test(email)&&chosenTeam!='თიმი'&&chosenPosition!='პოზიცია'
        // ){
          setPage(page+1)
        // }
      }else{
        setPage(page+1)
      }
    }
    const backFunction=(e)=>{
      e.preventDefault();
      setPage(page-1)
    }
    
    const value={namesErrors,name,lastName,email,phone,changeLastName,changeName,lanErrors,lastNameErrors,changeEmail,changePhone,changeTeam,
      changePosition,phoneError,emailError,selectError2,chosenTeam,chosenPosition,selectError,backFunction,goFunction,page,setPage}
  return (
    <div>
      <navContext.Provider value={value}>
        {props.children}
      </navContext.Provider>
    </div>
  )
}

export default NavContext
