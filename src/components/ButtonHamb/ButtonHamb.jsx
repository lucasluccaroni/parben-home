import css from "./ButtonHamb.module.css"
import { Link } from "react-router-dom"

const ButtonHamb = () => {
    return (
        <>
            <div className={css.menuContainer}>
                <Link className={css.link} to="/productos" > Productos </Link>
                <div className={css.menuContent}>
                    <Link to={"/category/sofas"} > Sofás</Link>
                    <Link to={"/category/esquineros"} > Esquineros</Link>
                    <Link to={"/category/poltronas"} > Poltronas </Link>
                    <Link to={"/category/mesas"} > Mesas </Link>
                    <Link to={"/category/mesas-ratonas"} >Mesas Ratonas</Link>
                    <Link to={"/category/sillas"} > Sillas </Link>
                    <Link to={"/category/racks-y-vajilleros"} > Racks y Vajilleros</Link>
                    <Link to={"/category/comodas-y-mesas-luz"} > Cómodas y Mesas de Luz </Link>
                    <Link to={"/category/escritorios-y-estanterias"} > Escritorios y Estanterias </Link>
                    <Link to={"/category/puffs"} > Puffs </Link>
                    <Link to={"/category/ilumninacion"} > Ilumniación </Link>
                    <Link to={"/category/deco"} > Deco </Link>



                    {/* <a href="#">Sofas</a>
                    <a href="#">Esquineros</a>
                    <a href="#">Poltronas</a>
                    <a href="#">Mesas</a>
                    <a href="#">Mesas Ratonas</a>
                    <a href="#">Sillas</a>
                    <a href="#">Racks y Vajilleros </a>
                    <a href="#">Comodas y Mesas de Luz </a>
                    <a href="#">Escritorios y estanterias </a>
                    <a href="#"> Puffs </a>
                    <a href="#"> Iluminación </a>
                    <a href="#" > Deco</a> */}
                </div>
            </div>
        </>
    )
}

export default ButtonHamb