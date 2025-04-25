import { Link } from "react-router-dom"
import styles from "./ProductCategory.module.css"
import variantStyles from "./ProductCategoryVariant.module.css"
import { useEffect, useState } from "react"

const ProductCategory = ({ path, pathName, img, variantValidation }) => {
    const [css, setCss] = useState(styles)

    useEffect(() => {
        setCss(variantValidation ? variantStyles : styles)
    }, [variantValidation])

    return (
        <div className="d-flex justify-content-center align-items-center overflow-hidden bg-dark m-2">
            <Link style={{ backgroundImage: `url(${img})` }} className={css.links} to={`${path}`} pathname={pathName}> {pathName} </Link>
        </div>
    )
}

export default ProductCategory