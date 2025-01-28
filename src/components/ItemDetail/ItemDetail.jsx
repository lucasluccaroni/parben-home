import css from "./ItemDetail.module.css"
import ItemDetailInfo from "../ItemDetailInfo/ItemDetailInfo"
const ItemDetail = ({id, name, price, img, category, description}) => {
    return(
        <div className={css.container}>
            <img src={img}/>
            <ItemDetailInfo  />
            <h1> {name} </h1>
            <p>  {category} </p>
            <h3> {description} </h3>
            <h3> {price} </h3>


        </div>
    )
}

export default ItemDetail