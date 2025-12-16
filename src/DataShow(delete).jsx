import axios from 'axios'
import React, { useEffect, useState } from 'react'

const on = () => {
    const[hotel,sethotel]=useState([])

   let fetchdata=()=>{
   axios.get("http://localhost:3000/hotel").then((res)=>{
    sethotel(res.data)
   })
   .catch((error)=>{
    console.log("api error",error);
    
   })
   }
  useEffect(()=>{
    fetchdata()
  },[])

let deletedata=(id)=>{
    let api=`http://localhost:3000/hotel/${id}`
    axios.delete(api).then(()=>{
        alert("booking canceled");
        fetchdata()
        
    })
}  

  return (
    <>
      <div>
        <h1>hotel</h1>
        <table border="2">
            <thead>
                <tr>
                    <th>Name</th>
                <th>age</th>
                <th>aadharnumber</th>
                <th>checkin</th>
                <th>checkout</th>
                <th>people</th>
                <th>total</th>
                <th>cancel</th>
                </tr>
            </thead>
            <tbody>
                {hotel.map((e)=>(
                    <tr ke={e.id}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.aadharnumber}</td>
                <td>{e.checkin}</td>
                <td>{e.checkout}</td>
                <td>{e.people}</td>
                <td>{e.total}</td>
                <td onClick={()=>{deletedata(e.id)}}>Delete</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </>
  )
}

export default on
