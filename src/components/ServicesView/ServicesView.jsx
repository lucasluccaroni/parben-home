import { useEffect } from "react"
import Services from "../Services/Services"
import css from "./ServicesView.module.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons"


const ServicesView = () => {

    useEffect(() => {
        document.title = "Parben Home | Servicios"
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <div className={css.container}>
            <NavigateButtons/>
            <h1 className={css.titulo} >Los servicios que te ofrecemos</h1>
            <Services/>
        </div>
    )
}

export default ServicesView