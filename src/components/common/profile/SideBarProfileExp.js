import '../../../styles/profile/sideBarProfile.css'
import '../../../styles/profile/sideBarProfileExp.css'
import complogo from '../../../assets/images/logos/logo.png'


const SideBarProfileExp = (props) => {
  let Exp1 = 'I am exp1'
  let Exp2 = 'I am exp2'
  const ex = (props.exp||['']).map((j,idx)=>
    <li>{j.exp}</li>
  )
  return (
    <div className='ha-sidebar-profile-item ha-sidebar-profile-exp'>
      <h3 className='ha-profile-exp-title'>Experiences</h3>

      <ul className='ha-profile-exp-list'>
        <li className='ha-profile-exp-list-item'>
          <img className='ha-company-logo' src={complogo} alt='CompLogo'/>
          <div><h3>Google India</h3><small>Jan 2021-Present | 11 Months | Full-Time</small></div>
        </li>
        <li className='ha-profile-exp-list-item'>
          <img className='ha-company-logo' src={complogo} alt='CompLogo'/>
          <div><h3>Google India</h3><small>Jan 2021-Present | 11 Months | Full-Time</small></div>
        </li>
      </ul>
      <hr className='ha-more-btn-line' />
      <button className='ha-profile-exp-more-btn'>More ▽</button>
    </div>
  )
}

export default SideBarProfileExp
