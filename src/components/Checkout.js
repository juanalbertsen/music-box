import React, {useContext, useState} from 'react'
import { CartContext } from "../context/CartContext";


const Checkout = () => {

const {suma, cart} = useContext(CartContext)
console.log(suma)




  return (
    <div>Comprando productos. Su total es de {suma}</div>
  )
}

export default Checkout