import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'

import '../styles/error/404.css'

const ErrorPage = () => {
  useEffect(() => {
    document.title = '404 | ISM Connect'
  }, [])

  return (
    <Fade>
      <div id='notfound'>
        <div class='notfound'>
          <div class='notfound-404'>
            <h1>
              4<FontAwesomeIcon className='fa-spin far' icon={faQuestionCircle} />4
            </h1>
          </div>
          <p>
            Maybe this page moved?
            Got deleted?
            Is hiding out in quarantine?
            Never existed in the first place?
          </p>
          <Link to='/'> <FontAwesomeIcon icon={faArrowLeft} /> Home Page</Link>
        </div>
      </div>
    </Fade>
  )
}

export default ErrorPage
