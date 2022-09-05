import React,{createContext, useContext, useEffect, useState} from 'react'
import FetchContext, { fetchContext } from './fetchContext';

export const navContext=createContext()
const langDetectorRegex=/^[ა-ჰ\s]*$/;

let team_id=0
let position_id=0;
const telRegex=/\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/;
const emailRegex=/^[^@]+@(redberry)\.ge$/;
function NavContext(props) {
  const{team,position}=useContext(fetchContext)
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
  let datas={name,lastName,chosenTeam,chosenPosition,phone,email}
    
    useEffect(()=>{
        const formData=window.localStorage.getItem("dataObj")
        const form=JSON.parse(formData)
        if(formData!=null){
          setName(form.name)
          setLastName(form.lastName)
          setChosenTeam(form.chosenTeam)
          setPhone(form.phone)
          setEmail(form.email)
          setChosenPosition(form.chosenPosition)
        }
        
    },[])
    
    const list=(e)=>{
      e.preventDefault()
      setPage(5)
    }
  
    useEffect(()=>{
      window.localStorage.setItem('dataObj',JSON.stringify(datas))
    })
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
    {team.map(item=>{
      if(item.name==chosenTeam){
          team_id=item.id 
          return team_id      
      }
      
    })}
    {position.map(pos=>{
      if(pos.name==chosenPosition){
        position_id=pos.id
        return position_id
      }
    })}
  
      
    const changePosition=(e)=>{
      setChosenPosition(e.target.value)
      
    }

    const[id,setId]=useState(null)
    const[obj,setObj]=useState({
      user:{
        email:'',
        phone_number:'',
        name:'',
        position_id:'',
        surname:'',
        team_id:''
      },
      laptop:{
        brand_id:'',
        cpu:{
          name:'',
          cores:'',
          threads:''
        },
        hard_drive_type:'',
        image:'',
        name:'',
        price:'',
        purchase_date:'',
        ram:'',
        state:''
      }
    })
    const finalFunction=(id,e)=>{
      e.preventDefault()
      setPage(6)
      console.log(id)
      setId(id)
      fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=bf4d99efef9afdd9a75021b0d084da4b`).then(response=>{
        return response.json()
      }).then(data=>{
        return setObj(data.data)
      })
    }
    const goFunction=(e)=>{
      e.preventDefault();
      if(page===2){
        if(name.trim().length<2){
          setNamesErrors(true)
        }else{
          setNamesErrors(false)
        }
        if(lastName.trim().length<2||!langDetectorRegex.test(lastName)){
          setLastNameErrors(true)
        }else{
          setLastNameErrors(false)
        }
        if(!langDetectorRegex.test(name)){
          setLanErrors(true)
        }else{
          setLanErrors(false)
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
        if(!emailRegex.test(email)){
          setEmailError(true)
        }else{
          setEmailError(false)
        }
        if(phone.trim().length!==13||!telRegex.test(phone)){
          setPhoneError(true)
        }else{
          setPhoneError(false)
        }
          if(name.trim().length>=2&&langDetectorRegex.test(name)&&
        lastName.trim().length>2&&langDetectorRegex.test(lastName)&&
        telRegex.test(phone)&&phone.trim().length===13&&
        emailRegex.test(email)&&chosenTeam!='თიმი'&&chosenPosition!='პოზიცია'
        ){
          setPage(page+1)
        }
      }else{
        setPage(page+1)
      }
    }
    const backFunction=(e)=>{
      e.preventDefault();
      setPage(page-1)
    }
    const welcome=(e)=>{
      e.preventDefault();
      setPage(1)
    }
    // const[member,setMemeber]=useState(true)
    
    // const[id,setId]=useState(null)
    
   
    
    const value={obj,id,finalFunction,welcome,list,position_id,team_id,namesErrors,name,lastName,email,phone,changeLastName,changeName,lanErrors,lastNameErrors,changeEmail,changePhone,changeTeam,
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
