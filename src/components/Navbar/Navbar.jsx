import css from "./Navbar.module.css"
import ButtonHamb from "../ButtonHamb/ButtonHamb"
import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={css.nav}>
            <img onClick={() => navigate("/")} src={"./logo-nav.png"} alt="Parben Home Logo" className={css.logo} />
            <section className={css.section}>
                <Link to="/" > Home </Link>
                <ButtonHamb />
                <Link to="/servicios" > Servicios </Link>
                <Link to="/tips" > Tips </Link>
                <Link to="contacto" > Contacto </Link>
            </section>
            <Link to="como-comprar"> ¿Cómo comprar? </Link>
        </nav>
    )
}

export default Navbar

