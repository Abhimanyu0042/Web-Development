import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function Price() {

  // const location = useLocation(); //Its says current path

  return (
    <div>
      Pricing
      {/* <nav>
        <Link to={location.pathname + "/free"}>Free</Link>
        <Link to={location.pathname +"/Premium"}>Premium</Link>
        <Link to={location.pathname +"/freemium"}>Freemium</Link>
      </nav> */}
      <Outlet/>
    </div>
  )
}

export default Price
