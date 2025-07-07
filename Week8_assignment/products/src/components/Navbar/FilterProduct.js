import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import product from '../../data.json'
function FilterProduct () {
    const [products,setProducts] = useState(product)
    const [filter,setFilter] = useState("")
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            // console.log(res.data)
            setProducts(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    // console.log(products)

    const handleFilters = (category) => {
        // products.map((product)=>{
            // console.log(products)
            const categoryItems = product.filter((currCategory)=>{
                // console.log(categoryItems)
                return currCategory.category === category
            })
            setProducts(categoryItems)
        // })
       
    }
  return (
    <>
        <div className="container mt-4">
            <button type='button' className='btn btn-primary m-4' onClick={()=>handleFilters("women's clothing")}>women's clothing</button>
            <button type='button' className='btn btn-primary m-4' onClick={()=>handleFilters("men's clothing")} >men's clothing</button>
            <button type='button' className='btn btn-primary m-4'onClick={()=>handleFilters("electronics")}>electronics</button>
            <button type='button' className='btn btn-primary m-4' onClick={()=>handleFilters("jewelery")}>jewelery</button>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            // products && 
            //     products.filter(product=>{
            //         if(filter===''){
            //             return product;
            //         } else if (product.title.toLowerCase().includes(filter.toLowerCase())) {
            //             return product
            //         }
            //     })
            products.map((product)=>{
                return (
                    <div key={product.id} className="col">
                    <div className="card"> 
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title.slice(1,20)}</h5>
                        <p className="card-text">{product.description.slice(1,150)}</p>
                        <Link to={`/details/${product.id}`}>Details</Link>
                    </div>
                    </div>
                </div>
                )
            })
        }
        
        </div>
        </div>
    </>
)
}

export default FilterProduct