import css from "./CarrouselText.module.css"

const CarrouselText = ({text, repetitions}) => {
    const repeatedText = Array(repetitions).fill(text).join(" -------- ")
    const combinedText = `${repeatedText} -------- ${repeatedText}`

    return(
        <div className={css.carrouselContainer}>
            <span className={css.carrouselText} > {combinedText}  </span>
        </div>
    )
}

export default CarrouselText