import css from "./ContactInfo.module.css"

const ContactInfo = () => {
    return (
        <div className={css.container}>
            <img className={css.img} src="./images/logo-navegador2.png" alt="Parben Home Logo" />
            <h1 className={css.titulo}> Veni a visitarnos </h1>
            <p className={css.direccion} >Echeverría 2485, CABA - CP.1428 - Buenos Aires</p>
            <div className={css.listaHorarios} >
                <h2 style={{ textDecoration: "underline" }} > Horarios </h2>
                <p> Lunes a viernes: 10 hs a 19 hs </p>
                <p> Sabados: 10 hs a 16 hs </p>
            </div>
            <div className={css.listaTelMail}>
                <h2 style={{ textDecoration: "underline" }} > Contacto</h2>
                <p> Tel1: 1122334455</p>
                <p>Tel2: 1122334455</p>
                <p>parbendivan@gmail.com</p>
            </div>
        </div>
    )
}

export default ContactInfo