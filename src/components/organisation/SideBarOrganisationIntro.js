import pfImage from '../../assets/images/logos/logo.png'
import '../../styles/organisation/sideBarOrganisationIntro.css'
import '../../styles/organisation/sideBarOrganisation.css'

const SideBarOrganisationIntro = (props) => {
  const userName = props.user.name || 'Rakesh Mishra'
  const batch = 'Sophomore'
  const batchYear = "IIT (ISM) Dhanbad '24"
  const designation = 'Media| Media and Brancding Cell'
  const connections = 3
  const connectExamples = 'Harshita, Rahul'
  const profileImage = props.user.image || props.user.linkedinImage || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-organisation-picture-973460__480.png'

  return (
    <div className='ha-sidebar-organisation-item ha-sidebar-organisation-intro'>
      <img className='ha-organisation-dp' src={profileImage} alt='pfImage' />
      <h1 className='ha-organisation-username'>{userName}</h1>
      <small className='ha-organisation-bio'>{batch} | {batchYear} <br /> {designation}</small>
      <div className='ha-connections'>
        <h4>{connections} mutual connections</h4>
        <small className='ha-organisation-bio ha-tiny-text'>{connectExamples}</small>
        <div className='ha-sidebar-btns-container'>
          <button className='ha-sidebar-btns ha-sidebar-btn-blue'>Connect</button>
          {/*If SAIRC account*/}<button className='ha-sidebar-btns ha-sidebar-btn-white'>Export Data</button>
        </div>
      </div>

    </div>
  )
}

export default SideBarOrganisationIntro
