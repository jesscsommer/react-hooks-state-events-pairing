import video from "../data/video.js";
import Video from "./Video.js"
import CommentList from "./CommentList.js"
import Button from "./Button.js"
import { useState } from "react"

function App() {
  console.log("Here's your data:", video);

  const [videoObj, setVideoObj] = useState({...video})
  const [areCommentsVisible, setAreCommentsVisible] = useState(true)

  const commentBtnText = areCommentsVisible ? 'Hide comments' : 'Show comments'
  const toggleCommentVisibility = () => {
    setAreCommentsVisible(areCommentsVisible => !areCommentsVisible)
  }

  return (
    <div className="App">
      <Video videoObj={videoObj} />
      <Button innerText={commentBtnText} handleClick={toggleCommentVisibility}/>
      <hr></hr>
      {areCommentsVisible ? <CommentList videoObj={videoObj} /> : null }
    </div>
  );
}

export default App;
