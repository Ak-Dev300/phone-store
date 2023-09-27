import React, {useContext} from 'react'
import { ShopContext } from '../../context/shopContext';

const SelectCartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, handleChange } = useContext(ShopContext);
  const {id, img, name, price} = props.data;
  return (
    <div className='cart-item'>
      <img src={img}/>
      <div className='cart-info'>
        <h2>{name}</h2>
        <p>N{price}</p>
      </div>
      <div className='btn-div'>
        <button className='addBtn' onClick={() => removeFromCart(id)}>-</button>
        <input type='text' value={cartItems[id]} onChange={(e) => handleChange(Number(e.target.value), id)}/>
        <button className='removeBtn' onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  )
}

export default SelectCartItem