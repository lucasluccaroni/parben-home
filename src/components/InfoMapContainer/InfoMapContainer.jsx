import Map from "../Map/Map"
import ContactInfo from "../ContactInfo/ContactInfo"
import css from "./InfoMapContainer.module.css"

const InfoMapContainer = () => {
    return (
        <div className={css.container} >
            <Map />
            <ContactInfo/>
        </div>
    )
}

export default InfoMapContainer