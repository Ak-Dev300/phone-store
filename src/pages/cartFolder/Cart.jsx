import React, { useContext } from 'react'
import phones from '../../Phones'
import { ShopContext } from '../../context/shopContext'
import SelectCartItem from './Cart-Item'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext)
  const navigate = useNavigate()

  const cart = phones.map((phone) => {
    return (
      cartItems[phone.id] !== 0 && <SelectCartItem data={phone} />
    )
  })

  let totalAmount = getTotalAmount()

  return (
    <div>
      {totalAmount > 0 ? 
      <div className='cart'>
        <div className='cart-header'>
          <h1>Your Cart Items</h1>
        </div>
        <div className='cart-items'>
          {cart}
        </div>
        <div className='checkout'>
          <p>Subtotal: N{totalAmount}</p>
          <button onClick={() => navigate("/")}>Return to shop</button>
          <button>Checkout</button>
        </div>
      </div> : 
      <h1 className='no-item'>Items not yet added to cart</h1>}
    </div>
  )
}

export default Cart
