import { Container, Row, Col, Card ,Button} from "react-bootstrap"
import ItemCount from "../ItemCount"
import styles from "./ItemDetail.module.css"


export default function ItemDetail({producto}) {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={producto?.data.image_path}
                alt={producto?.data.name}
                className={styles.image}
              />
              <Card.Header className={styles.title}>
                {producto?.data.name}
              </Card.Header>
              <Card.Body>
                <Card.Text className={styles.description}>
                  Madera: {producto?.data.wood_type}
                </Card.Text>
                <Card.Text className={styles.description}>
                  Terminacion: {producto?.data.finish}
                </Card.Text>
                <Card.Text className={styles.description}>
                  {producto?.data.description}
                </Card.Text>
                <div className={styles.priceAndCount}>
                  <h5 className={`mt-3 ${styles.price}`}>
                    Precio: ${producto?.data.price}
                  </h5>
                  <ItemCount />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}