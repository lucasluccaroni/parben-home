import css from "./ButtonHamb.module.css"

const ButtonHamb = () => {
    return (
        <>
            <div className={css.menuContainer}>
                <button className={css.menuButton}>Productos</button>
                <div className={css.menuContent}>
                    <a href="#">Sofas</a>
                    <a href="#">Mesas</a>
                    <a href="#">Poltronas</a>
                    <a href="#">Juego comedor</a>
                </div>
            </div>
        </>
    )
}

export default ButtonHamb