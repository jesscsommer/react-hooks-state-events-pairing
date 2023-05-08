import video from "../data/video.js";
import Video from "./Video.js"
import CommentList from "./CommentList.js"
import { useState } from "react"

function App() {
  console.log("Here's your data:", video);

  const [videoObj, setVideoObj] = useState({...video})

  return (
      <Video videoObj={videoObj} />
  );
}

export default App;
