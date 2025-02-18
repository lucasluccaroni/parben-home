import { useState } from "react"
import { toast } from "react-toastify"
import { formValidator } from "../../utils/formValidator"
import { addQuerieToDb } from "../../services/firebase/firestore/formQueries"
import css from "./ContactForm.module.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const form = useRef()
    const publicKey = "Z7GVl2qFeTMvYJddK"
    const serviceId = "service_p1tju1c"
    const templateId = "template_asztkp9"

    // Funcion para resetear los campos del form
    const resetFormFields = () => {
        setFirstName("")
        setLastName("")
        setPhone("")
        setEmail("")
        setMessage("")
    }

    const sendEmail = async () => {
        // Template de params para el mail
        const templateParams = {
            from_firstName: firstName,
            from_lastName: lastName,
            from_phone: phone,
            from_email: email,
            to_name: "Parben Home",
            message: message
        }

        try {
            console.log(form.current)
            const service = await emailjs.send(serviceId, templateId, templateParams, publicKey)
            console.log("Exito mandando el mail!")
            console.log(service)
        }
        catch (err) {
            console.log("ERROR MANDANDO EL MAIL => ", err)
        }
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
            sendEmail()

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
            <form ref={form} onSubmit={handleSubmit} className={css.form} >
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