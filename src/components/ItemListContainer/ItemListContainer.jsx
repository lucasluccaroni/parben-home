import css from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import Loading from "../Loading/Loading"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import { paths, matchPathName } from "../../utils/paths"

const ItemListContainer = () => {
    const [categoryName, setCategoryName] = useState("")
    const { getProductsByCategory } = useProducts()
    const { categoryId } = useParams()
    // console.log(categoryId)

    // Lógica para traer productos a traves de useAsync
    let { data: products, loading, error } = useAsync(() => getProductsByCategory(categoryId), [categoryId])
    // console.log(categoryName)
    // console.log(products)


    // Logica para matchear el categoryId que viene por params con el nombre del path
    useEffect(() => {
        //Cambio de nombre en la categoria que se muestra en pantalla
        setCategoryName(matchPathName(paths, categoryId))

    }, [categoryId])


    // Componente Loading
    if (loading) {
        return <Loading />
    }

    // Componente Error
    if (error) {
        return <h1 className={css.container}>Hubo un error. Vuelva a intentarlo mas tarde</h1>
    }

    return (
        <div className={css.container} >
            <div className={css.img} >
                <h1 className={css.titulo} > {categoryName} </h1>
            </div>
            <NavigateButtons />
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer