import css from "./NextButton.module.css"
import { useNavigate } from "react-router-dom"

const NextButton = () =>{
    const navigate = useNavigate()

    return(
        <button className={css.navigateButton} onClick={()=> navigate(1)} > Siguiente </button>
    )
}

export default NextButton