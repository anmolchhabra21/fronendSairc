import { ToastContainer } from 'react-toastify'
// eslint-disable-next-line no-unused-vars
import { connect, dispatch } from 'react-redux'

import Routes from './utils/Routes'
import setDefaultRequestHeaders from './utils/headers'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import './styles/App.css'
import './styles/home.css'

function App () {
  setDefaultRequestHeaders()
  return (
    <div className=''>

      <Routes />

      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default App
