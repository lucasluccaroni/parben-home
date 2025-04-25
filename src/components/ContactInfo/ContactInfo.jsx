import css from "./ContactInfo.module.css"

const ContactInfo = () => {
    return (
        <div className={css.container}>
            {/* <img className={css.img} src="./images/logo-navegador2.png" alt="Parben Home Logo" /> */}
            <h2 className="fs-1"> Vení a visitarnos </h2>
            <p className={css.direccion} >Echeverría 2485, CABA - CP.1428 - Buenos Aires</p>
            <div className={css.listaHorarios} >
                <h2 className="fs-3 mt-3" style={{ textDecoration: "underline" }} > Horarios </h2>
                <p className={css.text} > Lunes a viernes: 10 hs a 19 hs </p>
                <p className={css.text} > Sábados: 10 hs a 17 hs </p>
            </div>
            <div className={css.listaTelMail}>
                <h2 className="fs-3" style={{ textDecoration: "underline" }} > Contacto</h2>
                <p className={css.text} > Celular: 1170660505</p>
                <p className={css.text} >info@parbenhome.com</p>
            </div>
        </div>
    )
}

export default ContactInfo