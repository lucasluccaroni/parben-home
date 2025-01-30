import css from "./ContactInfo.module.css"

const ContactInfo = () => {
    return (
        <div className={css.container}>
            <h1> Veni a visitarnos </h1>
            <p>Av Olazabal 2315, CABA - CP.1428 - Buenos Aires</p>
            <div className={css.listaHorarios} >
                <h2> Horarios </h2>
                <p> Lunes a viernes: 11hs a 18hs </p>
                <p> Sabados: 11hs a 16hs </p>
            </div>
            <div className={css.listaTelMail}>
                <h2> Contacto</h2>
                <p> Tel1: 1122334455</p>
                <p>Tel2: 1122334455</p>
                <p>mail@mail.com</p>
            </div>
        </div>
    )
}

export default ContactInfo