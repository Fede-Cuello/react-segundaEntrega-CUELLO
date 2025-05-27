import CardWidget from "./CardWidget"

export default function NavBar() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <a href="#" className="titulo">IselectBV</a>
            <ul className="nav-links">
            <li className="dropdown">
              <span className="dropbtn">Productos</span>
              <ul className="dropdown-content">
                <li><a href="#">Nuevos</a></li>
                <li><a href="#">Usados</a></li>
                <li><a href="#">Apple</a></li>
                <li><a href="#">Samsung</a></li>
              </ul>
            </li>
            <li><CardWidget/></li>
          </ul>
        </nav>
      </div>
    )
}