import Topbar from '../Topbar'
import '../../../styles/profile/profileHeader.css'
import * as icons from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import axios from 'axios'
import BrowserStore from '../../../utils/BrowserStore'
import { isLoggedIn } from '../../../utils/auth'
const HeaderProfile = () => {
  const [data, setData] = useState({
    loading: true,
    arr: [],
    flag: 0
  })
  let user = {}
  if (isLoggedIn()) {
    user = BrowserStore.get('user-info', true)
    if (data.flag === 0) {
      axios.post(process.env.REACT_APP_API_URL + '/api/v1/findNotification', { user_id: user.id }, {
        headers: {
          Authorization: `Bearer ${BrowserStore.get('userToken')}`
        }
      }).then((res) => {
        setData({
          loading: false,
          arr: res.data,
          flag: 1
        })
        console.log('notification')
        console.log(data)
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <div className='ha-prof-header'>
      <div className='ha-edit-add-profile-header'><button className='ha-btn-white'> <FontAwesomeIcon className='ha-plus-fa' icon={icons.faPlusCircle} /> Add Your Memories</button>
        <FontAwesomeIcon className='ha-info-fa' icon={icons.faInfoCircle} />
      </div>
    </div>
  )
}

export default HeaderProfile
