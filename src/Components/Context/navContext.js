import React,{createContext, useState} from 'react'
export const navContext=createContext()
function NavContext(props) {
    const[secondPage,setSecondPage]=useState(false)
    const[firstPage,setFirstPage]=useState(true)
    const goNextPage=()=>{
        setFirstPage(false)
        setSecondPage(true)
    }
    const returnPreviosPage=()=>{
        setSecondPage(false)
        setFirstPage(true)
    }
    const value={goNextPage,returnPreviosPage,secondPage,firstPage}
  return (
    <div>
      <navContext.Provider value={value}>
        {props.children}
      </navContext.Provider>
    </div>
  )
}

export default NavContext
