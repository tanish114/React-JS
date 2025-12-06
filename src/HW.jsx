import React, { useState } from 'react'


const HW = () => {
  const[text,settext]=useState("")
  const[display,setdisplay]=useState("")

  const handleclick=()=>{
    setdisplay(text)
  }
 
  return (
    <>
  <input type="text" placeholder="enter text" onChange={(e)=>settext(e.target.value)} />

  <button onClick={handleclick}>show text</button>

  <h2>{display}</h2>

      

    </>
  )
}

export default HW
