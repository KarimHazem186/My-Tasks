import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Details () {
  const params = useParams()
  const id = params.id; 
  const [product,setProducts]=useState([]) 
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            setProducts(res.data)
            console.log(res.data)
        })
        .catch((err)=>{console.log(err)});
  })
    return (
    <>
    <h1>{product.title}</h1>
    <img src={product.image} />
    </>
  )
}

export default Details