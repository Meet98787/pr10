const initial ={
    product:[
        {
            name: 'Shirt', color: 'white', type: 'men', material: 'polyster', brand: 'nike', img: 'https://m.media-amazon.com/images/I/61a93+AuOBL._SX679_.jpg',price:'199$' },
       { name: 'Shadi', color: 'red', type: 'women', material: 'cotton', brand: 'adidas', img: 'https://m.media-amazon.com/images/I/71zXw2z1w3L._SL1500_.jpg',price:'99$' },
       { name: 'Kurta', color: 'green', type: 'Women', material: 'cotton', brand: 'us polo', img: 'https://m.media-amazon.com/images/I/71ypgLw5c4L._SL1500_.jpg',price:'60$' },
       { name: 'T-Shirt', color: 'red', type: 'kids', material: 'polyster', brand: 'nike', img: 'https://m.media-amazon.com/images/I/61IGz4pCdYL._SY679_.jpg',price:'189$' },
       { name: ' Jeans', color: 'white', type: 'men', material: 'polyster', brand: 'nike', img: 'https://m.media-amazon.com/images/I/616xchp1ECL._SL1440_.jpg',price:'789$' },
       
    ],
    cart:[

    ],
}



const TestReducer = (state = initial, action) => {
    if (action.type === "addCart") {
      const selectedProductIndex = action.payload;
      const productToAdd = state.product[selectedProductIndex];
      const isItemInCart = state.cart.some((item) => item.name === productToAdd.name);
  
      if (isItemInCart) {
        const updatedCart = state.cart.map((item) =>
          item.name === productToAdd.name ? { ...item, qty: item.qty + 1 } : item
        );
        return { ...state, cart: updatedCart };
      }
  
      return {
        ...state,
        cart: [...state.cart, { ...productToAdd, qty: 1 }],
      };
    }
    
    if(action.type == "deleteData"){
        return{
            ...state,cart:state.cart.filter((item,index)=>{
                if(index != action.playlord){
                    return item
                }
            })
        }
    }
    return state
}
export default TestReducer