import React, { useState } from 'react'

const Hook2 = () => {
    // let [name,setname]=useState("")
    // let [city,setcity]=useState("")
    let [character,setcount]=useState("")

    let chrcount=(e)=>{
      
    }

    // let inputchange=(e)=>{
    //     // console.log(e); event
    //     // console.log(e.target); which element      
    //     console.log(e.target.value);
        
    //     setname(e.target.value)
        
    // }

    // let inputcity=(ev)=>{
    //     console.log(ev.target.value);
    //     setcity(ev.target.value)
        
    // }

  return (
    <>
      {/* <h1>input in form </h1> <br />
      Enter name : <input type="text" onChange={inputchange} /> 
      <br />
      your name is {name}
<br />
      enter city: <input type="text" onChange={inputcity} /> <br />
      your city is{city} */}


      enter character: <input type="text" onChange={chrcount} /> <br />
      your character count is{}
    </>
  )
}

export default Hook2
