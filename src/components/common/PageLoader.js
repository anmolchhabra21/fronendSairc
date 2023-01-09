import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Image } from 'react-bootstrap'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import '../../styles/loader/loader.css'

import logo from '../../assets/images/logos/logo.png'

class PageLoader extends Component {
  render () {
    return (
      <div id='loader-container'>
        <div style={{ margin: '10px auto' }}>
          {this.props.imageLoader
            ? <Image src={logo} height='200px' width='200px' />
            : <Loader
                type={this.props.type || 'Puff'}
                arialLabel='tail-spin-loading'
                color={this.props.color || '#01218B'}
                visible
                secondaryColor='transparent'
                height={this.props.height || '200'}
                width={this.props.width || '200'}
              />}
        </div>
      </div>
    )
  }
}

export default withRouter(PageLoader)
