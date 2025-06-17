import {Container, Nav, Navbar,NavDropdown} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"
import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { useNavigate } from "react-router"


export default function NavBar() {

  const [categorias, setCategorias] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch("https://furniture-api.fly.dev/v1/products?limit=100")
    .then(res => res.json())
    .then(data => {
      const catUnicas = [
        ...new Set(data.data.map((prod) => prod.category))
      ]
      setCategorias(catUnicas)
  

      })
  }, [])

  return (
    <Navbar expand="lg" className={styles.navBarContainer}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to={"/"} className={styles.navBarBrand}>
          IselectBV
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className={styles.navBarToggler}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title={<span className={styles.navBarLink}
              onClick={() => navigate("/")}>Categorias</span>}
              id="productos-dropdown">
              {categorias.map(categoria => (
                <NavDropdown.Item as={NavLink} to={`/category/${categoria}`} className={styles.navBarDropdownItem} key={categoria}>
                {categoria}
              </NavDropdown.Item>
              ))}
              
            </NavDropdown>

            <Nav.Item className="d-flex align-items-center ms-3">
              <CartWidget />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
