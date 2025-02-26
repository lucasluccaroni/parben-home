import css from "./Loading.module.css"

const Loading = () => {
    return(
        <div className={css.container} >
            <img className={css.imgBlur}  src="/images/logo-navegador.png" alt="logoNav" />
        </div>
    )
}

export default Loading