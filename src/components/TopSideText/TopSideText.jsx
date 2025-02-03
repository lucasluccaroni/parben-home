import css from "./TopSideText.module.css"

const TopSideText = ({text}) =>{

    return(
        <div className={css.spanContainer} >
            <span> {text}</span>
        </div>
    )
}

export default TopSideText