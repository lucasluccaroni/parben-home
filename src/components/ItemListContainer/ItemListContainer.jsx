import { useEffect, useState } from "react"
import { getProductByCategory, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import ItemGrid from "../ItemGrid/ItemGrid"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ message }) => {
    const [products, setProducts] = useState([])
    const [listOrGrid, setListOrGrid] = useState(true)
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

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

    if(loading){
        return <h1> Cargando... </h1>
    }

    return (
        <div>
            <h1> {message} </h1>
            <button onClick={() => setListOrGrid(listOrGrid => !listOrGrid)} > {listOrGrid ? "Columnas" : "Cuadrícula"} </button>
            {
                listOrGrid ?
                    <ItemGrid products={products} /> :
                    <ItemList products={products} />
            }

        </div>
    )
}

export default ItemListContainer