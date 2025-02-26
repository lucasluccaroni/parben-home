import { db } from "../firebaseConfig";
import {
    getDocs,
    collection,
    query,
    where,
    getDoc,
    doc
} from "firebase/firestore";
import { productsDTO } from "../../../dto/products"


export const useProducts = () => {

    // Traigo los productos de la DB + validacion para traer por categoriga
    const getProducts = async (categoryId) => {
        try {
            const collectionRef = categoryId
                ? query(collection(db, "products"), where("category", "==", categoryId))
                : collection(db, "products")

            const querySnapShot = await getDocs(collectionRef)
            console.log("querySnapShot en productsJs => ", querySnapShot)

            const products = querySnapShot.docs.map(doc => {
                return productsDTO(doc) // DTO
            })
            return products
        }
        catch (err) {
            console.log("Error en getProducts - poductsJs => ", err)
            return null
        }
    }

    //- Traigo productos por categorias de la DB (Nueva refactorizacion de la DB)
    const getProductsByCategory = async (categoryId) => {
        try {
            let querySnapShot

            // Si existe un categoryId, busca la subcoleccion dentro de products y hace un getDocs a todos los productos de esa categoria
            if (categoryId) {
                const categoryRef = collection(db, `products/categories/${categoryId}`)
                console.log("CATEGORY REF => ", categoryRef)
                querySnapShot = await getDocs(categoryRef)
            } else {

                // Si no se proporciona una categoría, buscar en todas las categorías
                const categories = ["sofas", "esquineros", "poltronas", "mesas", "mesas-ratonas", "sillas", "racks-y-vajilleros", "comodas-y-mesas-luz", "escritorios-y-estanterias", "puffs", "iluminacion", "deco"]; // Listado de categorías
                querySnapShot = [];

                for (let i = 0; i < categories.length; i++) {
                    const categoryRef = collection(db, `products/categories/${categories[i]}`);
                    const snapshot = await getDocs(categoryRef);
                    querySnapShot = querySnapShot.concat(snapshot.docs);
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



    // Traigo un producto por ID de la DB
    const getProductById = async (productId) => {
        try {
            const documentRef = doc(db, "products", productId)
            const queryDocumentSnapShot = await getDoc(documentRef)
            console.log("queryDocumentSnapShot en productJs => ", queryDocumentSnapShot)
            const productAdapted = productsDTO(queryDocumentSnapShot)  // DTO
            return productAdapted
            // const fields = queryDocumentSnapShot.data()
            // const product = { id: queryDocumentSnapShot.id, ...fields }
            // return product
        }
        catch (err) {
            console.log("Error en getProductsById - poductsJs => ", err)
            return null
        }
    }

    return {
        getProducts,
        getProductById,
        getProductsByCategory
    }
}