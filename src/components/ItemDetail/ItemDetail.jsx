import { Container, Row, Col, Card ,Button} from "react-bootstrap"
import ItemCount from "../ItemCount"
import styles from "./ItemDetail.module.css"


export default function ItemDetail({item}) {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={item?.imagen}
                alt={item?.nombre}
                className={styles.image}
              />
              <Card.Header className={styles.title}>
                {item?.nombre}
              </Card.Header>
              <Card.Body>
                
                <Card.Text className={styles.description}>
                  {item?.descripcion}
                </Card.Text>
                <h5 className={styles.price}>
                    Precio: ${item?.precio}
                </h5>
                <div className={styles.priceAndCount}>
                  
                  <ItemCount item={item} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}