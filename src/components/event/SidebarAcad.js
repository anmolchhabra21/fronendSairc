import '../../styles/profile/sideBarProfile.css'
import '../../styles/profile/sideBarProfileAcad.css'

const SideBarProfileAcad = () => {
  const yearPass = 2022
  const branch = 'FotoFreaks'
  const course = 'Cultural'

  return (
    <div className='ha-sidebar-profile-item ha-sidebar-profile-acad'>
      <h3 className='ha-acad-title'>Academics</h3>
      <div className='ha-sidebar-acad-details'>
        <div><small>Year of Passing</small> <h7>{yearPass}</h7></div>
        <div><small>Branch</small><h7>{branch}</h7></div>
        <div><small>Course</small><h7>{course}</h7></div>
      </div>
    </div>
  )
}

export default SideBarProfileAcad
