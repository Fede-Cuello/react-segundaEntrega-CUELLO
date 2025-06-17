import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail/ItemDetail"


export default function ItemDetailContainer() {
    const [producto, setProducto] = useState()
    const {sku} =useParams ()

    
    useEffect(() => { 
        fetch(`https://furniture-api.fly.dev/v1/products/${sku}`)
          .then((res) => res.json())
          .then(res => setProducto(res));
          
    }, [sku])
    
    return (
        <ItemDetail producto={producto} />
    )
}