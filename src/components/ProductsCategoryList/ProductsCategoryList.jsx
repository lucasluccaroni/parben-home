import css from "./ProductsCategoryList.module.css"
import ProductCategory from "../ProductCategory/ProductCategory"

const ProductCategoryList = ({ paths }) => {
    return (
        <div className={css.listContainer} key={paths.key}>
            {
                paths.map(p => {
                    return (
                        <ProductCategory {...p} key={p.key} />
                    )
                })
            }
        </div>
    )
}

export default ProductCategoryList