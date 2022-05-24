import React, {useContext, useState} from 'react'
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";


const Checkout = () => {

const {suma, cart} = useContext(CartContext)
console.log(cart)
console.log('suma',suma)

const cartToAdd = []
cart.forEach(e => cartToAdd.push({name:e.producto.name, price:e.producto.price, cant: e.cant}))
console.log('cart to add', cartToAdd)


const sendOrder = (e) => {

  const order = {
    buyer: {name: "ClientName", phone:"32323", email:"a@b.com"},
    items: cartToAdd,
    total: suma,
  };
  const db = getFirestore();
  console.log('esta es tu db', db)
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(({id}) => console.log('respuesta de la promise', id));
                }

  return (
    <>
    <div className="mx-auto">Comprando productos. Su total es de {suma}</div>
    
    <div className="flex flex-col mx-auto w-80">
      <h2>Ingrese sus datos para realizar la compra</h2>
      <input placeholder="Nombre" className="input  w-full max-w-xs my-1"></input>
      <input placeholder="Mail" className="input  w-full max-w-xs my-1"></input>
      <input placeholder="Nro de Tarjeta" className="input  w-full max-w-xs my-1"></input>
      <button  onClick={sendOrder} data-theme="autumn" className="btn btn-primary m-2 mx-auto w-80">Pagar</button>
    </div>

    </>
  )
}

export default Checkout