import { useState, useEffect } from 'react'

import CommentForm from './CommentForm'
import Comment from './Comment'
import axios from 'axios'
import BrowserStore from '../../utils/BrowserStore'

import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi
} from '../../data/comments'
import { isLoggedIn } from '../../utils/auth'

import '../../styles/comments/comments.css'

const CommentsContainer = ({ commentsUrl, currentUserId, postid }) => {
  // var postid = 1;
  // console.log("postid");
  // console.log(postid);
  const [backendComments, setBackendComments] = useState([])
  const [activeComment, setActiveComment] = useState(null)
  const rootComments = backendComments.filter(
    backendComment => backendComment.parentId === null
  )
  const getReplies = commentId =>
    backendComments
      .filter(backendComment => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
  // const addComment = (text, parentId) => {
  //   createCommentApi(text, parentId).then(comment => {
  //     setBackendComments([comment, ...backendComments])
  //     setActiveComment(null)
  //   })
  // }
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId,postid).then(comment => {
      setBackendComments(comment);
      // setBackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }

  const updateComment = (text, commentId) => {
    console.log("updating "+ text)
    updateCommentApi(text,commentId,postid).then((comments) => {
      // const updatedBackendComments = backendComments.map(backendComment => {
      //   if (backendComment.id === commentId) {
      //     return { ...backendComment, body: text }
      //   }
      //   return backendComment
      // })
      setBackendComments(comments)
      setActiveComment(null)
    })
  }
  // const updateComment = (text, commentId) => {
  //   updateCommentApi(text).then(() => {
  //     const updatedBackendComments = backendComments.map(backendComment => {
  //       if (backendComment.id === commentId) {
  //         return { ...backendComment, body: text }
  //       }
  //       return backendComment
  //     })
  //     setBackendComments(updatedBackendComments)
  //     setActiveComment(null)
  //   })
  // }

  const deleteComment = commentId => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi(commentId,postid).then((comments) => {
        // const updatedBackendComments = backendComments.filter(
        //   backendComment => backendComment.id !== commentId
        // )
        setBackendComments(comments)
      })
    }
  }
  // const deleteComment = commentId => {
  //   if (window.confirm('Are you sure you want to remove comment?')) {
  //     deleteCommentApi().then(() => {
  //       const updatedBackendComments = backendComments.filter(
  //         backendComment => backendComment.id !== commentId
  //       )
  //       setBackendComments(updatedBackendComments)
  //     })
  //   }
  // }

  useEffect(() => {
    getCommentsApi(postid).then(data => {
      console.log(data);
      setBackendComments(data)
    })
  }, [])

  if (!isLoggedIn()) return null

  return (
    <div className='comments'>
      <CommentForm handleSubmit={addComment} />
      <div className='comments-container'>
        {rootComments.map(rootComment => (
          <Comment
            profileImage={rootComment.profileImage}
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
            // backendComments = {backendComments}
            getReplies = {getReplies}
          />
        ))}
      </div>
    </div>
  )
}

export default CommentsContainer
