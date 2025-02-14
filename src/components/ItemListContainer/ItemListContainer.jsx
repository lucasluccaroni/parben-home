import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import ItemGrid from "../ItemGrid/ItemGrid"
import { useParams } from "react-router-dom"
import css from "./ItemListContainer.module.css"

// import { getDocs, collection, query, where } from "firebase/firestore"
// import { db } from "../../services/firebase/firebaseConfig"
import { useProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({ message }) => {
    const [products, setProducts] = useState([])
    const [viewOption, setViewOtion] = useState("grilla")
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const { getProducts } = useProducts()

    // useEffect para importar datos
    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const products = await getProducts(categoryId)
                console.log(products)
                setProducts(products)

                // const collectionRef = categoryId
                //     ? query(collection(db, "products"), where("category", "==", categoryId))
                //     : collection(db, "products")

                // const querySnapShot = await getDocs(collectionRef)
                // console.log(querySnapShot)

                // const productsAdapted = querySnapShot.docs.map(doc => {
                //     const fields = doc.data()
                //     console.log("CAMPOS DEL PRODUCTO => ", fields)
                //     return { id: doc.id, ...fields }
                // })
                // console.log(productsAdapted)
                // setProducts(productsAdapted)

                // const asyncFunction = categoryId ? getProductByCategory : getProducts
                // const result = await asyncFunction(categoryId)
                // setProducts(result)
            }
            catch (err) {
                console.log("error dentro de useEffect ItemListContainer => ", err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [categoryId])
    console.log(products)

    // Cambio de componente entre vista de grilla o columna
    const ItemView = viewOption === "grilla" ? ItemGrid : ItemList
    const changeViewOption = () => {
        setViewOtion(viewOption === "grilla" ? "columna" : "grilla")
    }

    // Componente Loading
    if (loading) {
        return <h1 className={css.container} > Cargando... </h1>
    }

    return (
        <div className={css.container} >
            <h1> {message} </h1>
            <button onClick={changeViewOption} > {viewOption === "grilla" ? "Ver: columna" : "Ver: grilla"} </button>
            <ItemView products={products} />
        </div>
    )
}

export default ItemListContainer