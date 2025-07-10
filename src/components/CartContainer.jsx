import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Container,Button } from "react-bootstrap"
import CartDetail from "./CartDetail"
import { useNavigate } from "react-router"
import Swal from "sweetalert2"

export default function CartContainer() {
    const { cart, getCant, deleteItem, totalPrice, clearCart } = useContext(CartContext)
    
  const totalProductos = getCant()
  const precioTotal = totalPrice()
  const navigate = useNavigate()


  const handleClearCart = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta acción vaciara todo tu carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Si, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart()
        Swal.fire("Vaciado!", "Tu carrito ha sido vaciado.", "success")
      }
    })
  }

  if (cart.length === 0) {
    return (
      <Container className="text-center my-5">
        <h3>Tu carrito está vacio</h3>
        <Button onClick={() => navigate("/")}>
          Volver al inicio
        </Button>
      </Container>
    )
  }

    return (
      <Container className="my-5">
        <h2>Carrito de compras</h2>
        {cart.map((producto) => (
          <CartDetail
            key={producto.id}
            producto={producto}
            removeFromCart={() => deleteItem(producto.id)}
          />
        ))}
        <h4>Total: ${precioTotal}</h4>
        <p>Total de productos: {totalProductos}</p>
        <Button className="me-2" onClick={() => navigate("/checkout")}>
          Finalizar compra
        </Button>
        <Button variant="danger" className="me-2" onClick={handleClearCart}>
          Vaciar carrito
        </Button>
        <Button onClick={() => navigate("/")} className="mt-2 mt-sm-0">
          Volver al inicio
        </Button>
      </Container>
    );
}