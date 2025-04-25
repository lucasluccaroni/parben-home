import css from "./QuienesSomos.module.css"
import { useEffect } from "react"
import NavigateButtons from "../NavigateButtons/NavigateButtons"
import IconosFlotantes from "../IconosFlotantes/IconosFlotantes"

const QuienesSomos = () => {

    useEffect(() => {
        document.title = "Parben Home | Quienes somos"
    }, [])

    return (
        <div className={`${css.container} px-lg-5 px-3`} >
            {/* <NavigateButtons /> */}
            <h1 className={`${css.titulo} mb-4 display-5 fw-bold`} >¿Quiénes somos? </h1>

            <div className="d-flex flex-column align-items-center justify-content-center" style={{maxWidth:1000}}>

                    <p className="text-start border-bottom border-1 border-dark pb-4 text-md-center fs-5 mb-4">
                        En Parben, creemos que cada hogar cuenta una historia única, y estamos aquí para ayudarte a escribir la tuya. Somos profesionales apasionados por el diseño y la experiencia del hogar, y hemos decidido unir fuerzas para transformar la manera en que parejas y familias decoran sus espacios.
                    </p>
                    <p className="text-start border-bottom border-1 border-dark pb-4 text-md-center fs-5 mb-4">
                        Nuestra misión va más allá de ofrecer muebles y sofás de calidad; queremos brindarte una experiencia excepcional en cada paso del camino. Desde el momento en que inicias tu búsqueda, hasta la post venta, nuestro equipo está a tu lado, acompañándote y guiándote para que tomar decisiones sobre la decoración de tu hogar sea un proceso agradable y sin complicaciones.
                    </p>
                    <p className="text-start border-bottom border-1 border-dark pb-4 text-md-center fs-5 mb-4">
                        Con años de experiencia en la fabricación de muebles para venta mayorista, hemos dado un paso adelante. Hoy, no solo creamos piezas que combinan durabilidad y diseño, sino que te ofrecemos un servicio personalizado que se adapta a tus necesidades. Valoramos tu confianza y nos comprometemos a ser transparentes y accesibles en todo momento.
                    </p>
                    <p className="text-start border-bottom border-1 border-dark pb-4 text-md-center fs-5 mb-4" >
                        En Parben, no solo vendemos muebles, construimos relaciones significativas. Nuestro objetivo es que cada cliente se sienta acompañado y satisfecho, no solo durante la compra, sino también en la post venta, asegurando que tu experiencia sea memorable y placentera.
                        Te invitamos a descubrir cómo juntos podemos transformar tus espacios en un hogar lleno de vida, calidez y estilo.
                    </p>
            </div>
            <IconosFlotantes/>
        </div>
    )
}

export default QuienesSomos