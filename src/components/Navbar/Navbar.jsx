import css from "./Navbar.module.css"
import ButtonHamb from "../ButtonHamb/ButtonHamb"
import Button from "../Button/Button"

const Navbar = () => {

    const handleClick = () => console.log(`Click en home `)

    return (
        <nav className={css.nav}>
            <h1 className={css.title}> JJMuebles </h1>
            {/* <img src={"./vite.svg"} /> */}
            <section className={css.section}>
                <ButtonHamb />
                <Button label={"Home"} clase={"colorVerde"} callback={handleClick} />
                <Button label={"Servicios"} clase={"colorNaranja"} callback={() => console.log("Click en Servicios")} />
                <Button label={"Contacto"} clase={"colorAzul"} callback={() => console.log("Click en Contacto")} />
                <Button label={"¿Cómo comprar?"} clase={"colorRojo"} callback={() => console.log("Click en Como comprar")} />
            </section>
            <Button label={"¡COMPRA AHORA!"} />

        </nav>
    )
}

export default Navbar

