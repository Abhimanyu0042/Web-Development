import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <ul>
            {/* Link is used to load page components
             */}
            <li><Link to="/price">Pricing</Link></li>
            <li><Link to="/about" state={{myKey: 'imp data', luckyNumber: '12'}}>About us</Link></li>
            <li><Link to="/Login"><button>Login now</button></Link></li>
            <li><Link to="/Books"><button>Books</button></Link></li>

        </ul>
    </nav>
  )
}

export default Navigation
