import emailjs from "@emailjs/browser"

const publicKey = import.meta.env.VITE_publicKey
const serviceId = import.meta.env.VITE_serviceId
const templateId = import.meta.env.VITE_templateId

export const sendEmail = async (data) => {
    const { firstName, lastName, phone, email, message } = data

    const templateParams = {
        from_firstName: firstName,
        from_lastName: lastName,
        from_phone: phone,
        from_email: email,
        to_name: "Parben Home",
        message
    }

    try {
        const service = await emailjs.send(serviceId, templateId, templateParams, publicKey)
        // console.log("Exito mandando el mail!")
        // console.log(service)
    }
    catch (err) {
        // console.log("ERROR MANDANDO EL MAIL => ", err)
    }
} 