import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const {categoriaElegida} = useParams ()
  useEffect(() => {
    let url = "https://furniture-api.fly.dev/v1/products?limit=100"
    if (categoriaElegida) {
      url = `https://furniture-api.fly.dev/v1/products?category=${categoriaElegida}&limit=100`
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setItems(data.data))

  }, [categoriaElegida])
      

  return (
    <ItemList items={items}/>
  )
}