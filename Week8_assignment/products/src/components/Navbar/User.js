import React from 'react'
import {useSearchParams} from 'react-router-dom'
function User () {
    const [searchParams,setSearchParams] = useSearchParams();
    const show = searchParams.get("filter")==="active";
    console.log(show)
    return (
        <>
        <h1>User</h1>
        <button onClick={()=>setSearchParams({filter:"active"})}>Show</button> 
        </>
    )
}

export default User