import css from "./ComoComprar.module.css"

const ComoComprar = ({ number, color, texts: { text1, text2 } }) => {
    console.log(color)

    return (
        <div className={`${css.container} ${css[color]}`} >
            <div className={`${css.numberContainer}`}>
                <h1 className={css.number} > {number}. </h1>
            </div>
            <div className={css.textContainer} >
                <h1 className={css.text1} > {text1} </h1>
                <h2 className={css.text2} > {text2} </h2>
            </div>
        </div>
    )
}

export default ComoComprar