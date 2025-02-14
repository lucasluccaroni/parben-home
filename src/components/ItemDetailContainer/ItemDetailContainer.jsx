import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import css from "./ItemDetailContainer.module.css"
import { Link } from "react-router-dom"

// import { getDoc, doc } from "firebase/firestore"
// import { db } from "../../services/firebase/firebaseConfig"

import { useProducts } from "../../services/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const [productCategory, setProductCategory] = useState(null)

    const { productId } = useParams()
    const { getProductById } = useProducts()


    console.log("Dentro de ItemDetailContainer")
    console.log(productId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const product = await getProductById(productId)
                setProduct(product)
                setProductCategory(product.category)
            }
            catch (err) {
                console.log("error dentro de useEffect itemDetailContainer => ", err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
        // const fetchData = async () => {
        //     try {
        //         setLoading(true)
        //         console.log("DENTRO DE USE EFFECT")
        //         const documentRef = doc(db, "products", productId)
        //         const queryDocumentSnapshot = await getDoc(documentRef)
        //         console.log(queryDocumentSnapshot)

        //         const fields = queryDocumentSnapshot.data()
        //         const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
        //         console.log(productAdapted)

        //         setProduct(productAdapted)
        //         setProductCategory(productAdapted.category)
        //     }
        //     catch (err) {
        //         console.log("Error en ItemDetailContainer => ", err)
        //     }
        //     finally {
        //         setLoading(false)
        //     }
        // }
        // fetchData()
    }, [productId])

    console.log(product)
    console.log(productCategory)


    // Componente Loading
    if (loading) {
        return <h1 className={css.container} > Cargando... </h1>
    }

    return (
        <div className={css.itemDetailContainer}>
            <Link className={css.boton} to={`/category/${productCategory}`} > Volver </Link>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer