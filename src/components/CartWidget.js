import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

      return (
    <>
        <div>
            <b><FaShoppingCart/></b>
            <b>X</b>
        </div>
    </>
    )
}

export default CartWidget