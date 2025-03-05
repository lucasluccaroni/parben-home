
export const paths = [
    { path: "/category/sofas", pathName: "Sofás", key: "1", img: "/images/products-category/sofas.png" },
    { path: "/category/esquineros", pathName: "Esquineros", key: "2", img: "/images/products-category/esquineros.jpg" },
    { path: "/category/poltronas", pathName: "Poltronas", key: "3", img: "/images/products-category/poltronas.png" },
    { path: "/category/mesas", pathName: "Mesas", key: "4", img: "/images/products-category/mesas.png" },
    { path: "/category/mesas-ratonas", pathName: "Mesas Ratonas", key: "5", img: "/images/products-category/ratonas.png" },
    { path: "/category/sillas", pathName: "Sillas", key: "6", img: "/images/products-category/sillas.png" },
    { path: "/category/racks-y-vajilleros", pathName: "Racks y Vajilleros", key: "7", img: "/images/products-category/racks-vajilleros.png" },
    { path: "/category/comodas-y-mesas-luz", pathName: "Cómodas y Mesas de Luz", key: "8", img: "/images/products-category/comodas-mesas-luz.png" },
    { path: "/category/escritorios-y-estanterias", pathName: "Escritorios y Estanterías", key: "9", img: "/images/products-category/escritorios-estanterias.png" },
    { path: "/category/puffs", pathName: "Puffs", key: "10", img: "/images/products-category/puffs.png" },
    { path: "/category/iluminacion", pathName: "Iluminación", key: "11", img: "/images/products-category/iluminacion.jpg" },
    { path: "/category/deco", pathName: "Deco", key: "12", img: "/images/products-category/deco.png" },
]


export const matchPathName = (array, categoryId) => {
    for (let i = 0; i < array.length; i++) {
        const parts = array[i].path.split("/category/")
        
        if(parts[1] === categoryId){
            return array[i].pathName
        }
    }
}