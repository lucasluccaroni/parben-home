import { db } from "../firebaseConfig";
import {
    getDocs,
    collection,
    query,
    where,
    getDoc,
    doc
} from "firebase/firestore";


export const useProducts = () => {

    const getProducts = async (categoryId) => {
        try {
            const collectionRef = categoryId
                ? query(collection(db, "products"), where("category", "==", categoryId))
                : collection(db, "products")

            const querySnapShot = await getDocs(collectionRef)
            console.log("querySnapShot en productsJs => ", querySnapShot)

            const products = querySnapShot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })
            return products
        }
        catch (err) {
            console.log("Error en getProducts - poductsJs => ", err)
            return null
        }
    }

    const getProductById = async (productId) =>{
        try{
            const documentRef = doc(db, "products", productId)

            const queryDocumentSnapShot = await getDoc(documentRef)
            console.log("queryDocumentSnapShot en productJs => ", queryDocumentSnapShot) 

            const fields = queryDocumentSnapShot.data()
            const product = {id: queryDocumentSnapShot.id, ...fields}
            return product
        }
        catch(err){
            console.log("Error en getProductsById - poductsJs => ", err)
            return null
        }
    }

    return {
        getProducts,
        getProductById
    }
}