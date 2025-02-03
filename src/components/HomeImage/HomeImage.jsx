import css from "./HomeImage.module.css"

const HomeImage = () => {
    return (
        <>
            <img className={css.fotoHome} src="/images/foto-home.jpg" alt="Imagen de inicio" />
        </>
    )
}

export default HomeImage