import React,{createContext, useState} from 'react'

let langDetectorRegex='^[ა-ჰ\s]*$';
export const validContext=createContext()
function ValidContext(props) {
   const[name,setName]=useState('')
   const[lastName,setLastName]=useState('')
   const[email,setEmail]=useState('')
   const[phone,setPhone]=useState('')
   const value={name,lastName,email,phone}
  return (
    <div>
      <validContext.Provider value={value}>
        {props.children}
      </validContext.Provider>
    </div>
  )
}

export default ValidContext