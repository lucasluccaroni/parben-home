import css from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img1, img2 ,category}) => {
    return (
        <div className={css.card} >
            <img src={img1} className={css.cardImg} />
            <h2> {name} </h2>
            <Link className={css.button} to={`/detalle/${id}`} > Ver detalle </Link>
        </div>
    )
}

export default Item