import css from "./Navbar.module.css"
import ButtonHamb from "../ButtonHamb/ButtonHamb"
import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={css.nav}>
            <img onClick={() => navigate("/")} src={"/images/logo-nav2.png"} alt="Parben Home Logo" className={css.logo} />
            <section className={css.section}>
                <Link className={css.link} to="/" > Inicio </Link>
                <ButtonHamb />
                <Link className={css.link} to="/servicios" > Servicios </Link>
                <Link className={css.link} to="/tips" > Tips </Link>
                <Link className={css.link} to="contacto" > Contacto </Link>
            </section>
            <Link className={css.comoComprarButton} to="como-comprar"> ¿Cómo comprar? </Link>
        </nav>
    )
}

export default Navbar

