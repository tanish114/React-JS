
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './Propse.jsx'
// import App from './Router.jsx'
// import App from './Searching_in_table.jsx'
import UserContext from './CreateContext'
import { BrowserRouter } from 'react-router-dom'

let mydata={
  myname:"tanish",
  myage:25,
  
}

createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={mydata}>
  <BrowserRouter>
     <App />
  </BrowserRouter>

  </UserContext.Provider>
)