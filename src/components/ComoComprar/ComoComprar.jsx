import css from "./ComoComprar.module.css"

const ComoComprar = ({ number, color, texts: { text1, text2 } }) => {
    console.log(color)

    return (
        <div className={`d-flex justify-content-center align-items-center px-3 py-5 w-100 ${css[color]}`} style={{minHeight:400}}>
            <div className={`d-flex flex-column align-items-center justify-content-center me-3 me-lg-5`}>
                <h1 className={css.number}> {number}. </h1>
            </div>
            <div className={`d-flex justify-content-center align-items-center ms-3 ms-lg-5 flex-column`} style={{maxWidth:800}}>
                <h1 className={`${css.textStyle1} mb-3 align-self-start text-start`}> {text1} </h1>
                <h2 className={`${css.textStyle2}`}> {text2} </h2>
            </div>
        </div>
    )
}

export default ComoComprar