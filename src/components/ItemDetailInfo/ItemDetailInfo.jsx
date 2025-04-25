import css from "./ItemDetailInfo.module.css"

const ItemDetailInfo = ({ name, description1, description2, description3 }) => {
    return (
        <div className={css.container} >

            <div className={css.nameContainer} >
                <h1 className={`${css.name} display-5 text-center fw-bold`} > {name} </h1>
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

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center mt-5 pb-4 pb-lg-0 w-100" >

                <button onClick={() => window.open("https://wa.me/5491170660505", "_blank")} className="btn mb-2 mb-sm-0 btn-outline-light mx-2 py-2 w-100" style={{maxWidth:250}}>¡Lo quiero!</button>
                
                <button onClick={() => window.open("/lista-precios.pdf", "_blank")} className="btn btn-outline-light mx-2 py-2 w-100" style={{maxWidth:250}}>Lista de precios</button>

                <img className={css.waterMark} src="/images/logo-navegador3.png" alt="marca-de-agua" />

            </div>
        </div>
    )
}

export default ItemDetailInfo