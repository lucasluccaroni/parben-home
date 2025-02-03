import { Link } from "react-router-dom"
import css from "./ProductCategory.module.css"

const ProductCategory = ({ path, pathName, img }) => {
    return (
        <Link style={{ backgroundImage: `url(${img})` }} className={css.links} to={`${path}`} > {pathName} </Link>
    )
}

export default ProductCategory