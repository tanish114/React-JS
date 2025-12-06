import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Hook3 = () => {

  // let[name,setname]=useState("")
  // let[email,setemail]=useState("")
let navigate=useNavigate()
  let [form,setform]=useState({
    name:"",
    email:"",
    number:"",
    age:"",
  })

  let handlechange=(e)=>{
setform({...form ,[e.target.name] : e.target.value})
  }

  let handlesubmit=(e)=>{

  let valid=true
    // preventDefault stops page from reloading
    // e.preventDefault()   
    // console.log(name,email);
    e.preventDefault() ;
    console.log(form.name);
    

    if(form.name.trim()==""){
      alert("name cannot be empty")
    }
    else if(form.number.trim()==""){
      alert("name cannot be empty")
      valid=false
    }
   if(valid){
    alert("form submitted")

    localStorage.setItem("name",form.name)
    localStorage.setItem("email",form.email)
    localStorage.setItem("number",form.number)

    Navigate('/Home')
   }
    
  }
  return (
    <>
      <h1>Form handling</h1>

      <form onSubmit={handlesubmit}>

    {/* Enter your name: <input type="text" name='name' value={form.name} onChange={(e)=>{setname(e.target.value)}} /> <br /> */}
    Enter your name: <input type="text" name='name' value={form.name} onChange={handlechange} /> <br /> <br />

    {/* Enter your  email: <input type="text" name='email' value={form.email} onChange={(e)=>{setemail(e.target.value)}} /> <br /> */}
    Enter your email: <input type="text" name='email' value={form.email} onChange={handlechange}/> <br /> <br />

    {/* Enter Number: <input type="text" name="number" value={form.number} onChange={(e)=>{setnumber(e.target.value)}} /> <br /> */}
    Enter your number: <input type="text" name='number' value={form.number} onChange={handlechange} /> <br /> <br />

    

    <button type='submit'> save data</button>

      </form>


    </>
  )
}

export default Hook3
