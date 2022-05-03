import React from 'react'
import ItemCount from './ItemCount';

function ItemDetail ({item}) {

    return (
  <div data-theme="autumn" className='mx-auto max-w-lg'>
    <div className="card lg:card-side bg-base-100 shadow-xl rounded-md">
  <figure><img src={item.imgurl} alt="Producto"/></figure>
  <div className="card-body rounded-md">
    <h2 className="card-title">{item.name}</h2>
    <strong>${item.price}</strong>
    <p>{item.detail}</p>
    <p className="text-slate-400">Stock: {item.stock} unidades</p>
    <div className="card-actions mx-auto">
      <ItemCount stock={item.stock}/>
    </div>
  </div>
</div>
</div>
)
}

export default ItemDetail;