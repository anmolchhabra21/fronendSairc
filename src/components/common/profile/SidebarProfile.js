import SideBarProfileIntro from "./SideBarProfileIntro"
import SideBarProfileExp from "./SideBarProfileExp"
import SideBarProfileAcad from "./SideBarProfileAcad"
import {useState} from 'react'
import '../../../styles/profile/sideBarProfile.css'
import { isLoggedIn } from "../../../utils/auth"
import axios from "axios"
import BrowserStore from "../../../utils/BrowserStore"

const SidebarProfile = (props) => {
  const [data,setData]= useState({
    loading : true,
    arr : [] ,
    flag: 0 
  });
  var user;
  if(isLoggedIn())
  {
    user = BrowserStore.get('user-info', true);	
    if(data.flag===0)
    axios.post(`${process.env.REACT_APP_API_URL}/api/v1/experience`,{"user_id":user.id},{headers:{
      'Authorization': `Bearer ${BrowserStore.get("userToken")}`
    }}).then((res)=>{
        setData({
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
    <div className="ha-sidebar-profile">
      <SideBarProfileIntro user={props.profileData.user||"Lorem Epsum"}/>
      <SideBarProfileExp exp = {data.loading?null:data.arr} />
      <SideBarProfileAcad branch = {props.profileData.branch||"Guess Branch"} course = {props.profileData.course||"Guess Course"}/>
    </div>
  )
}

export default SidebarProfile
