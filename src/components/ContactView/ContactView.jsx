import css from "./ContactView.module.css"
import InfoMapContainer from "../InfoMapContainer/InfoMapContainer"
import ContactForm from "../ContactForm/ContactForm"
import { useEffect } from "react"

const ContactView = () => {

    useEffect(()=>{
        document.title = "Parben Home | Contacto"
    }, [])
    
    return(
        <div className={css.container}>
            <h1 className={css.titulo} >Dejanos tu consulta</h1>
            <ContactForm />
            <InfoMapContainer/>
        </div>
    )
}

export default ContactView