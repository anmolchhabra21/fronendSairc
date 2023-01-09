import pfImage from '../../assets/images/logos/logo.png'

import '../../styles/profile/sideBarProfileIntro.css'
import '../../styles/profile/sideBarProfile.css'

const SidebarIntro = () => {
  const userName = 'Fotomela'
  const batch = 'Feb 18'
  const batchYear = '2022'
  const designation = 'FotoFreaks'
  const connections = 3
  const connectExamples = 'Harshita, Rahul'

  return (
    <div className='ha-sidebar-profile-item ha-sidebar-profile-intro'>
      <img className='ha-profile-dp' src={pfImage} alt='pfImage' />
      <h1 className='ha-profile-username'>{userName}</h1>
      <small className='ha-profile-bio'>{batch} | {batchYear} <br /> {designation}</small>
      <div className='ha-connections'>
        <h4>{connections} people registered</h4>
        <small className='ha-profile-bio ha-tiny-text'>{connectExamples}</small>
        <div className='ha-sidebar-btns-container'>
          <button className='ha-sidebar-btns ha-sidebar-btn-blue'>Register</button>
          {/* <button className='ha-sidebar-btns ha-sidebar-btn-white'>More</button> */}
        </div>
      </div>

    </div>
  )
}

export default SidebarIntro
