import React from 'react'
import ItemCount from './ItemCount'

const Item = ({item}) => {
  return (
    <div className="GRID">
      <div data-theme="autumn" className="card w-90 bg-base-100 shadow-xl m-3">
        <div className="card-body items-center">
          <p className="text-slate-400 text-xs">Stock: {item.stock}</p>
          <h2 className="card-title text-slate-800">{item.name}</h2>
          <img src={item.imgurl} className="object-cover h-40 w-40 rounded-md"/>
          <p className='text-slate-500'>{item.detail}</p>
          <strong>${item.price}</strong>
          <div className="flex-col card-actions items-center">
            <ItemCount stock={item.stock}/>
          </div>
        </div>
      </div>
</div>
  )
}

export default Item