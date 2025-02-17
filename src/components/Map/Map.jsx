import css from "./Map.module.css"

const Map = () => {
    return (
        <div className={css.mapContainer} >
            <iframe className={css.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.4032572577372!2d-58.457342330324494!3d-34.56335199831055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3f1ce9135%3A0x3d0cf69b4a132982!2sEcheverr%C3%ADa%202485%2C%20C1428DRQ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739795845553!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )


}

export default Map


/*
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.4032572577372!2d-58.457342330324494!3d-34.56335199831055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3f1ce9135%3A0x3d0cf69b4a132982!2sEcheverr%C3%ADa%202485%2C%20C1428DRQ%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1739795845553!5m2!1ses-419!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


*/