import React, { useState } from 'react'

const Filter = () => {
   let[search,setsearch]=useState("")
    let mydata=["tanish","sid","Ram","Shyam"]

    let Filterdata=mydata.filter((e)=>{
      return e.toLowerCase().includes(search.toLowerCase())
    })
  return (
    
    <>
      search <input type="text" value={search} onChange={(e)=>{setsearch(e.target.value)}} name="" id="" />

      <ul>
        {Filterdata.map((e,i)=>(
          <li key={i}>{e}</li>
      
        ))}
      </ul>
    </>
  )
}

export default Filter
