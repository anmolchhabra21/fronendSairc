import React, { useEffect } from 'react'

import Logo from '../assets/images/campus/logo.png'
import Ism from '../assets/images/campus/ISM.png'
import Bars from '../assets/images/campus/bars.png'
import IsmBg from '../assets/images/campus/ism-bg.png'
import IsmConnect from '../assets/images/campus/ISMConnect.png'
import Polygon from '../assets/images/campus/Polygon.png'
import Ellipse from '../assets/images/campus/ellipse.png'
import Bell from '../assets/images/campus/bell.png'
import Searchmail from '../assets/images/campus/searchmail.png'
import Campus1 from '../assets/images/campus/campus1.jpg'
import Campus2 from '../assets/images/campus/campus2.jpg'
import Campus3 from '../assets/images/campus/campus3.jpg'
import Campus4 from '../assets/images/campus/campus4.png'
import Oval from '../assets/images/campus/oval.jfif'
import Stock from '../assets/images/campus/stock.jfif'
import Polygon1 from '../assets/images/campus/Polygon1.png'
import Polygon9 from '../assets/images/campus/Polygon9.png'
import Polygon10 from '../assets/images/campus/Polygon10.png'
import Heritage from '../assets/images/campus/heritage.jpg'
import Oval2 from '../assets/images/campus/oval2.jfif'
import MainGate from '../assets/images/campus/maingate.jfif'

const Home = () => {
  useEffect(() => {
    const func = () => {
	  document.title = 'Home | ISM Connect'
    }
    func()
  }, [])

  return (
    <>
      <div className='Ntop' style={{ backgroundImage: `url(${Heritage})` }}>
        <div className='Nfirst'>
          <h1 className='Nheading'>TOGETHER, THE LEGACY LIVES ON.</h1>
          <img src={IsmBg} alt='ism' className='Nism_bg' />
          <img src={IsmConnect} alt='ism-connect' className='Nismconnect' />
        </div>
        <img src={Bars} alt='menu-bars' className='Nbars' />
        <div class='Ndropdown'>
          <a
            className='dropdown-toggle link-light'
            href='#aa'
            role='button'
            id='dropdownMenuLink'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Menu
          </a>

          <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <li>
              <a className='dropdown-item' href='#aa'>
                Action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#a'>
                Another action
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#aa'>
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='Nsec'>
        <div className='Nnetwork'>
          <h1 className='Nnetwork1'>JOIN THE</h1>
          <h1 className='Nnetwork2'>NETWORK!</h1>
        </div>
        <img src={Polygon} alt='polygon' className='Npolygon' />
        <img src={Ellipse} alt='ellipse' className='Nellipse2' />
        <img src={Bell} alt='bell' className='Nbell' />
        <p className='Ntext1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut
          asperiores illum nulla modi aut voluptatibus culpa totam eum
          voluptatem. Dolor aliquid voluptate beatae cupiditate autem quae
          quibusdam mollitia unde!
        </p>
        <button className='Nlogin'>Login</button>
        <button className='Nsignup'>Sign Up</button>
      </div>

      <div className='Nthird'>
        <div className='Ndirectory'>
          <h1 className='Nism-dir1'>THE ISM</h1>
          <h1 className='Nism-dir2'>DIRECTORY</h1>
        </div>
        <img src={Polygon} alt='polygon' className='Npolygon-image' />
        <img src={Ellipse} alt='ellipse' className='Ncircle' />
        <img src={Searchmail} alt='mail' className='Nsearch' />
        <p className='Ntext-dir'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut
          asperiores illum nulla modiaut voluptatibus culpa totam eum
          voluptatem. Dolor aliquid voluptate beatae cupiditate autem quae
          quibusdam mollitia unde!
        </p>
        <button className='Nfind'>Find your alumni/peers</button>
      </div>
      <div
        className='Nfourth'
        style={{
		  backgroundImage: `url(${Oval2})`
        }}
      >
        <div className='Nfour' />
        <p className='Ntext3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pellentesque diam non nisl pellentesque maximus. Maecenas efficitur
          eros in erat commodo ultrices. Cras in eros ullamcorper, laoreet ipsum
          eu, feugiat justo. Integer mauris erat, porta nec posuere a, feugiat
          non magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin pellentesque diam non nisl pellentesque maximus. Maecenas
          efficitur eros in erat commodo ultrices. Cras in eros ullamcorper,
          laoreet ipsum eu, feugiat justo. Integer mauris erat, porta nec
          posuere a, feugiat non magna.
        </p>

        <button className='Nidcard'>Generate your Digital ID-Card</button>
      </div>
      <div className='Nfifth' />
    </>
  )
}

export default Home
