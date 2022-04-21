import React from 'react'

function ItemListContainer(props) {
  return (
    <div data-theme="autumn" className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body items-center">
    <h2 className="card-title text-slate-800">{props.title}</h2>
    <p className='text-slate-500'>{props.text}</p>
    <div className="card-actions">
      <button className="btn btn-secondary m-4">¡Lo quiero!</button>
    </div>
  </div>
</div>
  )
}

export default ItemListContainer