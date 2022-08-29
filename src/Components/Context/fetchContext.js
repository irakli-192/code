import React, { createContext, useEffect, useState } from 'react'

export const fetchContext=createContext()
function FetchContext(props) {
    const[team,setTeam]=useState([])
    const[position,setPosition]=useState([])
    useEffect(()=>{
        fetch('https://pcfy.redberryinternship.ge/api/teams').then(response=>{
            return response.json()
        }).then(data=>{
            setTeam(data.data)
        })
    },[])
    useEffect(()=>{
        fetch('https://pcfy.redberryinternship.ge/api/positions').then(response=>{
            return response.json()
        }).then(data=>{
            setPosition(data.data)
        })
    },[])
    const value={team,position}
  return (
    <fetchContext.Provider value={value}>
        {props.children}
    </fetchContext.Provider>
  )
}

export default FetchContext
