import axios from 'axios'
import React, { useState } from 'react'

const DataShow = () => {

    let [form,setform]=useState({
        name:"",
        age:"",
        aadhar:"",
        city:"",
        checkin:"",
        checkout:"",
        people:"",
    })
    
    let handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
    e.preventDefault();
    let valid=true
    e.preventDefault();
    if (form.name.trim()==""){
        alert("Name cannot be epmty")
        valid=false
    }

    else if(form.aadhar.trim()==""){
        alert("please enter number")
        valid-false
    }

    if(valid){
        let api="http://localhost:3000/hotel"
        axios.post(api,{...form,person:500}).then((res)=>{
            alert("data submitted")
        })
    }
}
  return (
    <>
      <h1>form handling </h1>
      <form onSubmit={handleSubmit}>
      enter name: <input type="text" name="name" value={form.name} onChange={handlechange} />  <br />
      enter age: <input type="text" name="age" value={form.age} onChange={handlechange} />  <br />
      enter aadhar: <input type="text" name="aadhar" value={form.aadhar} onChange={handlechange} />  <br />
      select city
      <select name="city" value={form.city} onChange={handlechange}> <br />
        <option value="bhopal">bhopal</option>
        <option value="indore">indore</option>
        <option value="jabalpur">jabalpur</option>
        <option value="satna">satna</option>
      </select>

      enter checkin: <input type="date" name="checkin" value={form.checkin} onChange={handlechange} />  <br />

      enter checkout: <input type="date" name="checkout" value={form.checkout} onChange={handlechange} />  <br />
    enter people: <input type="text" name="people" value={form.people} onChange={handlechange} />  <br />

    <button type='submit'>save data </button>

    </form>
    </>
  ) 
}

export default DataShow
