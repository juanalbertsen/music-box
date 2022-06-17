import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

    const { totalItems } = useContext(CartContext)

      return (
    <>
        <div className="flex items-center">
            <p className="px-1"><FaShoppingCart/></p>
            <b>{totalItems()}</b>
        </div>
    </>
    )
}

export default CartWidget