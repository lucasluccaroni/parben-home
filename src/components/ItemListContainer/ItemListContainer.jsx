import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import ItemGrid from "../ItemGrid/ItemGrid"


const ItemListContainer = ({ message }) => {
    const [products, setProducts] = useState([])
    const [listOrGrid, setListOrGrid] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProducts()
                setProducts(result)
            }
            catch (err) {
                console.log("Error trayendo los productos => ", err)
            }
        }
        fetchData()

    }, [])
    console.log(products)


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