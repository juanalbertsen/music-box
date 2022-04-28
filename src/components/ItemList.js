import React, { useEffect, useState } from 'react'
import {dataItems} from '../data/dataItems'
import Item from './Item'

function ItemListContainer(props) {

  const [items, setItems] = useState([])

  useEffect(() => {
     getItemsfromDB()
  }, [])
  
  const getItemsfromDB = () => { 
      const getItemsfromDBPromise = new Promise( (res, rej) => {
        
      setTimeout(() => {
        res(dataItems)
      }, 2500);
      })

      getItemsfromDBPromise.then( data => {
        console.log(data);
        setItems(data);
      })
  }
  

    return (
            <div className="flex-row">
              {items.map( i => <Item item={i}></Item>)}
            </div>
        )
}

export default ItemListContainer