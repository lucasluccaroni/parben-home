import { FaWhatsapp, FaAngleUp } from "react-icons/fa6";
import css from './IconosFlotantes.module.css'

const IconosFlotantes = () => {

    const handleWsp = () => {
      window.open("https://api.whatsapp.com/send?phone=5491170660505&text=¡Hola ParbenHome! Quiero consultarles los siguiente:  ", "_blank");
    };

  return (
    <div className={`d-flex flex-column justify-content-center align-items-end mb-2 me-3 ${css.position}`} style={{zIndex:999}}>
        <span type="button" onClick={handleWsp} className='shadow d-flex justify-content-center align-items-center bg-dark rounded-circle mb-0 box-border'><FaWhatsapp style={{padding:12, fontSize:50}} className={css.textwsp}/></span>
    </div>
  )
}

export default IconosFlotantes