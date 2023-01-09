import SideBarOrganisationIntro from "./SideBarOrganisationIntro"
import SideBarOrganisationExp from "./SideBarOrganisationExp"
import SideBarOrganisationAcad from "./SideBarOrganisationAcad"
import {useState} from 'react'
import { isLoggedIn } from "../../utils/auth"
import axios from "axios"
import BrowserStore from "../../utils/BrowserStore"

import '../../styles/organisation/sideBarOrganisation.css'

const SidebarOrganisation = (props) => {
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
    <div className="ha-sidebar-organisation">
      <SideBarOrganisationIntro user={props.profileData.user||"Lorem Epsum"}/>
      <SideBarOrganisationExp exp = {data.loading?null:data.arr} />
      <SideBarOrganisationAcad branch = {props.profileData.branch||"Guess Branch"} course = {props.profileData.course||"Guess Course"}/>
    </div>
  )
}

export default SidebarOrganisation
