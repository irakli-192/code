import React,{useState,useEffect, useContext} from 'react'
import './AddedLists.css'
import Template from './Template'
import back from '../../assets/back.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'

function AddedLists() {
    const[templ,setTempl]=useState([])
    const{welcome}=useContext(navContext)
    useEffect(()=>{
        fetch('https://pcfy.redberryinternship.ge/api/laptops?token=bf4d99efef9afdd9a75021b0d084da4b').then(response=>{
            return response.json()
        }).then(data=>{
            return setTempl(data.data)
        })
    },[])
    console.log(templ)
    return (
        <div className='main_window'>
            <div className='return_button'>
                <img src={back} alt='back' onClick={welcome}/>
            </div>
            <div className='return_button2'>
                <img src={Group4} alt='back' onClick={welcome}/>
            </div>
            <h1 className='recordinglists_header'>ჩანაწერების სია</h1>
            <div className='recordinglists'>
                {templ.map(item=>{
                    return (
                        <div className='member' key={item.laptop.id}>
                             <Template
                              image={item.laptop.image}
                              member_name={item.user.name}
                              member_surname={item.user.surname}
                              laptop_name={item.laptop.name}/>
                        </div>
                   
                    )
                })}
            </div>
        </div>
    )
}

export default AddedLists
