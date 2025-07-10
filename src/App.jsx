import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router"
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { ToastContainer } from 'react-toastify' 

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer position="top-right" autoClose={5000} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoriaElegida"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
