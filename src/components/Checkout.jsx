import { useState } from "react"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

export default function Checkout () {
  const [validated, setValidated] = useState(false)
  const { cart, clearCart } = useContext(CartContext)
  const navigate = useNavigate ()

    const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
        

     setValidated(true)  
      
    if (!form.checkValidity()) {
        event.stopPropagation()
        return
    } 
    
    const nombre = form.nombre.value
    const apellido = form.apellido.value  
    const email = form.email.value
    const provincia = form.provincia.value
    const ciudad = form.ciudad.value  
    const telefono = form.telefono.value  
      
        
     
      createOrder({
        nombre,
        apellido,
        email,
        provincia,
        ciudad,
        telefono,
        products: cart,
        time: serverTimestamp ()
      }
      ) 

      const resumen = cart.map((p) => `${p.nombre} (x${p.cantidad})`).join(", ")
      toast.success(`Gracias ${nombre}, compraste: ${resumen}`)
      
      clearCart()

      setTimeout(() => {
        navigate("/")
      }, 5200)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required type="text" placeholder="Juan" minLength={3} />
          <Form.Control.Feedback type="invalid">
            Tu nombre debe contener al menos 3 letras
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Perez"
            minLength={3}
          />
          <Form.Control.Feedback type="invalid">
            Tu apellido debe contener al menos 3 letras
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="email">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="juanperez@gmail.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un email valido
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="provincia">
          <Form.Label>Provincia</Form.Label>
          <Form.Control
            type="text"
            placeholder="Cordoba"
            required
            minLength={3}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una provincia valida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="ciudad">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Villa Maria"
            required
            minLength={3}
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa una ciudad valida
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="telefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="tel"
            pattern="^\+?[0-9]{7,15}$"
            placeholder="+5493537142341"
            required
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingresa un telefono valido
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Enviar</Button>
    </Form>
  )
}

