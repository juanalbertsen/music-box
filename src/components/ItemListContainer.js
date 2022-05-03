import React from 'react'
import { useEffect, useState } from 'react'
import {dataItems} from '../data/dataItems'
import ItemList from './ItemList'

const ItemListContainer = () => {

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
    <div>
        <ItemList items={items}></ItemList>
    </div>
  )
}

export default ItemListContainer