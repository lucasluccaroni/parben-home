import css from "./ItemDetailInfo.module.css"

const ItemDetailInfo = ({ name, description1, description2, description3 }) => {
    return (
        <div className={css.container} >

            <div className={css.nameContainer} >
                <h1 className={css.name} > {name} </h1>
                <hr className={css.line} />
            </div>

            <div className={css.descriptions} >
                <h3> Características </h3>
                <hr className={css.line} />

                <div className={css.text} >
                    <p className={css.description} > -  {description1}</p>
                    <p className={css.description} > -  {description2}</p>
                    <p className={css.description} > -  {description3}</p>
                </div>

            </div>

            <div className={css.linksContainer} >

                <a className={css.boton} href="https://wa.me/5491170660505" target="_blank" rel="noopener noreferrer">
                    <p className={css.linkText} > ¡Lo quiero! </p>
                </a>

                <a className={css.boton} href="/test.pdf" target="_blank" rel="noopener noreferrer">
                    <p className={css.linkText} > Lista de precios </p>
                </a>

            </div>
        </div>
    )
}

export default ItemDetailInfo