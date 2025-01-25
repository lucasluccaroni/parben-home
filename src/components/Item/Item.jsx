
const Item = ({name, price, img, category}) => {
    return (
        <div>
            <h2> {name} </h2>
            <h3> {price} </h3>
            <img src={img} style={{ width: 300 }} />
        </div>
    )
}

export default Item