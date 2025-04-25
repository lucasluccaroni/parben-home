import css from "./ServicesComponent.module.css"

const ServicesComponent = () => {
    return (
        <div className="d-flex flex-column align-items-center px-lg-5 px-3 pb-5 mb-4" >

            {/* <div className={css.enviosContainer} >
                <div className={css.infoContainer}>
                    <h1 className={css.titulo} >🚚 Envíos rápidos y flexibles </h1>
                    <p className="fs-6 text-start">
                        <span style={{ fontWeight: "bold" }} > ✔ A todo el país: </span> Si estás en el interior, despachamos tu pedido desde el Gran Buenos Aires en el transporte que nos indiques. ¿No tenés uno? No te preocupes, te contactamos con el mejor.
                    </p>
                    <p className="fs-6 text-start">
                        <span style={{ fontWeight: "bold" }} > ✔ Entrega en menos de 48 hs:  </span>  Para productos en stock y lista de entrega inmediata.
                    </p>
                    <p className="fs-6 text-start">
                        <span style={{ fontWeight: "bold" }} > ✔ Puntualidad garantizada: </span>  En el Gran Buenos Aires, te damos un rango de entrega de <span style={{ fontWeight: "bold" }} > 1 hora y 30 minutos </span> para que no pierdas el día esperando. Si no cumplimos con el horario, ¡el flete va por nuestra cuenta!. Además, coordinamos la entrega con vos varios días antes (en un rango horario que VOS puedas recibir) para que puedas organizarte.
                    </p>
                    <p className="fs-6 text-start">
                        <span style={{ fontWeight: "bold" }} >✔ Asesoría para ingreso </span> ¡No te preocupes por el tamaño! Ayudamos a calcular el ingreso a tu departamento o casa. Solo envíanos una foto y las medidas (en caso de ser necesario) y nuestro equipo te asesorará para que el mueble llegue sin inconvenientes.
                    </p>
                </div>
                <img className={`${css.img} rounded-circle`} src="/images/envios_img.webp" alt="" />
            </div> */}

            <div className="d-flex justify-content-center align-items-center flex-wrap-reverse flex-lg-nowrap mt-4 mt-lg-5 pt-5">
                <div className="d-flex justify-content-start align-items-center flex-column me-lg-4" style={{maxWidth:480}}>
                    <h1 className={`${css.font} mb-4 text-center fs-3 fw-bold`} >🚚 Envíos rápidos y flexibles</h1>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span style={{ fontWeight: "bold" }} > ✔ A todo el país: </span> Si estás en el interior, despachamos tu pedido desde el Gran Buenos Aires en el transporte que nos indiques. ¿No tenés uno? No te preocupes, te contactamos con el mejor.
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span style={{ fontWeight: "bold" }} > ✔ Entrega en menos de 48 hs:  </span>  Para productos en stock y lista de entrega inmediata.
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span style={{ fontWeight: "bold" }} > ✔ Puntualidad garantizada: </span>  En el Gran Buenos Aires, te damos un rango de entrega de <span style={{ fontWeight: "bold" }} > 1 hora y 30 minutos </span> para que no pierdas el día esperando. Si no cumplimos con el horario, ¡el flete va por nuestra cuenta!. Además, coordinamos la entrega con vos varios días antes (en un rango horario que VOS puedas recibir) para que puedas organizarte.
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span style={{ fontWeight: "bold" }} >✔ Asesoría para ingreso </span> ¡No te preocupes por el tamaño! Ayudamos a calcular el ingreso a tu departamento o casa. Solo envíanos una foto y las medidas (en caso de ser necesario) y nuestro equipo te asesorará para que el mueble llegue sin inconvenientes.
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column ms-lg-4 mb-5 mb-lg-0" style={{maxWidth:550}}>
                    <img src="/images/envios_img.webp" alt="" className="rounded-circle img-fluid" />
                </div>
            </div>
            
            <div className="d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap mt-5 pt-5">
                <div className="d-flex justify-content-center align-items-center flex-column me-lg-4 mb-5 mb-lg-0" style={{maxWidth:550}}>
                    <img src="/images/ambiente_img.webp" alt="" className="rounded-circle img-fluid" />
                </div>
                <div className="d-flex justify-content-start align-items-center flex-column ms-lg-4" style={{maxWidth:480}}>
                    <h1 className={`${css.font} mb-4 text-center fs-3 fw-bold`} >🎨 Creá tu ambiente ideal</h1>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span style={{ fontWeight: "bold" }} > ✔ A todo el país: </span> Si estás en el interior, despachamos tu pedido desde el Gran Buenos Aires en el transporte que nos indiques. ¿No tenés uno? No te preocupes, te contactamos con el mejor.
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span>✔ Asesoramiento gratuito:</span>  Envianos una foto del espacio que querés completar y nuestro equipo de expertos en interiorismo te ayudará a diseñar un ambiente a tu medida, con los tonos y telas que más te gusten.
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span>✔ Personalización total:  </span> Transformamos tus ideas en realidad con muebles a medida completamente personalizados. Elegís la tela, el color y el tono de madera que mejor se adapte a tu estilo. Además, te ofrecemos la opción de seleccionar almohadones lisos o con costura, y podés definir la distribución de la placa de asiento según tus necesidades.
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span>✔ Creación de tu mueble </span> Si viste un mueble que te encanta, solo mandanos la foto y las medidas… ¡Nosotros lo hacemos realidad!
                    </p>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center flex-wrap-reverse flex-lg-nowrap mt-5 pt-5">
                <div className="d-flex justify-content-start align-items-center flex-column me-lg-4" style={{maxWidth:480}}>
                    <h1 className={`${css.font} mb-4 text-center fs-3 fw-bold`} >🛠️ Garantía y confianza</h1>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span> ✔ Calidad asegurada: </span> Ofrecemos <span>10 años de garantía estructural y 5 años en placa, telas y costuras. </span> Luego de ese plazo, cualquier reparación se hace al costo, para que tu mueble <span> Parben </span> te acompañe por muchos años
                    </p>
                    <p className={`${css.font} fs-6 text-start`}>
                        <span>✔ Pago seguro y sin sorpresas:</span>  El saldo restante (promo efectivo) lo abonás  <span>solo después </span>de recibir tu mueble y confirmar que todo está perfecto. Así garantizamos que obtengas exactamente lo que pediste.
                    </p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column ms-lg-4 mb-5 mb-lg-0" style={{maxWidth:550}}>
                    <img src="/images/confianza_img.webp" alt="" className="rounded-circle img-fluid" />
                </div>
            </div>
            {/* <div className={css.ambienteContainer} >

                <img className={`${css.img} ${css.img2}`} src="/images/ambiente_img.webp" alt="" />

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

            </div> */}

            {/* <div className={css.garantiaContainer} >
                <div className={css.infoContainer}>
                    <h1 className={css.titulo} >🛠️ Garantía y confianza </h1>
                    <p>
                        <span> ✔ Calidad asegurada: </span> Ofrecemos <span>10 años de garantía estructural y 5 años en placa, telas y costuras. </span> Luego de ese plazo, cualquier reparación se hace al costo, para que tu mueble <span> Parben </span> te acompañe por muchos años
                    </p>
                    <p>
                        <span>✔ Pago seguro y sin sorpresas:</span>  El saldo restante (promo efectivo) lo abonás  <span>solo después </span>de recibir tu mueble y confirmar que todo está perfecto. Así garantizamos que obtengas exactamente lo que pediste.

                    </p>
                </div>


                <img className={`${css.img} ${css.img3} `} src="/images/confianza_img.webp" alt="" />
            </div> */}

        </div>
    )
}

export default ServicesComponent