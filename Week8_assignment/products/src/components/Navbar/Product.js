import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Product () {
//   const navigateFun =useNavigate()
//   const navigateFun =useState()
  
//   const [user,setUser] = useState("karim")
//   console.log("from Render")
 
//   useEffect(()=>{
//     console.log("from mount")
//   })

//   useEffect(()=>{
//     console.log("from update")
//   },[user])

    const [products,setProducts] = useState([])
    const [filter,setFilter] = useState("")
    const [selectedFilters,setSelectedFilters] = useState([]);
    let filters = ["women's clothing", " men's clothing","electronics","jewelery"]
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    console.log(products)
  return (
    <>

        {/* <h3>{user}</h3> */}
        {/* <button onClick={()=>setUser("Ziad")}>Change</button> */}


    {/* <h1>Product</h1>
    <button onClick={()=>navigateFun('/')}>Home</button>
     */}
     {/* <input placeholder='Search Product' />
     <nav>
        <Link to="features">Feature</Link>
        <Link to="news">News</Link>
     </nav>
     <Outlet /> */}

<div className="container">
  <input placeholder='Enter your Product' onChange={(e)=>setFilter(e.target.value)} />
<div className="row row-cols-1 row-cols-md-3 g-4">
  {
    products && 
        products.filter(product=>{
            if(filter===''){
                return product;
            } else if (product.title.toLowerCase().includes(filter.toLowerCase())) {
                return product
            }
        })
    .map((product)=>{
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

export default Product