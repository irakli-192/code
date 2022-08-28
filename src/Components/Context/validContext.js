import React,{createContext, useState} from 'react'

let langDetectorRegex='^[ა-ჰ\s]*$';
export const validContext=createContext()
function ValidContext(props) {
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
   const value={name,lastName,email,phone,changeLastName,changeName,changeEmail,changePhone}
  return (
    <div>
      <validContext.Provider value={value}>
        {props.children}
      </validContext.Provider>
    </div>
  )
}

export default ValidContext