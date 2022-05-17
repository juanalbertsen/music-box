import React, {useContext, useState} from "react";
import { CartContext } from "../context/CartContext";
import { TestContext } from "../context/TestContext";




function ItemCount(producto) {
        
        const [count, setCount] = useState(0)
        console.log("se montó el contador")
        
        const elcontexto = useContext(CartContext)
        const { addToCart } = useContext(CartContext)
        console.log(addToCart)
        
        console.log(elcontexto)

        const botonSuma = () =>{
                console.log(producto.stock)
                if(count < producto.stock){
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
        
        const handleCompra = () => {

                if(count >=1){
                console.log("estoy comprando")
                addToCart(producto,count)
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
        <button className="btn btn-secondary my-4 py-3 px-4" onClick={() => {handleCompra(producto,count)}}>Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount