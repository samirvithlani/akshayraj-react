import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProdComp = () => {

  const dispatch  = useDispatch()
  return (
    <div>
        <h1>Product Component</h1>
        <div>
                <h3>IPHONE 15</h3>
                <p>Price: $1500</p>
                <button onClick={()=>{dispatch(addToCart({name:"iphone15",price:1500}))}}>Add to Cart</button>
        </div>
        <div>
                <h3>IPHONE 14</h3>
                <p>Price: $1400</p>
                
                <button onClick={()=>{dispatch(addToCart({name:"iphone15",price:1500}))}}>Add to Cart</button>  

        </div>
    </div>
  )
}
