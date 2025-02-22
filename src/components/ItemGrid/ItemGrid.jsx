
import Item from "../Item/Item"
import css from "./ItemGrid.module.css"

const ItemGrid = ({ products }) => {
    return (
        <div className={css.grid}>
            {
                products.map(product => {
                    return (
                        <Item {...product} key={product.id}/>
                    )
                })
            } 
        </div>
    )
}

export default ItemGrid