import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { dataItems } from '../data/dataItems'



const Cart = () => {

const {cart, deleteFromCart, deleteCart} = useContext(CartContext)
console.log("el context es", cart)
const hayItems = (cart.length != 0)
console.log(hayItems)



  return (
    <div className="md:container mx-auto my-5">
        { hayItems ? (  <div >
                            <h1 className="text-2xl text-center	 mx-auto">Items en el Carrito</h1>
                            {cart.map(e=>
                            <>
                                        <hr></hr>
                            <div className="flex flex-row flex-nowrap	">
                                <img className="w-30 h-48 max-h-48 max-w-xs" src={e.producto.producto.imgurl}></img>
                                    <ul>
                                        <li><h2 className="text-2xl">{e.producto.producto.name}</h2></li>
                                        <li>Cantidad: {e.cant}</li>
                                        <li>{e.producto.producto.price}</li>
                                        <button data-theme="autumn" className="btn btn-primary mt-20" onClick={() => {deleteFromCart(e.producto.producto)}}>Eliminar</button>
                                    </ul>
                            </div>
                                        <hr></hr>
                            </>            
                                    )}
                                    <button data-theme="autumn" className="btn btn-primary mt-10 flex mx-auto" onClick={() => {deleteCart()}} >Vaciar Carrito</button>
                        </div>
            ) : ( <h2>No tenés items</h2> )}
    </div>
  )
}

export default Cart