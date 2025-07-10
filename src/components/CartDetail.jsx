import { Card, Row, Col, Image ,Button} from "react-bootstrap";

export default function CartDetail({ producto , removeFromCart }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={4} sm={3} md={2}>
            <Image src={producto.imagen} alt={producto.nombre} fluid rounded />
          </Col>
          <Col xs={8} sm={9} md={10}>
            <h5>{producto.nombre}</h5>
            <div className="d-flex flex-wrap align-items-center">
              <p className="mb-0 me-3">Precio: ${producto.precio}</p>
              <p className="mb-0 me-auto">Cantidad: {producto.cantidad}</p>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={removeFromCart}
                className="mt-2 mt-sm-0"
              >
                Eliminar producto ❌
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
