import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ItemCount from './ItemCount';

function ItemDetail ({item}) {

  const [finalizar, setFinalizar] = useState(false)

  const onAdd = (count) => {
    if (count >= 1) {
      setFinalizar(true)
      console.log(count) 
    } 
     }

    return (
  <div data-theme="autumn" className='mx-auto max-w-lg my-4 rounded-md'>
    <div className="card lg:card-side bg-base-100 shadow-xl rounded-md">
  <figure ><img className="px-5 py-5" src={item.imgurl} alt="Producto"/></figure>
  <div className="card-body rounded-md">
    <h2 className="card-title">{item.name}</h2>
    <strong>${item.price}</strong>
    <p>{item.detail}</p>
    <p className="text-slate-400">Stock: {item.stock} unidades</p>
    <div className="card-actions mx-auto">

      {finalizar ? (
      <div className="mx-auto flex-col mt-20">  
      <p className="text-xs italic mx-auto my-4 text-center">El producto ya fue agregado al carrito</p>
      <Link to="/cart"className="btn btn-sm px-7">Finalizar compra</Link>
      </div> ) :
      <ItemCount stock={item.stock} onAdd={onAdd}/>
    }
    </div>
  </div>
</div>
</div>
)
}

export default ItemDetail;