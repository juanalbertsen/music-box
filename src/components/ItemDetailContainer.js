import React, { useEffect, useState } from 'react'
import { dataItems } from '../data/dataItems'
import Item from './Item'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = (props) => {

    const [item, setItem] = useState({})
  
    useEffect(() => {
       getItemsfromDB()
       console.log("entre en la funcion")
    }, [])
    
    const getItemsfromDB = () => { 
        const getItemsfromDBPromise = new Promise( (res, rej) => {
          
        setTimeout(() => {
          res(dataItems)
        }, 1500);
        })
  
        getItemsfromDBPromise.then( data => {
          console.log("estoy escribiendo", data[0]);
          setItem(data[props.idnumber]);
          console.log(item);
          

        })
    }

 return (
    <ItemDetail item={item}></ItemDetail>
 )
 
}
export default ItemDetailContainer
