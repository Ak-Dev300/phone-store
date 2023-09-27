import React, {useContext} from 'react'
import { ShopContext } from '../../context/shopContext'

const ShopItem = (props) => {
  const {id,name, price, img} = props.data
  const { addToCart, cartItems } = useContext(ShopContext)
  const itemAmount = cartItems[id]
  return (
    <div className='shopItem'>
      <img src={img} alt={name}/>
      <div className='info'>
        <h2>{name}</h2>
        <p>N{price}</p>
        <button className='addToCart' onClick={() => addToCart(id)}>
          Add to cart {itemAmount > 0 && <>({itemAmount})</>}
        </button>
      </div>
    </div>
  )
}

export default ShopItem
