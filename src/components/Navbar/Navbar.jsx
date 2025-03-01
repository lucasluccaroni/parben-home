import styles from "./Navbar.module.css"
import stylesVariant from "./NavbarVariant.module.css"
import ButtonHamb from "../ButtonHamb/ButtonHamb"
import { Link, useNavigate, useLocation } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    let css
    if(pathname !== "/"){
        css = stylesVariant
    } else {
        css = styles
    }

    console.log(pathname)

    return (
        <nav className={css.nav}>
            <img onClick={() => navigate("/")} src={"/images/logo-nav.png"} alt="Parben Home Logo" className={css.logo} />
            <section className={css.section}>
                <Link className={css.link} to="/" > Inicio </Link>
                <ButtonHamb />
                <Link className={css.link} to="/servicios" > Servicios </Link>
                <Link className={css.link} to="/quienes-somos" > Nosotros </Link>
                <Link className={css.link} to="contacto" > Contacto </Link>
            </section>
            <Link className={css.comoComprarButton} to="como-comprar"> ¿Cómo comprar? </Link>
        </nav>
    )
}

export default Navbar

