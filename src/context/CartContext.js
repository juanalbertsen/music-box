import React, { createContext, useState } from "react"

export const CartContext = createContext() 

export const CartContextProvider =  ({children} ) =>  {

    //Estado para el array del carrito
	const [cart, setCart] = useState([]);
    //Estado para el precio total
    const [suma, setSuma] = useState(0);

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
       
            setCart([...newCart, {...producto, cant:count }])
            const newTotal = suma + (producto.producto.price * count)
            setSuma(newTotal);
            console.log("precio total ", newTotal);
            console.log('el nuevo total almacenado en el estado:', suma); // por algun motivo no puede leer el state dentro de esta función. Pero sí lo almacena

            
    }

	const deleteFromCart = (producto, cantidad) => {
		const newCart = [...cart]
        console.log("antes de filtrar", newCart)
        console.log("eliminando producto", producto.id,producto.name)
        console.log('hago esta cuenta para establecer el total', producto.price, "por", cantidad)
        setSuma(suma - producto.price*cantidad)
		const deleteProduct = newCart.filter((prod) => prod.producto.id != producto.id) 
        console.log("estos son los productos que quedan", deleteProduct)//busco todos los que NO tengan el id del producto que ya no quiero.
		setCart(deleteProduct) // establezco el nuevo cart sólo con los resultados que filtré.
        console.log("luego de borrar queda", cart)
	}

	const deleteCart = () => {
        setCart([])
        setSuma(0)
    }

    const totalItems = () => {
        let cuenta = 0
        cart.forEach(e => { cuenta = cuenta + e.cant})
        console.log(cart)
        return cuenta
    }

  return (
    <CartContext.Provider
    value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
        isInCart,
        suma,
        totalItems
    }}
>{children}</CartContext.Provider>
  )

}

export default CartContextProvider