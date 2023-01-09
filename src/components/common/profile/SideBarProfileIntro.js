import pfImage from "../../../assets/images/logos/logo.png";
import "../../../styles/profile/sideBarProfileIntro.css";
import "../../../styles/profile/sideBarProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import SideBarEditModal from "./SideBarEditModal";
import { useState } from "react";

// const editHandleClick = () => {
//   alert("button was clicked");
//   return(<SideBarEditModal 
//   showModal={true}
//   />)
// };

const SideBarProfileIntro = (props) => {
const [show, setShow]= useState(false);

const  hanldesetModal= ()=> setShow(pre=>!pre);
  
  const userName = props.user.name || "Rakesh Mishra";
  const batch = "Sophomore";
  const batchYear = "IIT (ISM) Dhanbad '24";
  const designation = "Media| Media and Brancding Cell";
  const connections = 3;
  const connectExamples = "Harshita, Rahul";
  const profileImage =
    props.user.image ||
    props.user.linkedinImage ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png";

  return (
    <div className="ha-sidebar-profile-item ha-sidebar-profile-intro">
    { show && <SideBarEditModal show={show} />}
      <div className="div_ha_edit_sidebar d-flex">
        <img className="ha-profile-dp" src={profileImage} alt="pfImage" />
        <div style={{ fontSize: "20px" }}>
          <FontAwesomeIcon
            onClick={
             ()=> {hanldesetModal()}
            }
            className="ha_edit_sidebar_icon"
            icon={icons.faEllipsisV}
          />
        </div>
      </div>
      <h1 className="ha-profile-username">{userName}</h1>
      <small className="ha-profile-bio">
        {batch} | {batchYear} <br /> {designation}
      </small>
      <div className="ha-connections">
        <h4>{connections} mutual connections</h4>
        <small className="ha-profile-bio ha-tiny-text">{connectExamples}</small>
        <div className="ha-sidebar-btns-container">
          <button className="ha-sidebar-btns ha-sidebar-btn-blue">
            Connect
          </button>
          <button className="ha-sidebar-btns ha-sidebar-btn-white">More</button>
        </div>
      </div>
    </div>
  );
};

export default SideBarProfileIntro;
