import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import ItemDetail from './ItemDetail'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({item}) => {

const onClickHandler = (evt => { 
  console.log(evt);
  console.log("usted tocó el botón del producto", evt.target.id);
  }
 
)

  return (
      <div data-theme="autumn" className="card w-80 bg-base-100 shadow-xl mx-auto my-4">
        <div className="card-body flex-auto items-center">
          <p className="text-slate-400 text-xs">Stock: {item.stock}</p>
          <h2 className="card-title text-slate-800">{item.name}</h2>
          <img src={item.imgurl} className="object-cover h-40 w-40 rounded-md"/>
          <strong>${item.price}</strong>
          <div className="flex-col card-actions items-center">
            <Link id={item.id} className="btn btn-secondary m-4" to={`/item/${item.id}`}>Ver detalles</Link>
          </div>
        </div>
      </div>
    )
}

export default Item