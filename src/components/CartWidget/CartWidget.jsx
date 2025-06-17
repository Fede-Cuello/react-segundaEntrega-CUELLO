import { BsCart } from "react-icons/bs"
import style from "./CartWidget.module.css"

export default function CartWidget() {
    return (
      <div className={style.cartWidget}>
        <span>Carrito 0</span>
        <BsCart />
      </div>
    );
}
