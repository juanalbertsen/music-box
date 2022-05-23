import React, { createContext, useState } from "react"

export const CartContext = createContext() 

export const CartContextProvider =  ({children} ) =>  {

    //Estado para el array del carrito
	const [cart, setCart] = useState([]);
    //Estado para el precio total
    const [suma, setSuma] = useState(5987654); //hardcodeado porque no funcionó

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

            console.log('viejo carrito', newCart)
            console.log('producto a agregar', producto.producto.price)
            setCart([...newCart, {producto, cant:count }])
            console.log("nuevo carrito:", cart);
            console.log('agregando ',producto.producto.price)
            console.log('multipilicado por ',count)
            const newTotal = suma + (producto.producto.price * count)
            console.log("precio total ", newTotal)
            console.log('el nuevo total almacenado en el estado:', suma) // chequear por qué no funciona!

            
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
        isInCart,
        suma
    }}
>{children}</CartContext.Provider>
  )

}

export default CartContextProvider