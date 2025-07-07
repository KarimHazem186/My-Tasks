import React from 'react'
import { useParams } from 'react-router-dom'

function DefUser () {
    const params = useParams()
    const id = params.userId;
    console.log(id)
    return (
    <div>
       <h1> DefUser </h1>
       <p>User Number {id}</p>
    </div>
  )
}

export default DefUser