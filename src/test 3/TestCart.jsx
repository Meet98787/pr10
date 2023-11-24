import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function TestCart() {
    const state = useSelector((state)=>state.cart)

    
    const dispatch =useDispatch()
    const handleDelete =(id)=>{
        return dispatch({
            type:"deleteData",
            playlord:id
        })
    }
  return (
    <>

        <div className='row container m-auto'>
            
    
            {state && state.map((item,index)=>
                <div class="row mb-4 d-flex justify-content-between align-items-center container m-auto">
                <div class="col-md-2 col-lg-2 col-xl-2">
                  <img className='cartimg'
                    src={item.img} alt="Cotton T-shirt" />
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                  <h6 class="text-muted">{item.type}</h6>
                  <h6 class="text-black mb-0">{item.name}</h6>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">


                  <input id="form1" min="0" name="quantity" value={item.qty} type="number"
                    class="form-control form-control-sm" disabled/>


                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                  <h6 class="mb-0">{item.price}</h6>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                  <a href="#!" class="text-muted border-2" onClick={()=>handleDelete(index)}><i class="fas fa-times"></i></a>
                </div>
              </div>
                
                )}
        
        </div>
        </>
  )
}
