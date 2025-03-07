import css from "./VideoContainer.module.css"

const VideoContainer = () => {
    return (
        <div className={css.videoContainer} >
            <iframe className={css.video} src="https://www.youtube.com/embed/EDjb2nLSxDo?autoplay=1&controls=0&muted=1&vq=hd1440" allow="autoplay;encrypted-media"></iframe>
        </div>
    )
}

export default VideoContainer