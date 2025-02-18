import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore"


export const addQuerieToDb = async (querie) => {
    try {
        const queriesCollection = collection(db, "queries")
        const addQuerie = await addDoc(queriesCollection, querie)
        console.log(addQuerie)
    }
    catch (err) {
        console.log("Error añadiendo consulta en la base de datos => ", err)
        return null
    }
}