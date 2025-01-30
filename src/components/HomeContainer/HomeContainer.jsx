import css from "./HomeContainer.module.css"
import ProductsCategoryContainer from "../ProductsCategoryContainer/ProductsCategoryContainer"
import VideoContainer from "../VideoContainer/VideoContainer"

const HomeContainer = () => {
    return (
        <div className={css.homeContainer} >
            <img className={css.fotoHome} src="/images/foto-home.jpg" alt="" />
            <h1>BIENVENIDOS A PARBEN HOME</h1>
            <ProductsCategoryContainer/>
            <VideoContainer/>
        </div>
    )
}

export default HomeContainer