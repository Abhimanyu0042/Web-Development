import React from 'react'
// import { FaBars} from 'react-icons/fa';

const navstyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    flexWrap: 'Wrap',
    listStyle:'none',
    alignItems: 'center',
    marginTop: '20px'

}
const navBody={
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'noWrap',
  gap: '20px',
  alignItems: 'center',
}

const baricon= {
  fontSize: '2rem',
  paddingTop: '20px',
  display: 'none'
}


function Navbar() {
  return (
    <div style={navBody}>
    <div style={navstyle}>
      <h1 style={{color: 'red', fontSize: '2.2rem'}}>Buletin</h1>
      <li style={{fontSize: '1.5rem'}}> | </li>
      <li>Stories</li>
      <li>Community</li>
      <li>Subscribe</li>
    </div>
    {/* <div style={baricon}><FaBars/></div> */}
    </div>
  )
}

export default Navbar
