import PrevButton from "../PrevButton/PrevButton"
import NextButton from "../NextButton/NextButton"
import css from "./NavigateButtons.module.css"

const NavigateButtons = () => {
    return(
        <div className={css.buttonsContainer} >
            <PrevButton/>
            <NextButton/>
        </div>
    )
}

export default NavigateButtons