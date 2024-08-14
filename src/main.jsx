import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from "react-router-dom"
import { Home, About, Contact, Project, Scantodine, Jarvis, AutoVideoGenerator, FlipKart, Microsoft, Youtube } from './components/index.js'
import Layout from './Layout.jsx'
import ProjectLayout from './ProjectLayout.jsx'

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
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projectlayout' element={<ProjectLayout />}>
        <Route index element={<Project />} />
        <Route path='scantodine' element={<Scantodine />} />
        <Route path='jarvisai' element={<Jarvis />} />
        <Route path='microsoftClone' element={<Microsoft />} />
        <Route path='autoVideoGenerator' element={<AutoVideoGenerator />} />
        <Route path='youtubeClone' element={<Youtube />} />
        <Route path='flipkartClone' element={<FlipKart />} />
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
