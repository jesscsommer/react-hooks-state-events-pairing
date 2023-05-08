import Button from "./Button"

const Video = ({ videoObj }) => {

    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                src={videoObj.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{videoObj.title}</h1>
            <p>{videoObj.views} | Uploaded {videoObj.createdAt}</p>
        </div>
    )
}

export default Video