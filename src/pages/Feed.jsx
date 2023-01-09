import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LeftDash from '../components/common/LeftDash'
import MainContent from '../components/feed/MainContent'
import { isLoggedIn } from '../utils/auth'
import { useState } from 'react'
import axios from 'axios'
import BrowserStore from '../utils/BrowserStore'

const Feed = () => {
  const history = useHistory()
  useEffect(() => {
    const func = () => {
      document.title = 'Feed | ISM Connect'
      
      if (!isLoggedIn()) { return history.push('/enter') }
    }
    func()
  }, [history])

  const [data5, setData5] = useState({
    loading: true,
    arr: [],
    flag: 0
  })
  
  if(data5.flag===0)
    axios.get(`${process.env.REACT_APP_API_URL}/api/v1/suggestions`,{headers:{
      'Authorization': `Bearer ${BrowserStore.get("userToken")}`
    }}).then((res)=>{
        setData5({
          loading:false,
          arr:res.data,
          flag:1
        })
        // console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  
  return (
    <div className='App d-flex flex-row'>
      <LeftDash />
      <MainContent possibleSuggestions = {data5.laoding?null:data5.arr}/>
    </div>
  )
}

export default Feed
