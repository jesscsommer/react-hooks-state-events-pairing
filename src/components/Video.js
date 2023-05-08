import Button from "./Button"

const Video = ({ videoObj: { embedUrl, title, views, createdAt } }) => {

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{title}</h1>
            <p>{views} | Uploaded {createdAt}</p>
        </div>
    )
}

export default Video