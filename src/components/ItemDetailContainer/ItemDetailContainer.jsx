import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import css from "./ItemDetailContainer.module.css"
import { Link } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [productCategory, setProductCategory] = useState(null)
    const { productId } = useParams()

    console.log("Dentro de ItemDetailContainer")
    console.log(productId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProductById(productId)
                setProduct(result)
                setProductCategory(result.category)
            }
            catch (err) {
                console.log("Error en ItemDetailContainer => ", err)
            }
        }
        fetchData()
    }, [productId])

    console.log(product)
    console.log(productCategory)


    return (
        <div className={css.itemDetailContainer}>
            <Link className={css.boton} to={`/category/${productCategory}`} > Volver </Link>            
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer