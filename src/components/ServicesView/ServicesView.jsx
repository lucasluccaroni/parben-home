import { useEffect } from "react"
import { Link } from "react-router-dom"
import ServicesComponent from "../ServicesComponent/ServicesComponent"
import css from "./ServicesView.module.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons"


const ServicesView = () => {
    useEffect(() => {
        document.title = "Parben Home | Servicios"
        window.scrollTo({ top: 0, behavior: "instant" })
    }, [])

    return (
        <div className={css.container}>
            {/* <Link className={css.navigateButton} to={`/`} > Volver </Link> */}
            <NavigateButtons/>
            <h1 className={css.subTitulo} >Los servicios que te ofrecemos.</h1>
            <ServicesComponent variant={0} imagen={3} />
            <ServicesComponent variant={1} imagen={3} reverse={true} />
            <ServicesComponent variant={2} imagen={3} />

        </div>
    )
}

export default ServicesView