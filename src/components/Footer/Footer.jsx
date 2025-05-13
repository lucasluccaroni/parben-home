import css from "./Footer.module.css"

const Footer = () => {

    return (
        <div className={css.container} >
            <h1 className="fw-bold mb-4"> Seguinos</h1>
            <div className={css.containerLogos} >
                <a href="https://www.instagram.com/parbenhome/" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/instagram.png" alt="Instagram logo" />
                </a>
                <a href="https://wa.me/5491170660505" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/whatsapp.png" alt="Whatsapp logo" />
                </a>
                <a href="https://www.facebook.com/61574065673103" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/facebook.png" alt="Facebook logo" />
                </a>
                <a href="https://ar.pinterest.com/parbenhome/" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/pinterest.png" alt="Pinterest logo" />
                </a>
            </div>
            <h3 className="mt-4 fs-5 fw-bold"> info@parbenhome.com </h3>
            {/* <div className={css.firma} >
                <p className={css.firmaText} >Designed by: Lucas Luccaroni 2025</p>
                <a href="https://github.com/lucasluccaroni" target="_blank" rel="noopener noreferrer">
                    <img className={css.githubLogo} src="/images/redes/github.png" alt="GitHub logo" />
                </a>
            </div> */}
            <div className='d-flex justify-content-center px-3 mb-3 align-items-center translate-middle bottom-0 start-50 position-absolute flex-column text-dark mt-md-5 w-100'>
                <span className="text-center text-break pt-2 border-top border-dark" style={{fontSize:11}}>Diseñado y desarrollado por <a target="_blank" className="text-decoration-none text-dark" href="https://github.com/lucasluccaroni">@LucasLuccaroni</a>  + colaboracion de <a target="_blank" className="text-decoration-none text-dark" href="https://www.ferdev.xyz">@FerDev</a> </span>
            </div>
        </div>
    )
}

export default Footer