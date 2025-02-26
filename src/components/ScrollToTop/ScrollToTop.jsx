import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    const { pathname } = useLocation()
    console.log("ScrollToTop => ", pathname)

    useEffect(() => {
        scrollTo(0, 0)
    }, [pathname])

    return console.log("scroll ejecutado")
};

export default ScrollToTop