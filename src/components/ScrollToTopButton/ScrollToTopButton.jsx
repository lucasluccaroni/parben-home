import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTopButton = () => {
    const [scroll, setScroll] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
        
        // if(!scroll) {
        //     // setScroll(true)
        //     console.log(scroll)
        // }
        // console.log(scroll)
    }

    return <button onClick={scrollToTop()} > Subir ↑ </button>

}

export default ScrollToTopButton