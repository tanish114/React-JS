import React, { useState } from 'react'


const Hook3 = () => {

  let[name,setname]=useState("")
  let[email,setemail]=useState("")

  let handlesubmit=(e)=>{


    // preventDefault stops page from reloading
    e.preventDefault()   
    console.log(name,email);
    
  }
  return (
    <>
      <h1>Form handling</h1>

      <form onSubmit={handlesubmit}>

    Enter your name: <input type="text" onChange={(e)=>{setname(e.target.value)}} /> <br />

    Enter your  email: <input type="text" onChange={(e)=>{setemail(e.target.value)}} /> <br />

    <button type='submit'> save data</button>

      </form>


    </>
  )
}

export default Hook3
