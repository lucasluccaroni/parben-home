import css from "./ProductsCategoryContainer.module.css"
import ProductCategoryList from "../ProductsCategoryList/ProductsCategoryList"

const ProductsCategoryContainer = () => {
    const paths = [
        {path:"/category/sofas", pathName: "Sofas", key: "1"},
        {path:"/category/esquineros", pathName: "Esquineros", key: "2"},
        {path:"/category/poltronas", pathName: "Poltronas", key: "3"},
        {path:"/category/mesas", pathName: "Mesas", key: "4"},
        {path:"/category/mesas-ratonas", pathName: "Mesas Ratonas", key: "5"},
        {path:"/category/sillas", pathName: "Sillas", key: "6"},
        {path:"/category/racks-y-vajileros", pathName: "Racks y Vajilleros", key: "7"},
        {path:"/category/comodas-y-mesas-luz", pathName: "Cómodas y Mesas de Luz", key: "8"},
        {path:"/category/escritorios-y-estanterias", pathName: "Escritorios y Estanterías", key: "9"},
        {path:"/category/puffs", pathName: "Puffs", key: "10"},
        {path:"/category/iluminacion", pathName: "Iluminación", key: "11"},
        {path:"/category/deco", pathName: "Deco", key: "12"},
    ]

    return (
        <div className={css.container} >
            <h1 className={css.titulo} > Nuestros productos </h1>
            <ProductCategoryList paths={paths} />
        </div>
    )
}

export default ProductsCategoryContainer