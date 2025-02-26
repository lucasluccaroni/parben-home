import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { useProducts } from "../../services/firebase/firestore/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import css from "./ItemDetailContainer.module.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {
    // const [loading, setLoading] = useState(true)
    // const [product, setProduct] = useState(null)
    // const [productCategory, setProductCategory] = useState(null)

    const { productId } = useParams()
    const { getProductById } = useProducts()


    console.log(productId)

    const { data: product, loading, error, productCategory } = useAsync(() => getProductById(productId))

    // setProductCategory(product.category)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true)
    //             const product = await getProductById(productId)
    //             setProduct(product)
    //             setProductCategory(product.category)
    //         }
    //         catch (err) {
    //             console.log("error dentro de useEffect itemDetailContainer => ", err)
    //         }
    //         finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchData()
    // }, [productId])

    console.log(product)



    // Componente Loading
    if (loading) {
        return <Loading/>
    }

    // Componente error
    if (error) {
        return <h1 className={css.container}>Hubo un error. Vuelva a intentarlo mas tarde</h1>
    }

    return (
        <div className={css.itemDetailContainer}>
            <NavigateButtons/>
            {/* <Link className={css.navigateButton} to={`/category/${productCategory}`} > Volver </Link> */}
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer