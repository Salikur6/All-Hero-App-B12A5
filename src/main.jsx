import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import AllApps from './components/AllApps/AllApps.jsx'
import InstalledApps from './components/InstalledApps/InstalledApps.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true, Component: Home,
      },
      {
        path: 'app', Component: AllApps,
      },
      {
        path: 'installedapps', Component: InstalledApps
      },
      {
        path: '*', Component: NotFound,
      },
    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
