import { CartContext } from "./CartContext"
import { useState } from "react"

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
    const prodInCart = cart.find((prod) => prod.id === item.id)

      if (prodInCart) {
        const updatedCart = cart.map((prod) => prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad }: prod)
        setCart(updatedCart)
      } else {
        setCart([...cart, {...item, cantidad }])
      }
    }

    const getCant = () => {
        const cantidades = cart.map(prod => prod.cantidad)
        const total = cantidades.reduce((acc, current) => acc + current, 0)
        return total
    }

    const deleteItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
      setCart(newCart)
    }
  
    const totalPrice = () => {
        const totales = cart.map(prod => prod.cantidad * prod.precio)
      const precioTotal = totales.reduce((acc, prod) => acc + prod, 0)
      
      return precioTotal
    }     
  
    const clearCart = () => {
      setCart([])
    }
  
  return (
        <CartContext.Provider value={{cart, addToCart, getCant, deleteItem, totalPrice, clearCart}}>
            {children}
        </CartContext.Provider>

  )
}
