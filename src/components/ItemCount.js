import React from 'react'
import {useState} from "react";

function ItemCount({stock, onAdd}) {

        console.log("se montó el contador")
        const [count, setCount] = useState(0)


        const botonSuma = () =>{
                console.log(stock)
                if(count < stock){
                console.log('se está sumando');
                setCount(count + 1)
                }else{
                console.log('Alcanzó el límite de stock');
                }
        }
        const botonResta = () =>{

                if(count >= 1){
                console.log('se está restando');
                setCount(count -1)
                }else{
                console.log('No puede tener menos que cero productos');
                }
                }
        
        return(
        <>
       <div className="mt-20 flex flex-col items-center">
        <div>
                <button onClick={botonResta} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-l">
                        -
                </button>
                <button className="bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-1 px-9">
                        {count}
                </button>
                <button onClick={botonSuma}  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded-r">
                        +
                </button>
        </div>
        <button className="btn btn-secondary my-4 p-3" onClick={ ()=> {onAdd(count)}}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount