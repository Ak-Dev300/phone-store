import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import phones from '../Phones'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  function getDefaultCart(){
    let cart = {}
    for(let i = 1; i < phones.length + 1; i++){
      cart[i] = 0
    }
    return cart
  }
  

  const [cartItems, setCartItems] = useState(function(){
    return JSON.parse(localStorage.getItem("items"))
  } || getDefaultCart())


  function addToCart(itemId){
    setCartItems((prevCart) => {
      return({...prevCart, [itemId]: prevCart[itemId] + 1})
    })
  
  }
  function removeFromCart(itemId){
    setCartItems((prevCart) => {
      return({...prevCart, [itemId]: prevCart[itemId] - 1})
    })
  }

  function handleChange(newAmount, itemId){
    setCartItems((prevCart) => {
      return(
        {...prevCart, [itemId]: newAmount}
      )
    })
  }

  function getTotalAmount(){
    let totalAmount = 0
    for(const items in cartItems){
      if(cartItems[items] > 0){
        let itemAmount = phones.find((phone) => {
          return phone.id === Number(items)
        })
        totalAmount += cartItems[items] * itemAmount.price
      }
    }
    return totalAmount
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems))
  }, [cartItems])

  console.log(cartItems)

  const contextValue = {cartItems, addToCart, removeFromCart, handleChange, getTotalAmount}
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
