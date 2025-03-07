import styles from "./ProductsCategoryContainer.module.css"
import variantStyles from "./ProductsCategoryContainerVariant.module.css"
import ProductCategoryList from "../ProductsCategoryList/ProductsCategoryList"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import { useEffect, useState } from "react"
import { paths } from "../../utils/paths"

const ProductsCategoryContainer = ({ variantValidation }) => {
    const [css, setCss] = useState(styles)

    useEffect(() => {
        document.title = "Parben Home | Productos"
        setCss(variantValidation ? variantStyles : styles)
    }, [variantValidation])

    return (
        <div className={css.container} >
            {variantValidation && <NavigateButtons />}
            <h1 className={css.titulo} > Nuestros Productos </h1>
            <ProductCategoryList paths={paths} variantValidation={variantValidation} />
        </div>
    )
}

export default ProductsCategoryContainer