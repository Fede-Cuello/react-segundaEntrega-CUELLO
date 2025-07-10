import {Container, Nav, Navbar,NavDropdown} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./NavBar.module.css"
import { useEffect, useState } from "react"
import { NavLink } from "react-router"
import { useNavigate } from "react-router"
import { getCategorias } from "../../firebase/db"


export default function NavBar() {

  const [categorias, setCategorias] = useState([])
  
  useEffect(() => {
    const obtenerCategorias = async () => {
      const categorias = await getCategorias()
      setCategorias(categorias)
    };

    obtenerCategorias()
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
              >Categorias</span>}
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
  )
}
