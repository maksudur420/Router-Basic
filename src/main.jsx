import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ErrorPage from './components/ErrorPage';

const router =createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>,
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
