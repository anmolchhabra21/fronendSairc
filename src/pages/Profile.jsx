import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Topbar from '../components/common/Topbar'
import HeaderProfile from '../components/common/profile/HeaderProfile'
import SidebarProfile from '../components/common/profile/SidebarProfile'
import BodyProfile from '../components/common/profile/BodyProfile'
import axios from 'axios'
import { isLoggedIn } from '../utils/auth'
import BrowserStore from '../utils/BrowserStore'

import '../styles/profile/profile.css'
import '../styles/profile/responsiveProfile.css'

const Profile = (props) => {
  const history = useHistory()
  useEffect(() => {
    const func = () => {
      document.title = 'Profile | ISM Connect'
      
      if (!isLoggedIn()) { return history.push('/enter') }
    }
    func()
  }, [history])

  const [data, setData] = useState({
    loading: false,
    flag: 0,
    arr: {
      user: {
        id: 5,
        name: 'Lorem Epsum',
        email: 'Lorem.epsum@gmail.com'
      },
      educationLog: {
        id: 1,
        type: 'UNIVERSITY',
        school_id: 1,
        course_id: 1,
        branch_id: 1,
        user_id: 5
      },
      branch: {
        id: 1,
        branch_name: 'Computer Science And Engineering',
        department_name: 'Department of Computer Science and Engineering'
      },
      course: {
        id: 1,
        name: 'B.Sc'
      }
    }
  })
  const [data2,setData2]= useState({
    loading : true,
    arr : [] ,
    flag: 0 
  });
  var user;
  var search_id=1;
  if(isLoggedIn()) {
    debugger
    user = BrowserStore.get('user-info', true)
    search_id = user.id;
  }  
  if(props.match.params.id)
  search_id = parseInt(props.match.params.id);
  if(data.flag===0)
  axios.post(`${process.env.REACT_APP_API_URL}/api/v1/profile`,{"user_id":search_id})
  .then((res)=>{
    setData({
      loading:true,
      flag:1,
      arr:res.data
    })
  })
  .catch((err)=>{
    console.log(err)
  })
  if(data2.flag===0)
    axios.post(`${process.env.REACT_APP_API_URL}/api/v1/findFeed`,{"user_id":user.id},{headers:{
      'Authorization': `Bearer ${BrowserStore.get("userToken")}`
    }}).then((res)=>{
        setData2({
          loading:false,
          arr:res.data,
          flag:1
        })
    })
    .catch((err)=>{
      console.log(err);
    }) ;
  useEffect(() => {
    const func = () => {
      document.title = 'Profile | ISM Connect'
    }
    func()
  }, [])
  return (
    <div className="ha-profile-container" style={{ backgroundColor: '#eee'}} >
      <Topbar showLogo fixed profileName={'Mandelieve'} notifications={[]} />
      <HeaderProfile />
      <div  className='d-flex ha-profile-main flex-wrap'>
        <SidebarProfile profileData = {data.arr}/>
        <BodyProfile posts = {data2.loading?null:data2.arr}/>
      </div>
    </div>
  )
}

export default Profile
