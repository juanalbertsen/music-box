import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({item}) => {


  return (
      <div data-theme="autumn" className="card w-80 bg-base-100 shadow-xl mx-auto my-4">
        <div className="card-body flex-auto items-center">
          <p className="text-slate-400 text-xs">Stock: {item.stock}</p>
          <h2 className="card-title text-slate-800">{item.name}</h2>
          <Link id={item.id} to={`/item/${item.fid}`} >
          <img src={item.imgurl} className="object-cover h-40 w-40 rounded-md" alt={'${item.name}'}/>
          </Link>
          <strong>${item.price}</strong>
          <p className='line-through text-red-600 text-xs'>${item.price*1.30}</p>
          <div className="flex-col card-actions items-center">
            <Link id={item.id} className="btn btn-secondary m-4" to={`/item/${item.fid}`}>Ver detalles</Link>
          </div>
        </div>
      </div>
    )
}

export default Item