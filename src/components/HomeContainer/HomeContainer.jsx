import css from "./HomeContainer.module.css"
import ProductsCategoryContainer from "../ProductsCategoryContainer/ProductsCategoryContainer"
import VideoContainer from "../VideoContainer/VideoContainer"
import InfoMapContainer from "../InfoMapContainer/InfoMapContainer"
import { useEffect } from "react"

const HomeContainer = () => {
    useEffect(()=>{
        document.title = "Parben Home | Inicio"
    }, [])
    return (
        <div className={css.homeContainer} >
            <img className={css.fotoHome} src="/images/foto-home.jpg" alt="Imagen de inicio" />
            <h1>BIENVENIDOS A PARBEN HOME</h1>
            <ProductsCategoryContainer/>
            <VideoContainer/>
            <InfoMapContainer/>
        </div>
    )
}

export default HomeContainer