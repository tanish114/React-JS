import React, { useEffect,useState } from 'react'

const Useffect = () => {
    let [count,setcount]=useState(0)

    let inc=()=>{
        setcount(count+1)
    }

    useEffect(()=>{
        console.log("runningg......");
        
    },[])
    // [] is a dependency array this is default when we don't set any value on it so it will run only once
  return (
    <>
      
      <button onClick={inc}>increment</button>
      count:{count}
    </>
  )
}

export default Useffect
