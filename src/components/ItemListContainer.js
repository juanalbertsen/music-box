import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

  return (
  <div data-theme="autumn" className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
    <p className="text-slate-400 text-xs">Stock: {props.stock}</p>
    <h2 className="card-title text-slate-800">{props.title}</h2>
    <p className='text-slate-500'>{props.text}</p>
    <div className="flex-col card-actions items-center">
      <ItemCount stock={props.stock}/>
      </div>
  </div>
</div>
  )
}

export default ItemListContainer