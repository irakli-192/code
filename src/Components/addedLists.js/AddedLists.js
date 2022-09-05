import React,{useState,useEffect, useContext} from 'react'
import './AddedLists.css'
import Template from './Template'
import back from '../../assets/back.png'
import Group4 from '../../assets/Group4.png'
import { navContext } from '../Context/navContext'
import Member from './Member'

function AddedLists() {
    
    const[templ,setTempl]=useState([])
    const{finalFunction}=useContext(navContext)
    useEffect(()=>{
        fetch('https://pcfy.redberryinternship.ge/api/laptops?token=bf4d99efef9afdd9a75021b0d084da4b').then(response=>{
            return response.json()
        }).then(data=>{
            return setTempl(data.data)
        })
    },[])
   
    console.log(templ)
    return (
        <div>
            <div className='main_window'>
                <div className='return_button'>
                    <img src={back} alt='back'/>
                </div>
                <div className='return_button2'>
                    <img src={Group4} alt='back'/>
                </div>
                <h1 className='recordinglists_header'>ჩანაწერების სია</h1>
                <div className='recordinglists'>
                    {templ.map(item=>{
                        return (
                            <div onClick={(e)=>{finalFunction(item.laptop.id,e)}} className='member' key={item.laptop.id}>
                                <Template 
                                id={item.laptop.id}
                                image={item.laptop.image}
                                member_name={item.user.name}
                                member_surname={item.user.surname}
                                laptop_name={item.laptop.name}/>
                            </div>
                    
                        )
                    })}
                </div>
            </div>
           {/* {!member&&<Member id={id}/>} */}
        </div>
    )
}

export default AddedLists
