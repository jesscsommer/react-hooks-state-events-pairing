import Comment from "./Comment"

const CommentList = ({ videoObj: { comments }}) => {

    return (
        <div>
            <h2>{comments.length} Comments</h2>
            {comments.map(comment => <Comment key={comment.id} comment={comment} /> )}
        </div>
    )
}

export default CommentList