import axios from "axios";
import BrowserStore from "../utils/BrowserStore";

export const getComments = async (postid = 1) => {

  var com = null;
  if(!com)
  {
    com = await axios.get(process.env.REACT_APP_API_URL + '/api/v1/comment/'+postid, {
      headers: {
        Authorization: `Bearer ${BrowserStore.get('userToken')}`
      }
    })
    com = com.data;
  }
 
  const comments =  [
    {
      id: '1',
      body: 'First comment',
      userName: 'Jack',
      userId: '1',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00'
    },
    {
      id: '2',
      body: 'Second comment',
      userName: 'John',
      userId: '2',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00'
    },
    {
      id: '3',
      body: 'First comment first child',
      userName: 'John',
      userId: '2',
      parentId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00'
    },
    {
      id: '4',
      body: 'Second comment second child',
      userName: 'John',
      userId: '2',
      parentId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00'
    }
  ]
  return com||comments;
}

export const createComment = async (text, parentId = null,postId=null) => {
  console.warn(parentId)
  var user = BrowserStore.get('user-info', true)
  await axios.post(process.env.REACT_APP_API_URL + '/api/v1/comment',{
    postId:postId,
    parentId:parentId,
    userId:user.id,
    body:text
  }, {
    headers: {
      Authorization: `Bearer ${BrowserStore.get('userToken')}`
    }
  })
  return getComments(postId);
  // return {
  //   id: Math.random().toString(36).substr(2, 9),
  //   body: text,
  //   parentId,
  //   userId: '1',
  //   userName: 'John',
  //   createdAt: new Date().toISOString()
  // }
}

export const updateComment = async (text,commentId,postId) => {
  console.log(commentId+" -> "+typeof(commentId));
  await axios.post(process.env.REACT_APP_API_URL + '/api/v1/updateComment',{
    id:commentId,
    body:text
  }, {
    headers: {
      Authorization: `Bearer ${BrowserStore.get('userToken')}`
    }
  })
  console.log(postId);
  return getComments(postId);
  // return { text }
}

export const deleteComment = async (commentId,postId) => {
  await axios.post(process.env.REACT_APP_API_URL + '/api/v1/deleteComment',{
    id:commentId
  }, {
    headers: {
      Authorization: `Bearer ${BrowserStore.get('userToken')}`
    }
  }).then((res)=>{
    alert(res.data);
  })
  console.log(postId);
  return getComments(postId);
  // return {}
}
