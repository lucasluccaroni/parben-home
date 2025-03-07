import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore"
import { dateNow } from "../../../utils/date"


export const addQuerieToDb = async (querie) => {
    try {

        const date = dateNow()
        const queriesCollection = collection(db, "queries")
        const addQuerie = await addDoc(queriesCollection, { querie, date})
        // console.log(addQuerie)
    }
    catch (err) {
        console.log("Error añadiendo consulta en la base de datos => ", err)
        return null
    }
}