import css from "./ContactView.module.css"
import InfoMapContainer from "../InfoMapContainer/InfoMapContainer"
import ContactForm from "../ContactForm/ContactForm"

const ContactView = () => {
    return(
        <div>
            <h1>Contact View</h1>
            <ContactForm />
            <InfoMapContainer/>
        </div>
    )
}

export default ContactView