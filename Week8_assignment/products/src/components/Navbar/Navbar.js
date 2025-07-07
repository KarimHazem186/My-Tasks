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
        <NavLink style={compStyle} to="/about">About</NavLink>
        <NavLink style={compStyle} to="/contact">Contact</NavLink>
        <NavLink style={compStyle} to="/product">Product</NavLink>
        <NavLink style={compStyle} to="/filter">Filter Product</NavLink>
    </nav>
    </>
  )
}

export default Navbar