import React, { useState } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const {cartItems, food_list,removeFromCart} = useState(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div className='cart-items-title cart-items-item'>
                
                </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
