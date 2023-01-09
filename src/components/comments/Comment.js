import { faReply, faPen as faEdit } from '@fortawesome/free-solid-svg-icons'

import CommentForm from './CommentForm'

const Comment = ({
  comment, replies, setActiveComment,
  activeComment, updateComment, deleteComment,
  addComment, parentId = null, currentUserId, getReplies
}) => {
  
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'editing'
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'replying'
  const fiveMinutes = 5 * 60 * 1000
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed
  const canReply = Boolean(currentUserId)
  const canEdit = (currentUserId === comment.userId ) && !timePassed

  // const canEdit = currentUserId === comment.userId && !timePassed
  const replyId = parentId || comment.id 
  const createdAt = new Date(comment.createdAt).toLocaleDateString()
  // console.log(comment)
  return (
    <div key={comment.id} className='comment'>
      <div className='comment-image-container'>
        <img src={comment.profileImage||'/logo192.png'} width='50px' alt='User Icon' />
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'>{comment.userName}</div>

        </div>
        {!isEditing && <div className='comment-text'>{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel={faEdit}
            hasCancelButton
            initialText={comment.body}
            handleSubmit={text => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null)
            }}
            placeholder='Updated comment'
          />
        )}
        <div className='comment-actions'>
          <div className='comment-date'> {createdAt} </div>
          {canReply && (
            <div
              className='comment-action'
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'replying' })}
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className='comment-action'
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'editing' })}
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className='comment-action'
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel={faReply}
            handleSubmit={text => addComment(text, replyId)}
            placeholder='Reply'
          />
        )}
        {replies.length > 0 && (
          <div className='replies'>
            {replies.map(reply => (
              <Comment
              profileImage={reply.profileImage}
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={reply.id}
                replies={getReplies(reply.id)}
                currentUserId={currentUserId}
                getReplies = {getReplies}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment
