import styles from "./ProductsCategoryContainer.module.css"
import variantStyles from "./ProductsCategoryContainerVariant.module.css"
import ProductCategoryList from "../ProductsCategoryList/ProductsCategoryList"
import { useEffect, useState } from "react"

import { getDocs, collection} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ProductsCategoryContainer = ({ variantValidation }) => {
    const [css, setCss] = useState(styles)

    // const css = variant ? variantStyles : styles

    useEffect(() => {
        document.title = "Parben Home | Productos"
        setCss(variantValidation ? variantStyles : styles)

        const fetchData = async () => {
            try{
                const collectionRef = collection(db, "products")
                const querySnapShot = await getDocs(collectionRef)
                console.log(querySnapShot)
    
                const productsAdapted = querySnapShot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })
                console.log(productsAdapted)
                setProducts(productsAdapted)
            }
            catch(err){
                console.log("ERROR EN PRODUCTCATEGORY FETCH => ", err)
            }
            fetchData()

        }

    }, [variantValidation])




    const paths = [
        { path: "/category/sofas", pathName: "Sofas", key: "1", img: "/images/products-category/sofas.jpg" },
        { path: "/category/esquineros", pathName: "Esquineros", key: "2", img: "/images/products-category/esquineros.jpg" },
        { path: "/category/poltronas", pathName: "Poltronas", key: "3", img: "/images/products-category/poltronas.jpg" },
        { path: "/category/mesas", pathName: "Mesas", key: "4", img: "/images/products-category/mesas.jpg" },
        { path: "/category/mesas-ratonas", pathName: "Mesas Ratonas", key: "5", img: "/images/products-category/ratonas.jpg" },
        { path: "/category/sillas", pathName: "Sillas", key: "6", img: "/images/products-category/sillas.jpg" },
        { path: "/category/racks-y-vajileros", pathName: "Racks y Vajilleros", key: "7", img: "/images/products-category/racks-vajilleros.jpg" },
        { path: "/category/comodas-y-mesas-luz", pathName: "Cómodas y Mesas de Luz", key: "8", img: "/images/products-category/comodas-mesas-luz.jpg" },
        { path: "/category/escritorios-y-estanterias", pathName: "Escritorios y Estanterías", key: "9", img: "/images/products-category/escritorios-estanterias.png" },
        { path: "/category/puffs", pathName: "Puffs", key: "10", img: "/images/products-category/puffs.jpg" },
        { path: "/category/iluminacion", pathName: "Iluminación", key: "11", img: "/images/products-category/iluminacion.jpg" },
        { path: "/category/deco", pathName: "Deco", key: "12", img: "/images/products-category/deco.jpg" },
    ]

    return (
        <div className={css.container} >
            <h1 className={css.titulo} > Nuestros Productos </h1>
            <ProductCategoryList paths={paths} variantValidation={variantValidation} />
        </div>
    )
}

export default ProductsCategoryContainer