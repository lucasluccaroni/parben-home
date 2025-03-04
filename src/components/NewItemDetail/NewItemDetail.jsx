import css from "./NewItemDetail.module.css"

const NewItemDetail = () => {
    return (
        <div className={css.container} >
            <div className={css.imgContainer} >
                <img className={css.img} src="/images/products-category/deco.png" alt="deco" />
            </div>

            <div className={css.itemDetailInfoContainer} >
                <h1>ItemDetailInfo</h1>
            </div>
        </div>
    )
}

export default NewItemDetail

