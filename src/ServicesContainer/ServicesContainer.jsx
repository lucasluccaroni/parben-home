import { useEffect } from "react"
import Services from "../components/Services/Services"
import css from "./ServicesContainer.module.css"


const ServicesContainer = () => {
    useEffect(() => {
        document.title = "Parben Home | Servicios"
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <div className={css.container}>
            <h1 className={css.subTitulo} >Los servicios que te ofrecemos.</h1>
            <Services variant={0} imagen={3}  />
            <Services variant={1} imagen={3} reverse={true} />
            <Services variant={2} imagen={3} />

        </div>
    )
}

export default ServicesContainer