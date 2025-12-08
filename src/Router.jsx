import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Layout from './Layout'
import About from './About.jsx'
import Service from './Service.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'

const Router = () => {
  return (
    <>
       {/* main.jsx =>              <BroweserRouter> */}
       {/* (App.jsx) Router.jsx =>   Routes , Route  */}
       {/* Layout.jsx =>              Outlet , Link  */}


          <Routes> 
             
             <Route  path='/' element={<Layout/>}  >
                
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='ser' element={<Service/>} />
                <Route path='contact' element={<Footer/>} />
                <Route path='*' element={<h1>Error</h1>} />


             </Route>
            
            
         </Routes>
    
      
    </>
  )
}

export default Router
