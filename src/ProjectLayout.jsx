import React from 'react'
import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom";

function ProjectLayout() {
  return (
    <>
        <Outlet />
    </>
  )
}

export default ProjectLayout