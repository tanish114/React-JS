import React from 'react'

const Map = () => {
    // let mydata=["tanish","sid","Ram","Shyam"] array

    // array of object 
    let data=[
    {
        id:1,
        name:"tanish",
        city:"bhopal",
    },
    {
       id:2,
        name:"ram",
        city:"bhopal",
    },
     {
        id:3,
        name:"shyam",
        city:"bhopal",
    },

]

  return (
    <>
      <h1>Map</h1>
      {/* array */}
{/* 
      <ul>
    {mydata.map((e,i)=> (
    <li key={i}>{e}</li>
    ))}

      </ul> */}
      {/* array of object */}

      {data.map((e)=>(
        <div key={e.id}>
        <h1>{e.name}</h1>
        <p>{e.city}</p>
        </div>
      ))}
    </>
  )
}

export default Map
