import React, { useState } from 'react'

import RightDash from '../common/RightDash'
import Topbar from '../common/Topbar'
import PostsContainer from './PostsContainer'

import '../../styles/feed.css'
import axios from 'axios'
import BrowserStore from '../../utils/BrowserStore'
import { isLoggedIn } from '../../utils/auth'

const posts = [
  {
    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
    username: 'kaching',
    userHeading: 'kach nach',
    content: 'kacha nacha rqtq weqqiyyytt'
  },
  {
    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
    username: 'kaching',
    userHeading: 'kach nach',
    content: 'kacha nacha rqtq weqqiyyytt'
  },
  {
    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
    username: 'kaching',
    userHeading: 'kach nach',
    content: 'kacha nacha rqtq weqqiyyytt'
  },
  {
    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
    username: 'kaching',
    userHeading: 'kach nach',
    content: 'kacha nacha rqtq weqqiyyytt'
  },
  {
    image_path: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
    username: 'kaching',
    userHeading: 'kach nach',
    content: 'kacha nacha rqtq weqqiyyytt'
  }
]

const MainContent = (props) => {
  // console.log("printing")
  // console.log(props.possibleSuggestions)
  const [data, setData] = useState({
    loading: true,
    arr: [],
    flag: 0
  });
  const [data4,setData4]= useState({
    loading : true,
    arr : [] ,
    flag: 0 
  });
  const [data2, setData2] = useState({
    loading: true,
    arr: [],
    flag: 0
  })
  const [data3, setData3] = useState({
    loading: true,
    arr: [],
    flag: 0
  })
  const [data5, setData5] = useState({
    loading: true,
    arr: [],
    flag: 0
  })
  let user = {}
  if (isLoggedIn()) {
    user = BrowserStore.get('user-info', true)
    if (data.flag === 0) {
      axios.post(process.env.REACT_APP_API_URL + '/api/v1/findFeed', { user_id: user.id }, {
        headers: {
          Authorization: `Bearer ${BrowserStore.get('userToken')}`
        }
      }).then((res) => {
        // setData({
        //   loading: false,
        //   arr: res.data,
        //   flag: 1
        // })
      })
        .catch((err) => {
          console.log(err)
        })
    }
    if (data2.flag === 0) {
      axios.post(process.env.REACT_APP_API_URL + '/api/v1/findNotification', { user_id: user.id }, {
        headers: {
          Authorization: `Bearer ${BrowserStore.get('userToken')}`
        }
      }).then((res) => {
        setData2({
          loading: false,
          arr: res.data,
          flag: 1
        })
      })
        .catch((err) => {
          console.log(err)
        })
    }
    if (data3.flag === 0) {
      axios.post(process.env.REACT_APP_API_URL + '/api/v1/findNotice', { user_id: user.id }, {
        headers: {
          Authorization: `Bearer ${BrowserStore.get('userToken')}`
        }
      }).then((res) => {
        setData3({
          loading: false,
          arr: res.data,
          flag: 1
        })
    })
    .catch((err)=>{
      console.log(err);
    }) ;
  }
    if(data4.flag===0)
    axios.post(`${process.env.REACT_APP_API_URL}/api/v1/jobs`,{"user_id":user.id},{headers:{
      'Authorization': `Bearer ${BrowserStore.get("userToken")}`
    }}).then((res)=>{
        setData4({
          loading:false,
          arr:res.data,
          flag:1
        })
    })
    .catch((err)=>{
      console.log(err);
    }) ;
    if(data5.flag===0)
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/suggestions`,{headers:{
      'Authorization': `Bearer ${BrowserStore.get("userToken")}`
    }}).then((res)=>{
        setData5({
          loading:false,
          arr:res.data,
          flag:1
        })
    })
    .catch((err)=>{
      console.log(err);
    }) ;
}
		return (
      <div id="main-content" className="d-flex flex-column">
        <Topbar profileName={user.name} notifications={data2.loading?[]:data2.arr} bg="transparent" />
        <div className="d-flex flex-row" id="main-content-inside">
          <PostsContainer posts={data.loading?posts:data.arr} jobs={data4.loading?null:data4.arr} 
          possibleSuggestions = {props.possibleSuggestions}/>
          <RightDash notices={data3.loading?[]:data3.arr}/>
        </div>
      </div>)
	
}
export default MainContent
