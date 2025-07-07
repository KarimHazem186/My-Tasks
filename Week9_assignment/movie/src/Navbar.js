import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar () {
  const compStyle = ({isActive})=>{
    return {
        textDecoration:isActive ? 'none' : 'underline',
        fontWeight:isActive ? 'bold' : 'normal',
        color:"red"
    }
  }
    return (
    <>
    <nav>
        <NavLink style={compStyle} to="/">Home</NavLink>
        <NavLink style={compStyle} to="/movie">Movie</NavLink>
    </nav>
    </>
  )
}

export default Navbar