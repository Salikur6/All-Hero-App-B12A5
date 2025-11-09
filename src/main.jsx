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


const data = async () => {
  const res = await fetch('/data.json');
  return res.json();

}

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true, Component: Home,
        loader: data,

        // shouldRevalidate: () => true,


      },
      {
        path: 'app', Component: AllApps,
        loader: data
      },
      {
        path: 'installedapps', Component: InstalledApps
      },
      {
        path: 'appdetails/:id', Component: AppDetails,
        loader: async ({ params }) => {
          const res = await fetch('/data.json');
          const data = await res.json();
          const app = data.find(d => d.id === parseInt(params.id))

          return app;
        }
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
