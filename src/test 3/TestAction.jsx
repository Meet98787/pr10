import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// const dispatch =useDispatch()

function TestAction() {
    const state = useSelector((state) => state.product)

    const dispatch = useDispatch()
    const handleAdd = (id) => {
        console.log(id)
        return dispatch({
            type: "addCart",
            payload: id
        })
    }

    return (
        <>



            <div className='row'>

                {state && state.map((item, index) =>
                <div class="card mx-auto col-md-3 col-10 mt-5">
                <img class='mx-auto img-thumbnail'
                    src={item.img}
                    width="auto" height="50px"/>
                <div class="card-body text-center mx-auto">
                    <div class='cvp'>
                        <h5 class="card-title font-weight-bold">{item.name}</h5>
                        <p class="card-text">{item.price}</p>
                        <p class="  px-auto">{item.type}</p><br />
                        <a href="#" class="btn cart px-auto" onClick={() => handleAdd(index)}>ADD TO CART</a>
                    </div>
                </div>
            </div>

                    // <div className="product-card col-3" key={item.id}>
                    //     <div class="product-tumb">
                    //         <img src={item.img} alt="" className="img-fliud" />
                    //     </div>
                    //     <div class="product-details">
                    //         <span class="product-catagory">{item.type}</span>
                    //         <h4><a href="">{item.name}</a></h4>
                    //         <p>{item.color}</p>
                    //         <a className='btn' onClick={() => handleAdd(index)}>
                    //             Add Cart +
                    //         </a>
                    //     </div>
                    // </div>
                )}

            </div>
        </>
    )
}
export default TestAction
