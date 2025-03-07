import css from "./ItemDetail.module.css"
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo"
const ItemDetail = ({ id, name, img1, img2, category, description1, description2, description3 }) => {
    const props = {
        name, category, description1, description2, description3
    }
    return (
        <div className={css.container}>
            <div className={css.imgContainer}>
                <img className={css.img} src={img2} />
            </div>
            <ItemDetailInfo {...props} />
        </div>
    )
}

export default ItemDetail