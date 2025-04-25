import { Link } from "react-router-dom"
import css from "./DropdownDeProductos.module.css"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export const DropdownDeProductos = () => {
  return (
        <div className="dropdown item-navbar text-center" style={{fontSize:14}}>
            <span className={`${css.link} dropdown-toggle`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
            </span>
            <ul className={`${css.menu} dropdown-menu p-2`}>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/productos"} ><MdOutlineKeyboardArrowRight/> Ver Todo</Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/sofas"} ><MdOutlineKeyboardArrowRight/> Sofás</Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/esquineros"} ><MdOutlineKeyboardArrowRight/> Esquineros</Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/poltronas"} ><MdOutlineKeyboardArrowRight/> Poltronas </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/mesas"} ><MdOutlineKeyboardArrowRight/> Mesas </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/mesas-ratonas"} ><MdOutlineKeyboardArrowRight/>Mesas Ratonas</Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/sillas"} ><MdOutlineKeyboardArrowRight/> Sillas </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/racks-y-vajilleros"} ><MdOutlineKeyboardArrowRight/> Racks y Vajilleros</Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/comodas-y-mesas-luz"} ><MdOutlineKeyboardArrowRight/> Cómodas y Mesas de Luz </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/escritorios-y-estanterias"} ><MdOutlineKeyboardArrowRight/> Escritorios y Estanterias </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/puffs"} ><MdOutlineKeyboardArrowRight/> Puffs </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/iluminacion"} ><MdOutlineKeyboardArrowRight/> Ilumniación </Link></li>
                <li className={`${css.itemMenu} pb-1 text-start`}><Link className="text-decoration-none text-white" to={"/category/deco"} ><MdOutlineKeyboardArrowRight/> Deco </Link></li>
            </ul>
        </div>
  )
}
