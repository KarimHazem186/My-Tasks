import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home () {
 const navigateFun =useNavigate()
  return (
    <>
    <h1>Home</h1>
    <button onClick={()=>navigateFun('/product')}>Product</button>
    </>
  )
}

export default Home