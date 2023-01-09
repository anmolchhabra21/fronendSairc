import { useState } from 'react'

import Topbar from '../common/Topbar'
import RightDash from '../common/RightDash'
import PostsContainer from '../feed/PostsContainer'
import { isLoggedIn } from '../../utils/auth'
import axios from 'axios'
import BrowserStore from '../../utils/BrowserStore'

import '../../styles/feed.css'

const posts = [
  {
    image: 'https://static.wikia.nocookie.net/harrypotter/images/3/3a/Nicolas_Flamel_CoG.png',
    username: 'kaching',
    userHeading: 'kach nach',
    content: 'kacha nacha rqtq weqqiyyytt',
    expanded: true
  }
]

const MainContent = props => {
  const [data, setData] = useState({
    loading: true,
    arr: [],
    flag: 0
  })

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

  let user = {}

  if (isLoggedIn()) {
    user = BrowserStore.get('user-info', true)
    if (data.flag === 0) {
      axios.post(process.env.REACT_APP_API_URL + '/api/v1/findFeed', { user_id: user.id, post_id: props.id }, {
        headers: {
          Authorization: `Bearer ${BrowserStore.get('userToken')}`
        }
      }).then((res) => {
        setData({
          loading: false,
          arr: res.data,
          flag: 1
        })
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
        console.log('notification')
        console.log(data2)
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
        console.log(res.data)
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <div id='main-content' className='d-flex flex-column'>
      <Topbar profileName={user?.name} notifications={data2.loading ? [] : data2.arr} />
      <div className='d-flex flex-row' id='main-content-inside'>
        <PostsContainer posts={data.loading ? posts : data.arr} notTabbed noWriter />
        <RightDash notices={data3.loading ? [] : data3.arr} />
      </div>
    </div>
  )
}

export default MainContent
