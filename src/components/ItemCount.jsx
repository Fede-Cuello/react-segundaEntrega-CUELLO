import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

export default function ItemCount() {
    const [count, setCount] = useState(0)

    const handleSumar = () => setCount(count + 1)
    const handleRestar = () => setCount (count -1)

    useEffect(() => {
        //console.log ("disparo")
    }, [count])

    return (
      <div>
        <p>{count}</p>
        <Button onClick={handleSumar}>+</Button>
        <Button onClick={handleRestar}>-</Button>
      </div>
    )
}
