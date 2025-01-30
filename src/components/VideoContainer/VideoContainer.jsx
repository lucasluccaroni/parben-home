import css from "./VideoContainer.module.css"

const VideoContainer = () => {
    return (
        <div className={css.videoContainer} >
            <iframe className={css.video} src="https://www.youtube.com/embed/3YTohytF9oE?si=_KPfIwxAGDlzPwdN&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoContainer