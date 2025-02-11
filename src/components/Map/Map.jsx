import css from "./Map.module.css"

const Map = () => {
    return (
        <div className={css.mapContainer} >
            <iframe className={css.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.21532431196715!2d-58.45755136073014!3d-34.55971629701814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d4ab9cc64d%3A0x8929247e0c6f4e28!2sAv.%20Olaz%C3%A1bal%202315%2C%20C1428DHF%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1738265711262!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )


}

export default Map