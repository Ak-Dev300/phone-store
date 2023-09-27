import React from 'react'
import {Link} from "react-router-dom"
import { ShoppingCart } from "phosphor-react"

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={25}/>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar
