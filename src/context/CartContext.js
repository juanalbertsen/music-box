import React, { createContext, useState } from "react"

export const CartContext = createContext() 

export const CartContextProvider =  ({children} ) =>  {

    //Estado para el array del carrito
	const [cart, setCart] = useState([])

    //Validar si el item está en el carrito
    const isInCart = (producto) =>{
	const elementoEnCarrito = cart.find((i) => i.producto.id == producto.id) // defino si el elemento está en el carrito, si está me devolverá
    console.log(elementoEnCarrito)
    if(elementoEnCarrito == undefined){
        return false
    }else{
        return true
    }
    }

	// Agregar item al carrito
	const addToCart = (producto, count) => {
        const newCart = [...cart]

        if (isInCart(producto)){
            alert("NO PODES AGREGAR OTRO ITEM IGUAL"); // mejorar la lógica para que sume cantidad en lugar de mostrar el alert
        }else{
            console.log('viejo carrito', newCart)
            setCart([...newCart, {producto, cant:count }])
            console.log("nuevo carrito:", cart);
            }
    }

	const deleteFromCart = (producto) => {
		const newCart = [...cart]
        console.log("antes de filtrar", newCart)
        console.log("eliminando producto", producto.id,producto.name)
		const deleteProduct = newCart.filter((prod) => prod.producto.id != producto.id) 
        console.log("estos son los productos que quedan", deleteProduct)//busco todos los que NO tengan el id del producto que ya no quiero.
		setCart(deleteProduct) // establezco el nuevo cart sólo con los resultados que filtré.
        console.log("luego de borrar queda", cart)
	}

	const deleteCart = () => setCart([])



  return (
    <CartContext.Provider
    value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
    }}
>{children}</CartContext.Provider>
  )

}

export default CartContextProvider