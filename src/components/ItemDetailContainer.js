import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dataItems } from '../data/dataItems'
import Item from './Item'
import ItemDetail from './ItemDetail'
import Spinner from './Spinner'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    const {idParam} = useParams()
  
   //  useEffect(() => {
   //     getItemsfromDB()
   //     console.log("entre en la funcion")
   //  }, [])

   useEffect(() => {
      const db = getFirestore()
      const itemToShow = doc(db, "Items", idParam);
      console.log("item to show", itemToShow)
      getDoc(itemToShow).then((snapshot)=> {
         if (snapshot.exists()) {
            setItem({id: snapshot.id, ...snapshot.data()})
            console.log(item)
            setLoading(false)
         }
      });
   }, [])
   
    
   //  const getItemsfromDB = () => { 
   //      const getItemsfromDBPromise = new Promise( (res, rej) => {
          
   //      setTimeout(() => {
   //        res(dataItems)
   //        setLoading(false)
   //      }, 2000);
   //      })
  
   //      getItemsfromDBPromise.then( data => {
   //        console.log("estoy escribiendo", data[0]);
   //        setItem(data.find(item =>item.id == idParam)); 
   //        console.log(item);
          

   //      })
   //  }

 return (
      <div>
         {loading? <Spinner></Spinner> : <ItemDetail item={item}></ItemDetail> }
      </div>
 )
 
}

export default ItemDetailContainer
