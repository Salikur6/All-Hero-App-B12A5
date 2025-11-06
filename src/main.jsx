import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import AllApps from './components/AllApps/AllApps.jsx'
import InstalledApps from './components/InstalledApps/InstalledApps.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import AppDetails from './components/AppDetails/AppDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true, Component: Home,
        loader: () => fetch('../data.json'),
        HydrateFallback: () => <span className="loading loading-bars loading-xl"></span>,

        // shouldRevalidate: () => true,


      },
      {
        path: 'app', Component: AllApps,
        loader: () => fetch('../data.json'),
        HydrateFallback: () => <span className="loading loading-bars loading-xl"></span>,
      },
      {
        path: 'installedapps', Component: InstalledApps
      },
      {
        path: 'appdetails/:id', Component: AppDetails,
        loader: ({ params }) => fetch(`../data.json/${params.id}`)
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
