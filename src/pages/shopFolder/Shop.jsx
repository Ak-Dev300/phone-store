import React from 'react'
import phones from '../../Phones'
import ShopItem from "./ShopItem.jsx"

const Shop = () => {
  const shopItems = phones.map((phone) => {
    return(
      <ShopItem data={phone} key={phone.id}/>
    )
  })
  return (
    <div>
      <div className='shop-title'>
        <h1>AK's SHOP</h1>
      </div>
      <div className='shop'>
        {shopItems}
      </div>
    </div>
  )
}

export default Shop
