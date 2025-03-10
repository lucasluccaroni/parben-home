import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
    const { pathname } = useLocation()


    useEffect(() => {

        const scrollContainer = document.querySelector(".App")
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: 0, behavior: "instant" });
        } else {
            window.scrollTo({ top: 0, behavior: "instant" });
        }

        console.log("scroll to top ", pathname)

    }, [pathname])

    return null
};

export default ScrollToTop