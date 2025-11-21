 import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Navar.css'
// import logo from "../public/vite.svg"
import img from "./assets/react.svg"

 const App=()=>{
// javascript will be written here
// let Tanish=()=>{
//   // alert("hello this is  Tanish")
//   let a=prompt("enter your age")
//   if(a>18){
//     document.write("you are eligible to vote")

//   }
//   else{
//     document.write("not eligible to vote")
//   }
// }

 return(
  <div>
    <Navbar/>
    <h1 style={{color:'red'}}>Home page </h1>
    {/* <img src="slider.png" alt="none" /> */}
    {/* <img src={logo} alt="" /> */}
  <img src={img} alt="" style={{height:"50px",width:"60px"}}/>
    <Footer/>
{/* 
    <button onClick={Tanish}>click me </button> */}
  </div>
  
  
 )

 }

 export default App
 