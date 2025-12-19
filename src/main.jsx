
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './Propse.jsx'
// import App from './Router.jsx'
import App from './DataShow(put).jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
     <App />
  </BrowserRouter>
)