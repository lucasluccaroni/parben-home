import css from "./PrevButton.module.css"
import { useNavigate } from "react-router-dom"

const PrevButton = () => {
    const navigate = useNavigate()

    return (
        <button className={css.navigateButton} onClick={() => navigate(-1)}>
            Volver
        </button>
    )
}

export default PrevButton