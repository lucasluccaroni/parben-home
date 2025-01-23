import css from "./Button.module.css"

const Button = ({clase, label, callback}) => {

    return (
        <button className={css[clase]} onClick={callback}> {label} </button>       
    )
}

export default Button