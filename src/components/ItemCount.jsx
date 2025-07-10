import { useContext , useState } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/CartContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

export default function ItemCount({item}) {
  const [count, setCount] = useState(1)
  const { addToCart } = useContext(CartContext)
  const navigate =useNavigate()

  const handleSumar = () => setCount(count + 1)
  const handleRestar = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const handleAgregar = () => {
    addToCart(item, count)
    toast.success (`agregaste ${item.nombre} x ${count} `)
  } 
 

    return (
      <div className="d-flex align-items-center gap-3 mt-3">
        <Button variant="secondary" onClick={() => navigate("/")}>
          Volver al inicio
        </Button>

        <Button onClick={handleRestar} disabled={count <= 1}>
          -
        </Button>

        <span>{count}</span>

        <Button onClick={handleSumar}>+</Button>

        <Button onClick={handleAgregar}>Agregar al carrito</Button>
      </div>
    )
}
