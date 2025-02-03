import css from "./ItemDetail.module.css"
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo"
const ItemDetail = ({ id, name, price, img, category, description }) => {
    const props = {
        name, price, category, description
    }
    return (
        <div className={css.container}>
            <img className={css.img} src={img} />
            <ItemDetailInfo {...props} />
        </div>
    )
}

export default ItemDetail