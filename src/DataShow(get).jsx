import axios from 'axios'
import React, { useEffect } from 'react'

const DataShow1 = () => {
    
  


    useEffect(()=>{
        let api="http://localhost:3000/hotel"
        axios.get(api).then((res)=>{
            console.log(res.data)

        })
    },[])
  return (
    <>
      
      
    </>
  )
}

export default DataShow1
