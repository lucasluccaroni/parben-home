import css from "./VideoContainer.module.css"

const VideoContainer = () => {
    return (
        <div className={css.videoContainer} >
            {/* <iframe className={css.video}  src="https://www.youtube.com/embed/njX2bu-_Vw4?si=lLNXdtz6O-dYOhAQ&amp;controls=0" title="Parben Home" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <iframe className={css.video} src="https://www.youtube.com/embed/3YTohytF9oE?si=_KPfIwxAGDlzPwdN&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}

export default VideoContainer