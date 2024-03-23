import React from 'react'

import './Header.css'

// import backgroungImage from '../../bgImg.jpg';
import logo from '../../logo_bg.png';
// import aboutPhoto from '../../hands.jpg';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  return (
    <div>
      <header className='overlay'>

        <div className='subHeader'>

          <div>
            <img src= { logo } alt="logo" />
          </div>

          <div className='middleHeader'>

            <div className='upperHeader'>
              <p className='contact'>Need care at home? For free consultation Contact us!</p>
                < EmailOutlinedIcon className='iconStyle'/>
                < InstagramIcon className='iconStyle'/>
            </div>

            <div className='headerList'>
              <ul className='navBar'>
                <h1 className='home'>Home</h1>
                <h1 className='home'>About</h1>
                <h1 className='home'>Why Us</h1>
                <h1 className='home'>Contact Us</h1>
              </ul>
            </div>

          </div>

          <div className='buttonDiv'>
            <button className='signBtn'>Sign In  
              < Person2OutlinedIcon/>
            </button>
          </div>

        </div>

      </header>
      {/* <div className='info'>
            
        </div> */}
    {/* </div> */}
    </div>
  )
}

export default Header


