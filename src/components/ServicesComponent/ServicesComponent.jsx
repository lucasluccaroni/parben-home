import css from "./ServicesComponent.module.css"

const ServicesComponent = () => {
    return (
        <div className={css.container} >

            <div className={css.enviosContainer} >
                <div className={css.infoContainer}>
                    <h1 className={css.titulo} >🚚 Envíos rápidos y flexibles </h1>
                    <p>
                        <span style={{ fontWeight: "bold" }} > ✔ A todo el país: </span> Si estás en el interior, despachamos tu pedido desde el Gran Buenos Aires en el transporte que nos indiques. ¿No tenés uno? No te preocupes, te contactamos con el mejor.
                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }} > ✔ Entrega en menos de 48 hs:  </span>  Para productos en stock y lista de entrega inmediata.

                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }} > ✔ Puntualidad garantizada: </span>  En el Gran Buenos Aires, te damos un rango de entrega de <span style={{ fontWeight: "bold" }} > 1 hora y 30 minutos </span> para que no pierdas el día esperando. Si no cumplimos con el horario, ¡el flete va por nuestra cuenta!. Además, coordinamos la entrega con vos varios días antes (en un rango horario que VOS puedas recibir) para que puedas organizarte.

                    </p>
                    <p>
                        <span style={{ fontWeight: "bold" }} >✔ Asesoría para ingreso </span> ¡No te preocupes por el tamaño! Ayudamos a calcular el ingreso a tu departamento o casa. Solo envíanos una foto y las medidas (en caso de ser necesario) y nuestro equipo te asesorará para que el mueble llegue sin inconvenientes.

                    </p>
                </div>
                <img className={`${css.img} ${css.img1}`} src="/images/logo-navegador.png" alt="" />
            </div>

            <div className={css.ambienteContainer} >

                <img className={`${css.img} ${css.img2}`} src="/images/logo-navegador3.png" alt="" />

                <div className={css.infoContainer}>
                    <h1 className={css.titulo} > 🎨 Creá tu ambiente ideal </h1>
                    <p>
                        <span>✔ Asesoramiento gratuito:</span>  Envianos una foto del espacio que querés completar y nuestro equipo de expertos en interiorismo te ayudará a diseñar un ambiente a tu medida, con los tonos y telas que más te gusten.
                    </p>
                    <p>
                        <span>✔ Personalización total:  </span> Transformamos tus ideas en realidad con muebles a medida completamente personalizados. Elegís la tela, el color y el tono de madera que mejor se adapte a tu estilo. Además, te ofrecemos la opción de seleccionar almohadones lisos o con costura, y podés definir la distribución de la placa de asiento según tus necesidades.
                    </p>
                    <p>
                        <span>✔ Creación de tu mueble </span> Si viste un mueble que te encanta, solo mandanos la foto y las medidas… ¡Nosotros lo hacemos realidad!
                    </p>
                </div>

            </div>

            <div className={css.garantiaContainer} >
                <div className={css.infoContainer}>
                    <h1 className={css.titulo} >🛠️ Garantía y confianza </h1>
                    <p>
                        <span> ✔ Calidad asegurada: </span> Ofrecemos <span>10 años de garantía estructural y 5 años en placa, telas y costuras. </span> Luego de ese plazo, cualquier reparación se hace al costo, para que tu mueble <span> Parben </span> te acompañe por muchos años
                    </p>
                    <p>
                        <span>✔ Pago seguro y sin sorpresas:</span>  El saldo restante (promo efectivo) lo abonás  <span>solo después </span>de recibir tu mueble y confirmar que todo está perfecto. Así garantizamos que obtengas exactamente lo que pediste.

                    </p>
                </div>


                <img className={`${css.img} ${css.img3} `} src="/images/logo-navegador2.png" alt="" />
            </div>

        </div>
    )
}

export default ServicesComponent