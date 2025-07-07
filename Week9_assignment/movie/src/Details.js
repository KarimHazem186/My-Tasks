import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Details () {
  const {id} = useParams()
  const [product,setProducts]=useState([]) 
    useEffect(()=>{
        axios.get(`http://localhost:9000/movies/${id}`)
        .then((res)=>{
            setProducts(res.data)
            // console.log(res.data)
        })
        .catch((err)=>{console.log(err)});
  })
    return (
    <>
    <h1 style={{margin:"20px"}}>{product.Title}</h1>
    <img style={{margin:"20px"}} src={product.Poster} alt='' />
    <div>
    <button style={{margin:"20px"}} >Watch Now</button>
    </div>
    </>
  )
}

export default Details