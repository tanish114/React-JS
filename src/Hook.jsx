import React, { useState } from 'react'

const Hook = () => {
    // let[any variable,function]=useState(initial value)  ---------syntax of usestate

    let [count, setcount]=useState(0)
    let inc=()=>{
        setcount(count+1)
        console.log(count);
        
    }

    let dec=()=>{
        setcount(count-1)
        console.log(count);
        
    }

    let res=()=>{
        setcount(0)
        console.log(count);
        
        
    }

  return (
    <>
      <button onClick={inc}>increment</button> <br />
      <button onClick={dec}>decrement</button> <br />
      <button onClick={res}>reset</button>



      <p>count: {count}</p>
    </>
  )
}

export default Hook
