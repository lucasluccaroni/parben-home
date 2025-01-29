import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import ItemGrid from "../ItemGrid/ItemGrid"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ message }) => {
    const [products, setProducts] = useState([])
    const [viewOption, setViewOtion] = useState("grilla")
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    // useEffect para importar datos
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const asyncFunction = categoryId ? getProductByCategory : getProducts
                const result = await asyncFunction(categoryId)
                setProducts(result)
            }
            catch (err) {
                console.log("Error trayendo los productos => ", err)
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
        return <h1> Cargando... </h1>
    }

    return (
        <div>
            <h1> {message} </h1>
            <button onClick={changeViewOption} > {viewOption === "grilla" ? "Ver: columna" : "Ver: grilla"} </button>
            <ItemView products={products} />
        </div>
    )
}

export default ItemListContainer