import { useState, useEffect } from "react";


export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [productCategory, setProductCategory] = useState(null)


    useEffect(()=>{

        const fetchData = async () =>{
            try{
                setLoading(true)
                const result = await asyncFunction()
                setData(result)
                setProductCategory(result.category)
                
            } 
            catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData()
    }, dependencies)

    return {
        data,
        loading,
        error,
        productCategory
    }
}


