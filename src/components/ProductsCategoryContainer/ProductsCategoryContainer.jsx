import styles from "./ProductsCategoryContainer.module.css"
import variantStyles from "./ProductsCategoryContainerVariant.module.css"
import ProductCategoryList from "../ProductsCategoryList/ProductsCategoryList"

const ProductsCategoryContainer = ({variant}) => {
    const css = variant ? variantStyles : styles

    const paths = [
        {path:"/category/sofas", pathName: "Sofas", key: "1", img:"/images/products-category/sofas.jpg"},
        {path:"/category/esquineros", pathName: "Esquineros", key: "2", img:"/images/products-category/esquineros.jpg"},
        {path:"/category/poltronas", pathName: "Poltronas", key: "3", img:"/images/products-category/poltronas.jpg"},
        {path:"/category/mesas", pathName: "Mesas", key: "4", img:"/images/products-category/mesas.jpg"},
        {path:"/category/mesas-ratonas", pathName: "Mesas Ratonas", key: "5", img:"/images/products-category/ratonas.jpg"},
        {path:"/category/sillas", pathName: "Sillas", key: "6", img:"/images/products-category/sillas.jpg"},
        {path:"/category/racks-y-vajileros", pathName: "Racks y Vajilleros", key: "7"},
        {path:"/category/comodas-y-mesas-luz", pathName: "Cómodas y Mesas de Luz", key: "8"},
        {path:"/category/escritorios-y-estanterias", pathName: "Escritorios y Estanterías", key: "9"},
        {path:"/category/puffs", pathName: "Puffs", key: "10", img:"/images/products-category/puffs.jpg"},
        {path:"/category/iluminacion", pathName: "Iluminación", key: "11"},
        {path:"/category/deco", pathName: "Deco", key: "12"},
    ]

    return (
        <div className={css.container} >
            <h1 className={css.titulo} > Productos </h1>
            <ProductCategoryList paths={paths} />
        </div>
    )
}

export default ProductsCategoryContainer