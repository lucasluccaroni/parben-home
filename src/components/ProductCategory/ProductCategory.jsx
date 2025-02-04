import { Link } from "react-router-dom"
import styles from "./ProductCategory.module.css"
import variantStyles from "./ProductCategoryVariant.module.css"

const ProductCategory = ({ path, pathName, img, variantValidation }) => {
    const css = variantValidation ? variantStyles : styles

    return (
        <Link style={{ backgroundImage: `url(${img})` }} className={css.links} to={`${path}`} > {pathName} </Link>
    )
}

export default ProductCategory