import css from "./ComoComprar.module.css"

const ComoComprar = () => {
    return (
        <div className={css.container} >
            <h1 className={css.titulo} >Como comprar con nosotros</h1>

            <div className={css.grandContainer} >

                <div className={css.contenedor1} >
                    <h2>Dentro de contenedor 1</h2>
                </div>

                <div className={css.contenedor2} >
                    <h2>Dentro de contenedor 2</h2>
                </div>

            </div>   
        </div>
    )
}

export default ComoComprar