import React from 'react'
import './Tailwind.css'
import logo from "../public/vite.svg"
import { FaHome } from "react-icons/fa";
const App = () => {
  return (
   <>
   {/* <div className='text-red-500 border  border-blue-900 w-50 flex items-center  justify-center'>
    hey i am tanish
   </div> */}

   <div className='text-emerald-700 border border-b-emerald-950 flex justify-between items-center rounded-4xl  px-3'>

    <img src={logo} alt="" />
    <ul className='hidden sm:block md:flex items-center justify-center gap-5 '>
      
      <li> <FaHome />home</li>
      <li>about</li>
      <li>contact</li>
    </ul>
    <button type='submit' className='border ' >sign in</button>
  
   </div>
   </>
  )
}

export default App
