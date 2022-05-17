import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const CartWidget = () => {

    const { cart } = useContext(CartContext)
    let totalItems = 0;
    
    cart.forEach(e => { totalItems = totalItems + e.cant   
    });


      return (
    <>
        <div>
            <b><FaShoppingCart/></b>
            <b>{totalItems}</b>
        </div>
    </>
    )
}

export default CartWidget