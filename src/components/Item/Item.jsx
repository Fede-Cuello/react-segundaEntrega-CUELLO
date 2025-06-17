import {Card , ListGroup , Col, Button }  from "react-bootstrap"
import styles from "./Item.module.css"
import { useNavigate } from "react-router"


export default function Item({ prod }) {
  const navigate = useNavigate()
  
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className={`${styles.itemCard} h-100`}>
        <Card.Img variant="top" src={prod.image_path} alt={prod.name} />
        <Card.Body>
          <Card.Title className={styles.itemCardTitle}>{prod.name}</Card.Title>
          <Card.Text className={styles.itemCardText}>
            Precio: {prod.price} USD
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <p className={styles.medidasText}>
              {`Alto: ${prod.dimensions.height}cm\nAncho: ${prod.dimensions.width}cm\nProfundidad: ${prod.dimensions.depth}cm`}
            </p>
          </ListGroup.Item>
        </ListGroup>
        <Button onClick={()=> navigate (`/item/${prod.sku}`)}  >
          Ver mas
        </Button>
      </Card>
    </Col>
  );
}
