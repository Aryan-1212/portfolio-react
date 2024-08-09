import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom"
import { Home, About, Contact, Project } from './components/index.js'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
//   [
//   {
//     path:"/",
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contact",
//         element: <Contact />
//       },
//       {
//         path:"projects",
//         element: <Project />
//       }
//     ]
//   },
// ]
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Project />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
