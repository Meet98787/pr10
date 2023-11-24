import React from 'react'
import { Link } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'

function TestHeder() {
    const cartQun =useSelector((state)=>state.cart.length)
  return (
    <nav class="navbar navbar-light bg-light mb-2">
    <div class="container-fluid">
        <Link to={"/"} class="navbar-brand nav-link" >Product</Link>
        {/* <a class="navbar-brand"></a> */}
        <form class="d-flex">

            <Link to={"/cart"} class="btn btn-outline-success" >Cart {cartQun}</Link>
            {/* <button class="btn btn-outline-success" type="submit"></button> */}
        </form>
    </div>
</nav>
  )
}

export default TestHeder