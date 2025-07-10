import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'
import { getProducts, getProdByCat } from '../firebase/db'
import { withLoading } from '../hoc/withLoading'
import { toast } from 'react-toastify'

const ItemsListWithLoading = withLoading (ItemList) 

export default function ItemListContainer() {
  const [items, setItems] = useState(null)
  const {categoriaElegida} = useParams ()
 
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        if (categoriaElegida) {
          const products = await getProdByCat(categoriaElegida)
          setItems(products)
        } else {
          const products = await getProducts()
          setItems(products)
        }
      } catch (error) {
        console.error("Error al obtener productos:", error)
        toast.error("Error al cargar productos")
        setItems([])
      }
    }

    getAllProducts()
  }, [categoriaElegida])

  return (
    <div>
      <h2 className="text-center my-3">
        {categoriaElegida
          ? `Productos en "${categoriaElegida}"`
          : "Todos los productos"}
      </h2>
      <ItemsListWithLoading items={items} />
    </div>
  )
}