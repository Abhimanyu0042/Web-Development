import React from 'react'
import {  useNavigate,Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

function ProtectedRoute() {

    const isLoggedIn = true;
    const navigate = useNavigate();
  
    return (
    <>
              {isLoggedIn? <Outlet/> : <Navigate to="/login"/>}
    </>
  )
}

export default ProtectedRoute
