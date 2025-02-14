import { useEffect, useState } from "react"
import styles from "./ServicesComponent.module.css"
import variantStyles1 from "./ServicesComponentVariant1.module.css"
import variantStyles2 from "./ServicesComponentVariant2.module.css"



const ServicesComponent = ({ variant, reverse, imagen }) => {
    const [css, setCss] = useState(styles)
    const [image, setImage] = useState("")

    useEffect(() => {
        if (variant === 1) {
            setCss(variantStyles1)
            // setImage("/images/logo-navegador.png")
        } else if (variant === 2) {
            setCss(variantStyles2)
            // setImage("/images/logo-navegador2.png")
        } else {
            setCss(styles)
            // setImage("/images/logo-navegador3.png")
        }

        if (imagen === 1) {
            setImage("/images/logo-navegador.png")
        } else if (imagen === 2) {
            setImage("/images/logo-navegador2.png")
        } else if (imagen === 3) {
            setImage("/images/logo-navegador3.png")
        }



    }, [variant, image])


    return (
        <div className={`${css.container} ${reverse ? css.reverse : ""}`}>
            <img className={css.img} src={image} alt="Logo" />
            <h2 className={css.text}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat labore repellendus ex porro obcaecati molestias accusantium, ducimus animi non tempore maiores id sequi alias nisi autem earum. Praesentium, fugiat.
                Rem amet illo voluptatibus inventore, quaerat numquam sunt neque deserunt commodi aliquid atque quam recusandae tempore nostrum at totam, dolore obcaecati architecto repellendus? Quaerat earum aperiam, labore dicta consequuntur nihil.
                Illum at ut earum ab ipsam minus quod quidem, quis natus laborum? Error, alias doloribus exercitationem quo dolor autem ab perferendis voluptatum quaerat facere officiis provident commodi voluptates iusto corrupti?
                Reiciendis amet beatae rerum voluptatem non quibusdam at magnam unde, totam maxime, ipsum a porro, dicta autem omnis. Dolor nihil, accusantium eos excepturi deserunt sunt quo aspernatur deleniti odio voluptatum!</h2>
        </div>
    )
}

export default ServicesComponent