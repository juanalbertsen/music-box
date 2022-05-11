import React, { createContext, useState } from "react"

export const CartContext = createContext() 

export const CartContextProvider =  ({children} ) =>  {

    //Estado para el array del carrito
	const [cart, setCart] = useState([{id:4, cant:15}, {id:5, cant:32}])

    //Validar si el item está en el carrito
    const isInCart = (id, count) =>{
	const elementoEnCarrito = cart.find((i) => i.id == id)
    console.log(elementoEnCarrito)
    if(elementoEnCarrito == undefined){
        return false
    }else{
        return true
    }
    }

	// Agregar item al carrito
	const addToCart = (id, count) => {
        const newCart = [...cart]

        if (isInCart(id)){
            alert("NO PODES AGREGAR OTRO ITEM IGUAL"); // mejorar la lógica para que sume cantidad en lugar de mostrar el alert
        }else{
            setCart([...newCart, {id:id,cant:count }])
            console.log("nuevo carrito:", cart);
            }
    }

	const deleteFromCart = (producto) => {
		const newCart = [...cart]
		const deleteProduct = newCart.filter((prod) => prod.id !== producto.id) //busco todos los que NO tengan el id del producto que ya no quiero.
		setCart(deleteProduct) // establezco el nuevo cart sólo con los resultados que filtré.
        console.log(cart)
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