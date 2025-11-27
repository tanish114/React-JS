import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        
       <header>
             
             <ul>
                <li> <Link to="/"> Home </Link>     </li>
                <li> <Link to='/about'> About</Link>   </li>
                <li> <Link to='/ser'> Service</Link>  </li>
                <li> <Link to='/contact'> Contact</Link>  </li>
             </ul>

       </header>
            <hr />
            {/* Child component will appear here  */}
          <Outlet/>   

<hr />
         <h1> LAyout  Footer </h1>    

    </>
  )
}

export default Layout
