import React from 'react'

const Child = (propse) => {
  return (
    <>
    <h1>hello child</h1>

    <p>my name is {propse.myname}</p>
    <p>my age is {propse.age}</p>
    </>
  )
}

export default Child
