import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router';
import {
  RouterProvider,
} from "react-router-dom"; 
import { CookiesProvider } from 'react-cookie';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <CookiesProvider defaultSetOptions={{ path: '/' }}>
      
    

    <RouterProvider router={router} />
    </CookiesProvider>
  </StrictMode>,
)
