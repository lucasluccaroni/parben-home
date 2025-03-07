import { useEffect } from "react"
import ComoComprar from "../ComoComprar/ComoComprar"
import css from "./ComoComprarView.module.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons"

const ComoComprarView = () => {
    useEffect(() => {
        document.title = "Parben Home | Cómo comprar?"
    }, [])

    const textOptions = (num) => {
        switch (num) {
            case 1:
                return { text1: "Asesoramiento Personalizado ", text2: "Iniciá tu recorrido visitando nuestro showroom o contactándonos por WhatsApp. Nuestro equipo de expertos estará encantado de brindarte asesoramiento personalizado, escuchando tus necesidades y preferencias para ayudarte a encontrar la opción perfecta que se adapte a tu estilo y espacio." }
            case 2:
                return { text1: "Seleccioná tus Piezas", text2: "Explora nuestra amplia variedad de muebles y sofás. Nuestros asesores están a tu lado para ofrecerte sugerencias, responder a tus preguntas y mostrarte todas las opciones disponibles. Juntos, podrás elegir las piezas que mejor se fusionen en tu hogar." }
            case 3:
                return { text1: "Facilidad de Pago", text2: " Para reservar tus muebles, solo necesitarás realizar una seña, que puedes abonar cómodamente via transferencia a través de WhatsApp o en nuestro showroom. Aceptamos diversas formas de pago, para que el proceso sea ágil y sin complicaciones." }
            case 4:
                return { text1: "Coordinación Flexible de Entrega", text2: "Una vez que este listo tu pedido, coordiná la entrega en el horario que mejor se ajuste a tu agenda. Nos adaptamos a tus necesidades para asegurarnos de que el proceso sea lo más cómodo posible para usted." }
            case 5:
                return { text1: "Pago del Saldo", text2: " Cuando tus muebles estén listos para ser presentados en tu hogar, efectuarás el saldo restante en el momento de la entrega, si accediste a nuestra promoción en efectivo. Queremos que recibas tus muebles con total tranquilidad y satisfacción." }
            default:
                break;
        }
    }

    return (
        <div className={css.container}>
            <NavigateButtons />
            <h1 className={css.titulo}> ¿Cómo comprar con nosotros? </h1>
            <h2 className={css.subTitulo} > Comprar el sofá, mueble o ambiente completo con nosotros es un proceso fácil y seguro, que consta de 5 simples pasos:
            </h2>
            <ComoComprar number={1} color={"color2"} texts={textOptions(1)} />
            <ComoComprar number={2} color={"color1"} texts={textOptions(2)} />
            <ComoComprar number={3} color={"color2"} texts={textOptions(3)} />
            <ComoComprar number={4} color={"color1"} texts={textOptions(4)} />
            <ComoComprar number={5} color={"color2"} texts={textOptions(5)} />
        </div>
    )
}

export default ComoComprarView