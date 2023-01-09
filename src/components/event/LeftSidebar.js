import SidebarIntro from './SidebarIntro'
import SidebarExp from './SidebarExp'
import SidebarAcad from './SidebarAcad'

import '../../styles/profile/sideBarProfile.css'

const SidebarProfile = () => {
  return (
    <div className='ha-sidebar-profile'>
      <SidebarIntro />
      <SidebarExp />
      <SidebarAcad />
    </div>
  )
}

export default SidebarProfile
