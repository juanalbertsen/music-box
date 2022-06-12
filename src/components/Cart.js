import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { dataItems } from '../data/dataItems'
import { FiArrowLeft } from 'react-icons/fi'
import { BiTrash } from 'react-icons/bi'



const Cart = () => {

const {cart, suma, deleteFromCart, deleteCart, totalItems} = useContext(CartContext)
console.log("el context es", cart)
const hayItems = (cart.length != 0)
console.log(hayItems)



  return (
    <div className="mx-auto my-2">
        { hayItems ? (  <div>
                            <h1 className="text-2xl text-center	 mx-auto mb-5">Carrito</h1>
                          {/* Tabla de contenido */}

                          <table className="container table-auto mx-auto">
                    
                              {/* Nombre de columnas */}
                              <thead className="h-10 text-center">
                                  <tr className="border-gray-200 border-b">
                                      <th className="text-left pl-4 text-center">Producto</th>
                                      <th className="px-6 lg:px-16 xl:px-32 text-center">Precio</th>
                                      <th className="px-6 md:px-2 lg:px-8 xl:px-12 text-center">Cantidad</th>
                                      <th></th>
                                  </tr>
                              </thead>


                              <tbody className='w-full text-center'>
                            {cart.map(e=>
                            <tr className="border-b">
                                <td className='flex justify-center'>
                                  <img className="w-30 h-48 max-h-fit max-w-fit" src={e.producto.imgurl}></img>
                                  <h2 className="self-center p-4">{e.producto.name}</h2>
                                </td>
                                <td>{e.producto.price}</td>
                                <td>{e.cant}</td>
                                <td>
                                  <a className="hover:cursor-pointer" onClick={() => {deleteFromCart(e.producto, e.cant)}}><BiTrash/></a>
                                </td>
                            </tr>
                         
                         )}
                         </tbody>            
                        </table>

                      <div className='w-4/5 mx-auto text-center flex flex-row justify-between py-10'>
                        <div>
                              <a className='hover:cursor-pointer' onClick={()=> {deleteCart()}}><p>X Vaciar Carrito</p></a>
                        </div>
                        <div className="w-2/6">
                          <div className='flex justify-between content-around mb-2'>
                          <h2>Cantidad de items:</h2>
                          <p>{totalItems()}</p>
                          </div>
                          <div className='flex justify-between mb-2 font-bold'>
                          <h2>Total:</h2>
                          <p>{suma}</p>
                          </div>
                          <Link to={'/checkout'}><button data-theme="autumn" className='btn btn-primary w-full mb-2'>Checkout</button></Link>
                          <Link to='/' className="flex flex-row items-center mt-3"><FiArrowLeft className="h-4 w-4 mr-1" />volver a la tienda</Link>
                        </div>
                      </div>
                        </div>
            ) : ( 
            <div className="flex flex-col items-center py-20 px-8">
            <h2 className='text-center font-bold'>OOPS! TU CARRITO ESTÁ VACÍO. POR FAVOR, AGREGÁ ALGÚN PRODUCTO PARA PODER CONTINUAR</h2>
            <Link to='/' className="flex flex-row items-center mt-3">
                            <FiArrowLeft className="h-4 w-4 mr-1" />
                            volver a la tienda
                        </Link>
            </div>
            )}
    </div>
  )
}

export default Cart