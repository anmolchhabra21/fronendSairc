import '../../styles/organisation/sideBarOrganisation.css'
import '../../styles/organisation/sideBarOrganisationExp.css'
import complogo from '../../assets/images/logos/logo.png'


const SideBarOrganisationExp = (props) => {
  let Exp1 = 'I am exp1'
  let Exp2 = 'I am exp2'
  const ex = (props.exp||['']).map((j,idx)=>
    <li>{j.exp}</li>
  )
  return (
    <div className='ha-sidebar-organisation-item ha-sidebar-organisation-exp'>
      <h3 className='ha-organisation-exp-title'>Experiences</h3>

      <ul className='ha-organisation-exp-list'>
        <li className='ha-organisation-exp-list-item'>
          <img className='ha-company-logo' src={complogo} alt='CompLogo'/>
          <div><h3>Google India</h3><small>Jan 2021-Present | 11 Months | Full-Time</small></div>
        </li>
        <li className='ha-organisation-exp-list-item'>
          <img className='ha-company-logo' src={complogo} alt='CompLogo'/>
          <div><h3>Google India</h3><small>Jan 2021-Present | 11 Months | Full-Time</small></div>
        </li>
      </ul>
    </div>
  )
}

export default SideBarOrganisationExp
