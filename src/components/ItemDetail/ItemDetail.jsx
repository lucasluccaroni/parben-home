import css from "./ItemDetail.module.css"
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo"
const ItemDetail = ({ id, name, img2, category, description1, description2, description3 }) => {
    const props = {
        name, category, description1, description2, description3
    }
    return (
        <div className={css.container}>
            <div className={css.imgContainer}>
            <img className={css.img} src={img2} />
            </div>
            <ItemDetailInfo {...props} />
            {/* <div className={css.waterMark} ></div> */}
            <img  className={css.waterMark} src="/images/logo-navegador3.png" alt="marca-de-agua" />
        </div>
    )
}

export default ItemDetail