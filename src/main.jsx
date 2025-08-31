import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import Layout from './Layout/Layout.jsx'
import { ProfileProvider } from './context/ProfileContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileProvider>

    <RouterProvider router={router} >
      <Layout />
    </RouterProvider>
    </ProfileProvider>
  </StrictMode>,
)
