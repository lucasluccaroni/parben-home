
export const productsDTO = (doc) => {
    const fields = doc.data()

    return {
        id: doc.id,
        name: fields.name,
        category: fields.category,
        description1: fields.description1,
        description2: fields.description2,
        description3: fields.description3,
        img: fields.img,
        img2: fields.img2
    }
}

