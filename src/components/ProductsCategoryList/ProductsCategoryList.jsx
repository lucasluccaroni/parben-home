import styles from "./ProductsCategoryList.module.css"
import variantStyles from "./ProductsCategoryListVariant.module.css"
import ProductCategory from "../ProductCategory/ProductCategory"

const ProductCategoryList = ({ paths, variantValidation }) => {

    const css = variantValidation ? variantStyles : styles

    return (
        <div className={css.listContainer} key={paths.key}>
            {
                paths.map(p => {
                    return (
                        <ProductCategory {...p} key={p.key} variantValidation={variantValidation} />
                    )
                })
            }
        </div>
    )
}

export default ProductCategoryList