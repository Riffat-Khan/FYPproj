import React from 'react'

import './User.css'

// import backgroungImage from '../../bgImg.jpg';
import logoTrans from '../../logo_2.png';
// import aboutPhoto from '../../hands.jpg';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import profile from './profile.png'

const Header = () => {
  return (

    <div>

    <header>
        <div>
            <img src= { logoTrans } alt="logo" />
        </div>

        <div className='account'>
            Account
        </div>
    </header>

    <main>
      <div className='profileBox'>
        <div className='status'> 
          <div className='indicator'> . </div>
          <p>Online</p>
        </div>
        <div className='profileImage'>
          <img className='proImage' src= {profile} alt="profileImage" />
        </div>
        <div className='userName'></div>
        <hr />
        <div className='details'></div>
      </div>
    </main>

    </div>
    // <div>
    //   <header className='overlay'>

    //     <div className='subHeader'>

    //       <div>
    //         <img src= { logoTrans } alt="logo" />
    //       </div>

    //       <div>
    //         Account
    //       </div>

    //     </div>

    //   </header>
    // </div>
  )
}

export default Header


