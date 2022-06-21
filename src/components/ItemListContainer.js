import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {dataItems} from '../data/dataItems'
import Hero from './Hero'
import ItemList from './ItemList'
import Spinner from './Spinner'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const {categoryId} = useParams()
  console.log(categoryId)
  

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const db = getFirestore();
    const items = collection(db, "Items");
    getDocs(items).then((snapshot)=> {
      if(snapshot.size === 0) {
        console.log("no hay productos");
      }else if(categoryId != undefined){
        const q= query(collection(db, "Items"), where("category", "==", categoryId));
        getDocs(q).then((snapshot)=>{
        setItems(snapshot.docs.map((doc)=> ({fid: doc.id, ...doc.data()})));      
        })
      }else
      setItems(snapshot.docs.map((doc)=> ({fid: doc.id, ...doc.data()})));
      console.log("los items son", items)
      setLoading(false)
    })
    }, [categoryId])
  

  // useEffect(() => {
  //    getItemsfromDB()
  // }, [categoryId])


  
  // const getItemsfromDB = () => { 
  //     const getItemsfromDBPromise = new Promise( (res, rej) => {
        
  //     setLoading(true)  
      
  //     setTimeout(() => {
  //       res(dataItems);
  //       console.log('recibí los items');
  //       setLoading(false)
  //     }, 1000);
  //     })

  //     getItemsfromDBPromise.then( data => {
  //       console.log(data);

  //       if (categoryId != undefined) {
  //         let filtrados= data.filter(item => item.category == categoryId)
  //         console.log(filtrados)
  //         setItems(filtrados);
  //       } else {
  //         setItems(data)
  //       }
      
  //     })
  // }

  return (
      <div>
         {loading ?  <div className='mx-auto'> <Spinner/> </div> : 
         <>
         <Hero></Hero>
         <ItemList items={items}></ItemList> 
         </>
          }
      </div>
        
   
  )
}

export default ItemListContainer