import css from "./HomeView.module.css"
import ProductsCategoryContainer from "../ProductsCategoryContainer/ProductsCategoryContainer"
import VideoContainer from "../VideoContainer/VideoContainer"
import InfoMapContainer from "../InfoMapContainer/InfoMapContainer"
import { useEffect } from "react"
import HomeImage from "../HomeImage/HomeImage"

const HomeView = () => {
    useEffect(() => {
        document.title = "Parben Home | Inicio"
    }, [])

    return (
        <div className={css.homeContainer} >
            <HomeImage />
            <h1 className={css.titulo} > Parben Home </h1>
            <h2 className={css.subTitulo} >Creamos ambientes que cuentan historias.</h2>
            <ProductsCategoryContainer />
            <VideoContainer />
            <InfoMapContainer />
        </div>
    )
}

export default HomeView