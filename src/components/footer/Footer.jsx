import React from 'react'

import './Footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
  return (
    <div>
      <div className='footer'>
        <footer>
        < InstagramIcon className='icons'/>
        < FacebookIcon className='icons'/>
        < WhatsAppIcon className='icons'/>
        < LinkedInIcon className='icons'/> 
        < TwitterIcon className='icons'/>
        </footer>
        <hr />
        <div className='bottom'>
          <span>Home</span>
          <span>|</span>
          <span>About</span>
          <span>|</span>
          <span>Contact</span>
          <span>|</span>
          <span>Services</span>
        </div>
      </div>
      <p className='copyRights'>Copyrights &copy; 2023, All rights reserved.</p>
    </div>
  )
}

export default Footer
