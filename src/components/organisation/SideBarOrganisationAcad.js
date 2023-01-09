import '../../styles/organisation/sideBarOrganisation.css'
import '../../styles/organisation/sideBarOrganisationAcad.css'

const SideBarOrganisationAcad = (props) => {
  const yearPass = 2024
  const branch = props.branch.branch_name || 'Mathematics and Computing'
  const course = props.course.name || 'Int. M.Tech'

  return (
    <div className='ha-sidebar-organisation-item ha-sidebar-organisation-acad'>
      <h3 className='ha-acad-title'>Academics</h3>
      <div className='ha-sidebar-acad-details'>
        <div><small>Year of Foundation</small> <h6>{yearPass}</h6></div>
        <div><small>Website</small><h6>{branch}</h6></div>
        <div><small>Course</small><h6>{course}</h6></div>
      </div>
    </div>
  )
}

export default SideBarOrganisationAcad
