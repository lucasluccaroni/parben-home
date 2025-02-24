import { Link } from "react-router-dom"
import { useEffect } from "react"
import Tips from "../Tips/Tips"
import css from "./TipsView.module.css"
import NavigateButtons from "../NavigateButtons/NavigateButtons"

const TipsView = () => {
    useEffect(()=>{
        document.title = "Parben Home | Tips"
    }, [])

    return(
        <div className={css.container}>
            {/* <Link className={css.navigateButton} to={`/`} > Volver </Link> */}
            <NavigateButtons/>
            <h1 className={css.titulo}> Tips </h1>
            <h2 className={css.subTitulo} > ¿Cómo comprar con nosotros? </h2>
            <Tips number={1} color={"color2"} />
            <Tips number={2} color={"color1"}/>
            <Tips number={3} color={"color2"}/>

        </div>
    )
}

export default TipsView