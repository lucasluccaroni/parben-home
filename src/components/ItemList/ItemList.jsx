import Item from "../Item/Item"
import css from "./ItemList.module.css"

const ItemList = ({ products }) => {
    return (
        <div className={css.list}>
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

export default ItemList