
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Redux_toolkit.jsx'
import store from './redux/store.js'
// import App from './Propse.jsx'
// import App from './Router.jsx'
// import App from './Searching_in_table.jsx'
import UserContext from './CreateContext'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

// let mydata={
//   myname:"tanish",
//   myage:25,
  
// }

createRoot(document.getElementById('root')).render(
  // <UserContext.Provider value={mydata}>
  
   <Provider store={store}>
     <App />
     </Provider>

  

  // </UserContext.Provider>
)