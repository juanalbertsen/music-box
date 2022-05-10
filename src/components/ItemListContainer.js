import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {dataItems} from '../data/dataItems'
import Hero from './Hero'
import ItemList from './ItemList'
import Spinner from './Spinner'

const ItemListContainer = () => {

  const {categoryId} = useParams()
  console.log(categoryId)
  

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     getItemsfromDB()
  }, [categoryId])
  
  const getItemsfromDB = () => { 
      const getItemsfromDBPromise = new Promise( (res, rej) => {
        
      setLoading(true)  
      
      setTimeout(() => {
        res(dataItems);
        console.log('recibí los items');
        setLoading(false)
      }, 1000);
      })

      getItemsfromDBPromise.then( data => {
        console.log(data);

        if (categoryId != undefined) {
          let filtrados= data.filter(item => item.category == categoryId)
          console.log(filtrados)
          setItems(filtrados);
        } else {
          setItems(data)
        }
      
      })
  }

  return (
      <div>
         {loading ?  <div className='mx-auto'> <Spinner/> </div>:  <ItemList items={items}></ItemList>  }
      </div>
        
   
  )
}

export default ItemListContainer