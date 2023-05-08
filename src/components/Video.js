import Button from "./Button"

const Video = ({ videoObj: { embedUrl, title, views, upvotes, downvotes, createdAt } }) => {

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

            <Button innerText={upvotes} emoji={<span>👍</span>} /> 
            <Button innerText={downvotes} emoji={<span>👎</span>} /> 
            {/* <Button innerText={} emoji={} handleClick={} /> 
            <Button innerText={} handleClick={} />  */}

            <hr></hr>
        </div>
    )
}

export default Video