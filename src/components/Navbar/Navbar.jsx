import styles from "./Navbar.module.css"
import stylesVariant from "./NavbarVariant.module.css"
import {VscMenu, VscClose} from 'react-icons/vsc'
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"
import { DropdownDeProductos } from "../DropdownDeProductos/DropdownDeProductos"


const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [toggleBar, setToggleBar] = useState(true)

    let css
    if (pathname) {
        css = styles
    }

    // console.log(pathname)

    return (
        <nav className={`navbar navbar-expand-xl py-2 px-lg-5 py-4 px-3 w-100 ${pathname === "/" ? "position-absolute bg-transparent" : css.navBackground}`} style={{zIndex:22}}>
            <div className="container-fluid d-flex align-items-center align-self-center justify-content-xl-around w-100">
                
                <div className='d-flex justify-content-center align-items-center'>
                    <a href="/">
                        <img src={"/images/logo-nav2.png"} alt="Parben Home Logo" className={css.logo} />
                    </a>
                </div>

                <button className="navbar-toggler px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span>{toggleBar ? <VscMenu onClick={() => setToggleBar(false)} className='fs-1 text-white'/> : <VscClose onClick={() => setToggleBar(true)} className='fs-1 text-white'/>}</span>
                </button>

                <div className="collapse navbar-collapse d-xl-flex justify-content-center text-black" id="navbarSupportedContent">
                    <div className='d-flex flex-column flex-xl-row align-items-start align-items-xl-center mt-3 mt-xl-0'>
                    
                        <Link className={css.link} to="/">Inicio</Link>

                        <DropdownDeProductos/>
                        
                        <Link className={css.link} to="/servicios">Servicios</Link>
                        
                        <Link className={css.link} to="/quienes-somos">Nosotros</Link>

                        <Link className={css.link} to="contacto">Contacto</Link>

                        <div className="d-flex d-xl-none">
                            <Link className={css.comoComprarButton} to="como-comprar"> ¿Cómo comprar? </Link>
                        </div>

                    </div>
                </div>

                <div className="d-none d-xl-flex justify-content-center align-items-center">
                    <Link className={css.comoComprarButton} to="como-comprar"> ¿Cómo comprar? </Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
