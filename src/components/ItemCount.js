import React from 'react'
import {useState} from "react";

function ItemCount(props) {

        console.log("se montó el contador")
        const [count, setCount] = useState(0)


        const botonSuma = () =>{
                console.log(props)
                if(count < props.stock){
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
        

        const OnAdd= () => {
                if(count !== 0)
                console.log("Se añadieron al carrito", {count})
              }

        return(
        <>
       <div className="flex flex-col items-center">
        <div>
                <button onClick={botonResta} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        -
                </button>
                <button className="bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2">
                        {count}
                </button>
                <button onClick={botonSuma}  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        +
                </button>
        </div>
        <button onClick={OnAdd} className="btn btn-secondary m-4">¡Lo quiero!</button>
    </div>
    </>
  )
}

export default ItemCount