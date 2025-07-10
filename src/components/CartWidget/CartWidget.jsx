import { BsCart } from "react-icons/bs"
import style from "./CartWidget.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router"

export default function CartWidget() {

  const { cart, getCant } = useContext(CartContext)
  const total = getCant()
  const navigate= useNavigate()

  //const totalCantidad = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  //`Carrito: ${totalCantidad}`
    return (
      <div onClick={()=> navigate("/cart")} className={style.cartWidget}>
        <span>{total}</span>
        <BsCart />
      </div>
    );
}
