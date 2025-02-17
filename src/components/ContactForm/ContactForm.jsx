import { useState } from "react"
import { toast } from "react-toastify"
import { formValidator } from "../../utils/formValidator"
import css from "./ContactForm.module.css"

const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [query, setQuery] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            phone,
            email,
            query
        }
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
        } else {
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
            console.log(data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={css.formContainer} >
                <label >
                    <h3>Nombre</h3>
                    <input type="text" placeholder="Nombre" value={firstName} onChange={({ target }) => setFirstName(target.value)} />
                </label>
                <label >
                    <h3>Apellido</h3>
                    <input type="text" placeholder="Apellido" value={lastName} onChange={({ target }) => setLastName(target.value)} />
                </label>
                <label >
                    <h3>Teléfono</h3>
                    <input type="number" placeholder="Teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                </label>
                <label >
                    <h3>Email</h3>
                    <input type="email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} />
                </label>
                <label >
                    <h3>Consulta</h3>
                    <input type="text" placeholder="Escribinos tu consulta" value={query} onChange={({ target }) => setQuery(target.value)} />
                </label>
                <button type="submit"> Enviar </button>
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