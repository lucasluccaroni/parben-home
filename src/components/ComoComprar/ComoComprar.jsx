import css from "./ComoComprar.module.css"

const ComoComprar = ({ number, color, texts:{text1, text2} }) => {
    console.log(color)

    return (
        <div className={`${css.container} ${css[color]}`} >
            <div className={`${css.numberContainer}`}>
                {/* <div className={css.number} >
                </div> */}
                <h1 className={css.number} > {number}. </h1>
            </div>
            <div className={css.textContainer} >
                <h1 className={css.text1} > {text1} </h1>
                <h2 className={css.text2} > {text2} </h2>
                {/* <h3 className={css.text} > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur deleniti, accusantium doloribus, accusamus qui nisi voluptatem iste quam vero temporibus dignissimos. Aperiam similique nisi quae facere cum eveniet ex ipsam!
                    Vero voluptatibus eveniet, iusto sequi unde et rem quaerat. Libero laborum odio labore deserunt ad ex quis adipisci, eaque quasi, quod ipsam aspernatur? Ab sequi cum quam, aliquam voluptates et.
                </h3> */}
            </div>
        </div>
    )
}

export default ComoComprar