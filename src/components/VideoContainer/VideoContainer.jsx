import css from "./VideoContainer.module.css"
import video from "/video/home-video1-reduced-fades-final.mp4"

const VideoContainer = () => {

    return (
        <div className={css.videoContainer} >

            <video
                className={css.video}
                src={video}
                autoPlay
                muted
                loop
                style={{ width: "100%" }}
            />


            {/* <iframe className={css.video} src="https://www.youtube.com/embed/EDjb2nLSxDo?autoplay=1&controls=0&muted=1&vq=hd1440" allow="autoplay;encrypted-media"></iframe> */}
        </div>
    )
}

export default VideoContainer