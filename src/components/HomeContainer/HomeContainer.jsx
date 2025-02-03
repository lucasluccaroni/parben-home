import css from "./HomeContainer.module.css"
import ProductsCategoryContainer from "../ProductsCategoryContainer/ProductsCategoryContainer"
import VideoContainer from "../VideoContainer/VideoContainer"
import InfoMapContainer from "../InfoMapContainer/InfoMapContainer"
import { useEffect } from "react"
import HomeImage from "../HomeImage/HomeImage"

const HomeContainer = () => {
    useEffect(()=>{
        document.title = "Parben Home | Inicio"
    }, [])
    return (
        <div className={css.homeContainer} >
            <HomeImage/>
            <h1 className={css.titulo} >BIENVENIDOS A PARBEN HOME</h1>
            <ProductsCategoryContainer/>
            <VideoContainer/>
            <InfoMapContainer/>
        </div>
    )
}

export default HomeContainer