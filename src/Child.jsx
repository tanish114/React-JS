import React from 'react'

const Child = ({mydata}) => {
    let{name,age,city}=mydata
  return (
    <>
    <h1>hello child</h1>

    {/* <p>my name is {propse.myname}</p>
    <p>my age is {propse.age}</p> */}


  {/* <p>my name is {mydata.name}</p>
  <p>my age is {mydata.age}</p> */}

  <p>my name is {name}</p>
  <p>my age is {age}</p>
   
    </>
  )
}

export default Child
