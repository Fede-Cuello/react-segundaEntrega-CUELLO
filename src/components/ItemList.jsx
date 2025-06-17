import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Item from "./Item/Item"


export default function ItemList({items}) {
  return (
    <Container className="my-5">
      <Row className="g-4">
        {items.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </Row>
    </Container>
  );
}

