import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router";
import router from './routes/router.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
