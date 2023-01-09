import '../../../styles/profile/sideBarProfile.css'
import '../../../styles/profile/sideBarProfileAcad.css'

const SideBarProfileAcad = (props) => {
  const yearPass = 2024
  const branch = props.branch.branch_name || 'Mathematics and Computing'
  const course = props.course.name || 'Int. M.Tech'

  return (
    <div className='ha-sidebar-profile-item ha-sidebar-profile-acad'>
      <h3 className='ha-acad-title'>Academics</h3>
      <div className='ha-sidebar-acad-details'>
        <div><small>Year of Passing</small> <h6>{yearPass}</h6></div>
        <div><small>Branch</small><h6>{branch}</h6></div>
        <div><small>Course</small><h6>{course}</h6></div>
      </div>
    </div>
  )
}

export default SideBarProfileAcad
