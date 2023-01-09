import '../../styles/profile/sideBarProfile.css'
import '../../styles/profile/sideBarProfileExp.css'

const SideBarProfileExp = () => {
  return (
    <div className='ha-sidebar-profile-item ha-sidebar-profile-exp'>
      <h3 className='ha-profile-exp-title'>Previous events</h3>
      <ul className='ha-profile-exp-list'>
        <li>2019</li>
        <li>2018</li>
      </ul>
      <hr className='ha-more-btn-line' />
      <button className='ha-profile-exp-more-btn'>More ▽</button>
    </div>
  )
}

export default SideBarProfileExp
