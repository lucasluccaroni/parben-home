import css from "./Footer.module.css"

const Footer = () => {

    return (
        <div className={css.container} >
            <h1> Seguinos </h1>
            <div className={css.containerLogos} >
                <a href="https://www.instagram.com/lucasluccaroni/" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/instagram.png" alt="Instagram logo" />
                </a>
                <a href="https://wa.me/5491162763002" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/whatsapp.png" alt="Whatsapp logo" />
                </a>
                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/facebook.png" alt="Facebook logo" />
                </a>
                <a href="http://pinterest.com" target="_blank" rel="noopener noreferrer">
                    <img className={css.logo} src="/images/redes/pinterest.png" alt="Pinterest logo" />
                </a>
            </div>
                <h3> mail@mail.com </h3>
            <div className={css.firma} >
            <p>Designed by: Lucas Luccaroni 2025</p>
            <a href="https://github.com/lucasluccaroni" target="_blank" rel="noopener noreferrer">
                <img className={css.githubLogo} src="/images/redes/github.png" alt="GitHub logo" />
            </a>
            </div>
        </div>
    )
}

export default Footer