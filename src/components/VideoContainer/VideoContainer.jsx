import css from "./VideoContainer.module.css"

const VideoContainer = () => {
    return (
        <div className={css.videoContainer} >
            {/* <iframe className={css.video} src="https://www.youtube.com/embed/3YTohytF9oE?si=_KPfIwxAGDlzPwdN&amp?autoplay=1&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe> */}
            <iframe className={css.video} src="https://www.youtube.com/embed/EDjb2nLSxDo?autoplay=1&controls=0&muted=1&vq=hd1440" allow="autoplay;encrypted-media
            // "></iframe>
        </div>
    )
}

export default VideoContainer