import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'

import avatar from '../../assets/images/logos/logo.png'

import '../../styles/landing/blogs.css'

const blogs = [
  {}, {}, {}, {}, {}
]

export default class Blogs extends Component {
  render () {
    return (
      <div className='container d-flex flex-column landing-blogs-container'>
        <div className='d-flex align-items-center justify-content-center landing-blogs-container-header'>
          <div>
            <h1 className='text-blue fw-bold'>BLOGS</h1>
          </div>
        </div>
        <div className='landing-blogs-list-container'>
          {(this.props.blogs || blogs).map((b, idx) =>
            <div className='landing-blog-container' key={idx}>
              <div className='landing-blog-picture-container'>
                <div className='landing-blog-picture'>
                  <Image src={avatar} width='200px' />
                </div>
                <div className='landing-blog-picture-text-container'>
                  <p className='landing-blog-picture-text'>
                    STUART PHILIPS<br />
                    Petroleum Engineering<br />
                    1926
                  </p>
                </div>
              </div>
              <div className='landing-blog-text-container'>
                <div className='landing-blog-text-preview'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt faucibus ullamcorper..."
                </div>
                <div className='landing-blog-text-more'>
                  <Link to='/blogs' style={{ textDecoration: 'none' }}>
                    More &gt;&gt;
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
        <div className='bg-blue d-flex align-items-center justify-content-center landing-blogs-container-footer'>
          <div>
            <Link to='/blogs' style={{ textDecoration: 'none' }}>
              <h1 className='text-white'>VIEW ALL</h1>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
