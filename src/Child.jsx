import React from 'react'

const Child = (Propse) => {
    // let{name,age,city}=mydata
  return (
    <>
    {/* <h1>hello child</h1>

    {/* <p>my name is {propse.myname}</p>
    <p>my age is {propse.age}</p> */}


  {/* <p>my name is {mydata.name}</p>
  <p>my age is {mydata.age}</p> */}

  {/* <p>my name is {name}</p>
  <p>my age is {age}</p>  */}

  

  <h1>my cart</h1>
  <div id="cart-item" style={{border:"2px solid black"}}>
    <img src={Propse.img} alt="none" style={{height:"50px",width:"60px"}}/> <br />
    <h3>{Propse.h3}</h3>
    <p>{Propse.price}</p>
  </div>
        
  
   
    </>
  )
}

export default Child
