import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Action() {
    const state = useSelector((state)=>state.details)
    const dispatch =useDispatch()
    const handleDelete =(id)=>{
        return dispatch({
            type:"deleteData",
            playlord:id
        })
    }
  return (
    <div className="container">
        <div className="col-6">

        </div>
        <div className="col-6">
            <table className='table table-border'>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {state && state.map((item,index)=>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td><a className='btn btn-denger' onClick={()=>handleDelete(index)}>X</a></td>
                    </tr>)}
                </tbody>
            </table> 
        </div>
    </div>
  )
}

export default Action