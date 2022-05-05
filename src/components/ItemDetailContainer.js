import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataItems } from '../data/dataItems'
import Item from './Item'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = (props) => {

    const [item, setItem] = useState({})

    const {idParam} = useParams()
  
    useEffect(() => {
       getItemsfromDB()
       console.log("entre en la funcion")
    }, [])
    
    const getItemsfromDB = () => { 
        const getItemsfromDBPromise = new Promise( (res, rej) => {
          
        setTimeout(() => {
          res(dataItems)
        }, 500);
        })
  
        getItemsfromDBPromise.then( data => {
          console.log("estoy escribiendo", data[0]);
          setItem(data.find(item =>item.id == idParam)); //acá esta hardcodeado en el id 3! Luego cambiará
          console.log(item);
          

        })
    }

 return (
    <ItemDetail item={item}></ItemDetail>
 )
 
}
export default ItemDetailContainer
