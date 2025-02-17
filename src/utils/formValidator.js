
export const formValidator = (data) => {
    const { firstName, lastName, phone, email, query } = data
    let valid = true
    const errors = []

    const regexText = /^[a-zA-Z]{3,}$/
    const regexNumber = /^[0-9]{8,}$/
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const wordCount = query.trim().split(/\s+/).length


    if (!firstName.trim() || !regexText.test(firstName.trim())) {
        errors.push("El nombre no puede estar incompleto, debe tener un mínimo de 3 caracteres.")
        valid = false

    } else if (!lastName.trim() || !regexText.test(lastName.trim())) {
        errors.push("El apellido no puede estar incompleto, debe tener un mínimo de 3 caracteres.")
        valid = false

    } else if (!phone.trim() || !regexNumber.test(phone.trim())) {
        errors.push("Número de teléfono inválido, inténtelo nuevamente.")
        valid = false


    } else if (!email.trim() || !regexEmail.test(email.trim())) {
        errors.push("Email inválido, inténtelo nuevamente.")
        valid = false

    } else if (!query.trim() || (wordCount < 2)) {
        errors.push("Error. Por favor detalle su consulta.")
        valid = false
    }

    return { valid, errors }
}




// const regexText = /^[a-zA-Z]{3,}$/
// const regexNumber = /^[0-9]{8,}$/
// const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const wordCount = query.trim().split(/\s+/).length


// if (!firstName.trim() || !regexText.test(firstName.trim())) {
//     toast.error("El nombre no puede estar incompleto, debe tener un mínimo de 3 caracteres.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     })
//     return false

// } else if (!lastName.trim() || !regexText.test(lastName.trim())) {
//     toast.error("El apellido no puede estar incompleto, debe tener un mínimo de 3 caracteres.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     })
//     return false

// } else if (!phone.trim() || !regexNumber.test(phone.trim())) {
//     toast.error("Número de teléfono inválido, inténtelo nuevamente.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     })
//     return false

// } else if (!email.trim() || !regexEmail.test(email.trim())) {
//     toast.error("Email inválido, inténtelo nuevamente.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     })
//     return false

// } else if (!query.trim() || (wordCount < 2)) {
//     toast.error("Error. Por favor detalle su consulta.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     })
//     return false

// } else {
//     toast.success("Su consulta fue enviada, a la brevedad se contactarán con usted. Gracias.", {
//         position: "top-center",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//     })
//     setValid(true)
// }
