import css from "./QuienesSomos.module.css"
import { useEffect } from "react"
import NavigateButtons from "../NavigateButtons/NavigateButtons"

const QuienesSomos = () => {

    useEffect(() => {
        document.title = "Parben Home | Quienes somos"
    }, [])

    return (
        <div className={css.container} >
            <NavigateButtons />
            <h1 className={css.titulo} > Quiénes somos </h1>

            <div className={css.grandContainer} >

                <div className={css.textContainer} >
                    <h2 className={css.text}>
                        En Parben, creemos que cada hogar cuenta una historia única, y estamos aquí para ayudarte a escribir la tuya. Somos profesionales apasionados por el diseño y la experiencia del hogar, y hemos decidido unir fuerzas para transformar la manera en que parejas y familias decoran sus espacios.
                    </h2>
                </div>
                <div className={css.textContainer} >
                    <h2 className={css.text}>
                        Nuestra misión va más allá de ofrecer muebles y sofás de calidad; queremos brindarte una experiencia excepcional en cada paso del camino. Desde el momento en que inicias tu búsqueda, hasta la postventa, nuestro equipo está a tu lado, acompañándote y guiándote para que tomar decisiones sobre la decoración de tu hogar sea un proceso agradable y sin complicaciones.
                    </h2>
                </div>
                <div className={css.textContainer} >
                    <h2 className={css.text}>
                        Con años de experiencia en la fabricación de muebles para venta mayorista, hemos dado un paso adelante. Hoy, no solo creamos piezas que combinan durabilidad y diseño, sino que te ofrecemos un servicio personalizado que se adapta a tus necesidades. Valoramos tu confianza y nos comprometemos a ser transparentes y accesibles en todo momento.


                    </h2>
                </div>
                <div className={css.textContainer} >
                    <h2 className={css.text} >
                        En Parben, no solo vendemos muebles; construimos relaciones significativas. Nuestro objetivo es que cada cliente se sienta acompañado y satisfecho, no solo durante la compra, sino también en la postventa, asegurando que tu experiencia sea memorable y placentera.

                        Te invitamos a descubrir cómo juntos podemos transformar tus espacios en un hogar lleno de vida, calidez y estilo.
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default QuienesSomos