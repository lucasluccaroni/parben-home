import { Link } from "react-router-dom"

const Item = ({id, name, price, img, category}) => {
    return (
        <div>
            <h2> {name} </h2>
            <h3> {price} </h3>
            <img src={img} style={{ width: 300 }} />
            <Link to={`/detalle/${id}`} > Ver detalle </Link>
        </div>
    )
}

export default Item