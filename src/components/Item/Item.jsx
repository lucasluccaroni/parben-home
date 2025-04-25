import css from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img1, img2 ,category}) => {
    return (
        <div className={css.link} >
            <Link className={css.card} to={`/detalle/${id}`} > 
            <img src={img1} className={css.cardImg} />
            <h3 className={`${css.name} mt-2 mt-md-3 fs-5 align-self-center`} > {name} </h3>
            </Link>
        </div>
    )
}

export default Item