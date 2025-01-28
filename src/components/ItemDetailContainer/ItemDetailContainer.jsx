import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import css from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()

    console.log("Dentro de ItemDetailContainer")
    console.log(productId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProductById(productId)
                setProduct(result)
            }
            catch (err) {
                console.log("Error en ItemDetailContainer => ", err)
            }
        }
        fetchData()
    }, [productId])
    
    console.log(product)

    return (
        <>
            <h1>ItemDetailContainer</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer