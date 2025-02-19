import { useState } from "react"
import { toast } from "react-toastify"
import { formValidator } from "../../utils/formValidator"
import { addQuerieToDb } from "../../services/firebase/firestore/formQueries"
import { sendEmail } from "../../utils/emailService"
import css from "./ContactForm.module.css"

const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // Funcion para resetear los campos del form
    const resetFormFields = () => {
        setFirstName("")
        setLastName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            phone,
            email,
            message
        }

        // valido los campos ingresados
        const { valid, errors } = formValidator(data)
        console.log(valid)
        console.log(errors)

        if (!valid) {
            errors.forEach(error => toast.error(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",

            }))
            return

        } else {
            // Si todos los campos son correctos, mando la consulta a la DB
            console.log(data)
            const addToDb = await addQuerieToDb(data)

            // Se manda el mail
            sendEmail(data)

            // Toast avisando al user la opreación exitosa
            toast.success("Su consulta fue enviada, a la brevedad se contactarán con usted. Gracias.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })

            // Reseteo los campos del formulario
            resetFormFields()
        }
    }

    return (
        <div className={css.formContainer}>
            <form onSubmit={handleSubmit} className={css.form} >
                <label >
                    <h3 className={css.nombreDeLosCampos}>Nombre</h3>
                    <input
                        className={css.formInput}
                        type="text"
                        value={firstName}
                        onChange={({ target }) => setFirstName(target.value)} />
                </label>
                <label >
                    <h3 className={css.nombreDeLosCampos}>Apellido</h3>
                    <input
                        className={css.formInput}
                        type="text"
                        value={lastName}
                        onChange={({ target }) => setLastName(target.value)} />
                </label>
                <label >
                    <h3 className={css.nombreDeLosCampos}>Teléfono</h3>
                    <input
                        className={css.formInput}
                        type="number"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label >
                    <h3 className={css.nombreDeLosCampos}>Email</h3>
                    <input
                        className={css.formInput}
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)} />
                </label>
                <label >
                    <h3 className={css.nombreDeLosCampos}>Consulta</h3>
                    <textarea
                        className={css.formInputText}
                        type="text"
                        value={message}
                        onChange={({ target }) => setMessage(target.value)} />
                </label>
                <button className={css.submitButton} type="submit"> ENVIAR </button>
            </form>
        </div>
    )
}

export default ContactForm



/*
<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
theme="light"
transition={Bounce}
/>
*/

/*
toast.warn('🦄 Wow so easy!', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
*/