import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/AllRoutes'
import { ThemeProvider } from './context/ThemeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
       <RouterProvider router={router} />
     </ThemeProvider>
       
  </StrictMode>,
)
