import React, { useState } from 'react'


const HW = () => {
  let[count,setcount]=useState("")
  return (
    <>
      enter name: <input type="text" onChange={(e)=>{setcount(e.target.value.length)}} /> <br />

      the count of character: {count}

      

      <button>red</button>

      <button>Change</button>

      

    </>
  )
}

export default HW
