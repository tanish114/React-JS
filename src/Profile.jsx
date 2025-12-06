import React from 'react'

const  Profile = (props) => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
      <img 
        src={props.image} 
        alt="Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h2>{props.name}</h2>
      <p>{props.city}</p>
    </div>
    </>
  )
}

export default Profile
