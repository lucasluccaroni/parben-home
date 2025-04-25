import css from "./ItemListContainer.module.css"
import ItemList from "../ItemList/ItemList"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import Loading from "../Loading/Loading"
import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import { paths, matchPathName } from "../../utils/paths"
import { FaAngleDown } from "react-icons/fa6"
import IconosFlotantes from "../IconosFlotantes/IconosFlotantes"

const ItemListContainer = () => {
    const [categoryName, setCategoryName] = useState("")
    const { getProductsByCategory } = useProducts()
    const { categoryId } = useParams()
    // console.log(categoryId)

    const listaProductosRef = useRef(null);

    //función para scrollear en la misma page
    const scrollToListaProductos = () => {
        listaProductosRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

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
        <div className={`${css.container} pb-5`} >
            <div className={css.img} >
                <h1 className={`${css.titulo} display-5 text-center px-3`} > {categoryName} </h1>
                <button onClick={scrollToListaProductos} className='mt-3 btn btn-outline-light rounded-circle d-flex align-items-center p-3'><FaAngleDown className='fs-6'/></button>
            </div>
            {/* <NavigateButtons /> */}
            <div id="listadeproductos" className="" ref={listaProductosRef}></div>
            <ItemList products={products} />
            <IconosFlotantes/>
        </div>
    )
}

export default ItemListContainer