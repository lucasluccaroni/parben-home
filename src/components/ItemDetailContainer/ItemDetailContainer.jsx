import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { useProducts } from "../../services/firebase/firestore/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import css from "./ItemDetailContainer.module.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {

    const { productId } = useParams()
    const { getProductById } = useProducts()

    // console.log(productId)
    const { data: product, loading, error, /* productCategory */ } = useAsync(() => getProductById(productId))
    // console.log(product)

    // Componente Loading
    if (loading) {
        return <Loading />
    }

    // Componente error
    if (error) {
        return <h1 className={css.container}>Hubo un error. Vuelva a intentarlo mas tarde</h1>
    }

    return (
        <div className={css.itemDetailContainer}>
            <NavigateButtons />
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer