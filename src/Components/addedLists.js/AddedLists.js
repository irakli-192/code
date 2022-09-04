import React,{useState,useEffect} from 'react'
import './AddedLists.css'
import Template from './Template'

function AddedLists() {
    const[templ,setTempl]=useState([])
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
