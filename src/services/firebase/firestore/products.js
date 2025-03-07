import { db } from "../firebaseConfig";
import {
    getDocs,
    collection,
    getDoc,
    doc
} from "firebase/firestore";
import { productsDTO } from "../../../dto/products"


export const useProducts = () => {

    //- Traigo productos por categorias de la DB (Nueva refactorizacion de la DB)
    const getProductsByCategory = async (categoryId) => {
        try {

            let querySnapShot

            // Si existe un categoryId, busca la subcoleccion dentro de products y hace un getDocs a todos los productos de esa categoria
            if (categoryId) {
                const categoryRef = collection(db, `products/categories/${categoryId}`)
                console.log("CATEGORY REF => ", categoryRef)
                querySnapShot = await getDocs(categoryRef)
                console.log(querySnapShot)
            } else {

                // Si no se proporciona una categoria, buscar en todas las categorias
                const categories = ["sofas", "esquineros", "poltronas", "mesas", "mesas-ratonas", "sillas", "racks-y-vajilleros", "comodas-y-mesas-luz", "escritorios-y-estanterias", "puffs", "iluminacion", "deco"] // Listado de categorias
                querySnapShot = []

                for (let i = 0; i < categories.length; i++) {
                    const categoryRef = collection(db, `products/categories/${categories[i]}`)
                    const snapshot = await getDocs(categoryRef)
                    querySnapShot = querySnapShot.concat(snapshot.docs)
                }
            }

            const products = querySnapShot.docs.map(doc => {
                return productsDTO(doc)
            })
            return products
        }
        catch (err) {
            console.log("Error en getProductsByCategory - productsJs => ", err)
            return null
        }
    }

    //- Traigo productos por categorias ID de la DB (Nueva refactorizacion de la DB)
    const getProductById = async (productId) => {
        try {
            const documentRef = doc(db, "all_products", productId)
            const queryDocumentSnapShot = await getDoc(documentRef)
            console.log("queryDocumentSnapShot en productJs => ", queryDocumentSnapShot)
            const productAdapted = productsDTO(queryDocumentSnapShot)  // DTO
            return productAdapted
        }
        catch (err) {
            console.log("Error en getProductsById - poductsJs => ", err)
            return null
        }
    }

    return {
        getProductById,
        getProductsByCategory
    }
}