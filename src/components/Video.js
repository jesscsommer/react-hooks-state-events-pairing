import Button from "./Button"
import { useState } from "react"

const Video = ({ videoObj: { embedUrl, title, views, upvotes, downvotes, createdAt } }) => {

    const [currentUpvotes, setCurrentUpvotes] = useState(upvotes)
    const [currentDownvotes, setCurrentDownvotes] = useState(downvotes)

    const addUpvote = () => {
        setCurrentUpvotes(currentUpvotes => currentUpvotes + 1)
    }

    const addDownvote = () => {
        setCurrentDownvotes(currentDownvotes => currentDownvotes + 1)
    }

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

            <Button innerText={currentUpvotes} emoji={<span>👍</span>} handleClick={addUpvote}/> 
            <Button innerText={currentDownvotes} emoji={<span>👎</span>} handleClick={addDownvote} /> 

            <hr></hr>
        </div>
    )
}

export default Video