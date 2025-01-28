const products = [
    {
        id: "1",
        name: "Sofa Baires",
        price: "1000000",
        category: "sofas",
        img: "https://dcdn.mitiendanube.com/stores/001/136/305/products/bairres-tn1-1ff76b338ba4167ce916891812223556-240-0.webp",
        description: "Descripcion de Sofa Baires"
    },
    {
        id: "2",
        name: "Poltrona Dublin",
        price: "500000",
        category: "poltronas",
        img: "https://dcdn.mitiendanube.com/stores/001/136/305/products/dublin-tn11-01e695ae907120e0ce16903999198036-1024-1024.webp",
        description: "descripcion de Poltrona Dublin"
    },
    {
        id: "3",
        name: "Sofa Manhattan",
        price: "1200000",
        category: "sofas",
        img: "https://dcdn.mitiendanube.com/stores/001/136/305/products/img_5805-51-6a7b1368ba3514960616891768086426-1024-1024.webp",
        description: "descripcion de Sofa Manhattan"
    },
    {
        id: "4",
        name: "Esquinero Creamfield",
        price: "400000",
        category: "esquineros",
        img: "https://dcdn.mitiendanube.com/stores/001/136/305/products/creamfield-tn1-72f158cdc0bc60e99116909959074191-640-0.webp",
        description: "descripcion de Esquinero Creamfield"
    }
]



// const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 3000)
//     })
// }
// export default getProducts


export const getProducts = async () => {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(products)
            }, 1000)
        })
        return result
    }
    catch (err) {
        console.log("ERROR EN EN ASYNCMOCK => ", err)
    }
}

export const getProductByCategory = async (categoryId) => {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                const productsFound = products.filter(prod => prod.category === categoryId)
                console.log(`RESULTADO DE BUSQUEDA CATEROGRIA ${categoryId} => `, productsFound)
                resolve(productsFound)
            }, 1000)
        })

        return result
    }
    catch (err) {
        console.log("ERRO EN ASYNCMOCK - category", err)
    }
}


export const getProductById = async (itemId) => {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                const productFound = products.find(prod => prod.id == itemId)
                resolve(productFound)
            }, 1000)
        })
        return result
    }
    catch (err) {
        console.log("ERROR EN EN ASYNCMOCK - byId => ", err)
    }
}

