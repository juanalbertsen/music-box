import React, {useContext, useState} from 'react'
import { CartContext } from "../context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';


const Checkout = () => {

const {suma, cart, totalItems, deleteCart} = useContext(CartContext)
console.log(cart)
console.log('suma',suma)

const cartToAdd = []
cart.forEach(e => cartToAdd.push({name:e.producto.name, price:e.producto.price, cant: e.cant}))
console.log('cart to add', cartToAdd)

const [modal, setModal] = useState(false)
const [buyer, setBuyer] = useState({})
const [id, setId] = useState("")

// Obtener los datos del cliente
    const handleFormChange = (e) => {
      setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

const sendOrder = (e) => {

  e.preventDefault()

  const order = {
    buyer: buyer,
    items: cartToAdd,
    total: suma,
  };
  const db = getFirestore();
  console.log('esta es tu db', db)
  const ordersCollection = collection(db, "orders");
  addDoc(ordersCollection, order).then(({id}) =>setId(id));

  setModal(true)
                }

  return (
    <>
      <h2 className="text-2xl text-center	 mx-auto mb-5">Checkout</h2>
    <div className='flex flex-col md:flex-row justify-center grow-0'>
      <div className="mx-20 w-1/6">
        <h2 className='mb-2'>Resúmen de la Compra</h2>
       <div className="border border-color-black-500 p-4 rounded-md">
        <div className='flex justify-between content-around mb-2 '>
        <h2>Cantidad de items:</h2>
        <p>{totalItems()}</p>
        </div>
        <div className='flex justify-between mb-2 font-bold'>
        <h2>Total:</h2>
        <p>{suma}</p>
        </div>
        </div>
      </div>
    
      <div className="flex flex-col w-2/6 mx-20">
      <h2 className='mb-2'>Datos de Facturación</h2>
      <form data-theme='autumn' className='bg-transparent'>
      <input placeholder="Nombre" onChange={handleFormChange} name="name" className="input bg-transparent border-gray-200 w-full  my-1"></input>
      <input placeholder="Mail"  onChange={handleFormChange} name="mail"className="input bg-transparent border-gray-200  w-full  my-1"></input>
      <input placeholder="Nro de telefono" onChange={handleFormChange} name="phone" className="input bg-transparent border-gray-200  w-full my-1"></input>
      <button  onClick={sendOrder} data-theme="autumn" className="btn btn-primary m-2 mx-auto w-full moda-button" for="modal-compra">Pagar</button>
      </form>
    </div>

    </div>

    {/* Modal de la compra final */}
    <div className={`${modal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-500`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center rounded-md">
                        <h2 className={"text-center md:w-9/12 lg:w-7/12" }>¡Muchas gracias por tu compra, <span className="font-bold text-lg">{buyer.name}</span>!</h2>
                        <p className={"mt-6 text-center md:w-9/12 lg:w-7/12 " }>Te enviamos un mail a <span className="font-bold">{buyer.mail}</span> con tu orden de compra ID: <span className="font-bold">{id}</span>. </p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button data-theme='autumn' onClick={deleteCart} className={" btn btn-primary w-40 text-center py-3 cursor-pointer"}>
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>



    </>
  )
}

export default Checkout