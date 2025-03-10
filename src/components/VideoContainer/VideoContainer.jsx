import css from "./VideoContainer.module.css"
import { useRef } from "react"

const VideoContainer = () => {

    const videoRef = useRef(null)

    const handleVideoRef = () => {
        const videoElement = videoRef.current
        if (videoElement) {
            videoElement.classList.add("fade-out")

            setTimeout(() => {
                videoElement.classList.remove("fade-out");
                videoElement.currentTime = 0; // Reinicia el tiempo del video
                videoElement.play(); // Reproduce nuevamente
            }, 1000);
        }
    }

    return (
        <div className={css.videoContainer} >

            {/*  <video
                ref={videoRef}
                className={css.video}
                src="/video/home-video1-fades-sin-marcaAgua.mp4"
                autoPlay
                muted
                loop
                onEnded={handleVideoRef}
            style={{ width: "100%" }}
            /> */}


            <iframe className={css.video} src="https://www.youtube.com/embed/EDjb2nLSxDo?autoplay=1&controls=0&muted=1&vq=hd1440" allow="autoplay;encrypted-media"></iframe>
        </div>
    )
}

export default VideoContainer