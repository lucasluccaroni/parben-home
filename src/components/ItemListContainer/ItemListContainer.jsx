import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import css from "./ItemListContainer.module.css"
import { useProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import { paths, matchPathName } from "../../utils/paths"
import Loading from "../Loading/Loading"
// import { sortProducts } from "../../utils/sortProducts"

const ItemListContainer = () => {
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [viewOption, setViewOtion] = useState("grilla")
    // const [sort, setSort] = useState("az")
    // const { alphabeticOrderAZ, alphabeticOrderZA } = sortProducts()
    const [categoryName, setCategoryName] = useState("")
    const { categoryId } = useParams()
    const { getProducts, getProductsByCategory } = useProducts()

    console.log(categoryId)

    // Lógica para traer productos a traves de useAsync
    // let { data: products, loading, error } = useAsync(() => getProducts(categoryId), [categoryId])
    let {data: products, loading, error} = useAsync(()=> getProductsByCategory(categoryId), [ categoryId])
    
    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         try{
    //             const result = await getProductsByCategory(categoryId)
    //             console.log(result)
    //             return result
    
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }
    //     fetchData()
    // }, [categoryId])

    // Logica para matchear el categoryId que viene por params con el nombre del path

    console.log(categoryName)

    // console.log("1°", products)
    // console.log("loading =>", loading)
    // console.log("error =>", error)


    // useEffect para importar datos
    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             setLoading(true)
    //             const products = await getProducts(categoryId)
    //             console.log(products)
    //             setProducts(products)

    //             // const collectionRef = categoryId
    //             //     ? query(collection(db, "products"), where("category", "==", categoryId))
    //             //     : collection(db, "products")

    //             // const querySnapShot = await getDocs(collectionRef)
    //             // console.log(querySnapShot)

    //             // const productsAdapted = querySnapShot.docs.map(doc => {
    //             //     const fields = doc.data()
    //             //     console.log("CAMPOS DEL PRODUCTO => ", fields)
    //             //     return { id: doc.id, ...fields }
    //             // })
    //             // console.log(productsAdapted)
    //             // setProducts(productsAdapted)

    //             // const asyncFunction = categoryId ? getProductByCategory : getProducts
    //             // const result = await asyncFunction(categoryId)
    //             // setProducts(result)
    //         }
    //         catch (err) {
    //             console.log("error dentro de useEffect ItemListContainer => ", err)
    //         }
    //         finally {
    //             setLoading(false)
    //         }
    //     }
    //     fetchData()

    // }, [categoryId])
    // console.log(products)


    // // Cambio de componente entre vista de grilla o columna
    // const ItemView = viewOption === "grilla" ? ItemGrid : ItemList
    // const changeViewOption = () => {
    //     setViewOtion(viewOption === "grilla" ? "columna" : "grilla")
    // }

    // Cambio de orden alfabético
    // useEffect(() => {
    //     try {
    //         // Ordenar productos A-Z y Z-A
    //         // console.log("2° Products dentro del SORT  => ", products)
    //         // console.log(sort)
    //         const sortedProducts = sort === "az" ? alphabeticOrderAZ(products) : alphabeticOrderZA(products)
    //         // console.log("3° SORTED PRODUCTS => ", sortedProducts)
    //         products = sortedProducts
    //     }
    //     catch (err) {
    //         console.log("Error ordenando los productos => ", err)
    //     }
    // }, [products, sort])

    useEffect(() => {
        //Cambio de nombre en la categoria que se muestra en pantalla
        setCategoryName(matchPathName(paths, categoryId))

    }, [categoryId])


    // const changeSort = () => {
    //     setSort(sort === "az" ? "za" : "az")
    // }
    

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
            {/* <img className={css.img} src="/images/products-category/sofas.jpg" alt="" /> */}
            {/* <h1> {message} </h1> */}
            {/* <button onClick={changeViewOption} > {viewOption === "grilla" ? "Ver: columna" : "Ver: grilla"} </button> */}
            <NavigateButtons />
            {/* <button className={css.sortButton} onClick={changeSort} > {sort === "az" ? "Ordenar A-Z" : "Ordenar Z-A"} </button> */}
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer