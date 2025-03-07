
export const formValidator = (data) => {
    const { firstName, lastName, phone, email, message } = data
    let valid = true
    const errors = []

    const regexText = /^[a-zA-Z]{3,}$/
    const regexNumber = /^[0-9]{8,}$/
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const wordCount = message.trim().split(/\s+/).length


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

    } else if (!message.trim() || (wordCount < 2)) {
        errors.push("Error. Por favor detalle su consulta.")
        valid = false
    }

    return { valid, errors }
}
