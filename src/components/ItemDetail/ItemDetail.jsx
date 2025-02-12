import css from "./ItemDetail.module.css"
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo"
const ItemDetail = ({ id, name, price, img, category, description }) => {
    const props = {
        name, price, category, description
    }
    return (
        <div className={css.container}>
            <div className={css.imgContainer}>
            <img className={css.img} src={img} />
            </div>
            <ItemDetailInfo {...props} />
        </div>
    )
}

export default ItemDetail