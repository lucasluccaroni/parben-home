import css from "./HomeView.module.css"
import ProductsCategoryContainer from "../ProductsCategoryContainer/ProductsCategoryContainer"
import IconosFlotantes from '../IconosFlotantes/IconosFlotantes'
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
            {/* <h1 className={css.titulo} > Parben Home </h1>
            <h2 className={css.subTitulo} >Creamos ambientes que cuentan historias.</h2> */}
            <div className="d-flex justify-content-center flex-column align-items-center py-5 my-5 px-lg-5 px-3">
                <h2 className="text-center py-5 my-4 fs-3 fst-italic">"Creamos ambientes que cuentan historias"</h2>
            </div>
            <ProductsCategoryContainer />
            <VideoContainer />
            <InfoMapContainer />
            <IconosFlotantes/>
        </div>
    )
}

export default HomeView