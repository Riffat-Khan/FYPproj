import React, { useEffect, useRef} from 'react'

import emailjs from '@emailjs/browser';

import './Body.css'

// import Typed from 'typed.js';

import backgroungImage from '../../bgImg.jpg';
import logo from '../../logo_bg.png';
import aboutPhoto from '../../hands.jpg';

// <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>

// const MyTypedComponent = () => {
//   useEffect(() => {
//     // Initialize Typed.js when the component mounts
//     const typingEffect = new Typed(".typedText", {
//       strings: ["Empowering well-being through personalized home care for a dignified and comfortable aging experience.", "Empowering well-being through personalized home care for a dignified and comfortable aging experience."],
//       loop: true,
//       typeSpeed: 100,
//       backSpeed: 80,
//       backDelay: 2000,
//     });
//   })
// };

function Body() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_84khxsg', 'template_qoj021l', form.current, {
        publicKey: 'wftlUB0k9RqKM6d0d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <body>
        <div className='overlay'>
          <img className='bgImage' src= { backgroungImage } alt="background" />
          <div className='mainInfo'>
            <h1 className='heading_main'>Home Care</h1>
            <p className='typedText'>Empowering well-being through personalized home care for a dignified and comfortable aging experience.</p>
            <button className='startedBtn'>Get Started</button>
          </div>
        </div>
        <div className='about'>
          <div className='aboutInfo'>
            <p>
            <h1 className='headings'>About</h1>At Home Care, we are here to help you and your loved ones live comfortably at home. Our dedicated team of caregivers understands the importance of being in a familiar and loving environment as you age. With compassion and expertise, we provide personalized care to meet your unique needs. Whether it's assistance with daily activities, companionship, or healthcare support, we are committed to enhancing your quality of life. Trust us to be your partner in creating a warm and safe home where you can thrive and enjoy every moment.</p>
          </div>
          <img className='aboutPhoto' src={ aboutPhoto } alt="" />
        </div>
        <div className='services'>
         <h1 className='headings'>Why Us</h1>
          <div className='whyBox'>
            <div className='box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam inventore cumque enim molestiae illum vel accusamus reiciendis fuga, amet fugiat, nulla maxime fugit aut autem alias? Sapiente, reiciendis blanditiis?</div>
            <div className='box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus vitae veritatis vel dicta recusandae, cupiditate facilis culpa error, repellat placeat suscipit delectus nemo! Consectetur illo voluptas perspiciatis recusandae est!</div>
            <div className='box'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda rerum eum voluptates at ullam sint, quas amet nisi dolorem minima accusantium natus aliquam minus pariatur provident consequuntur voluptas commodi numquam?</div>
          </div>
          <div className='whyBox'>
            <div className='box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam inventore cumque enim molestiae illum vel accusamus reiciendis fuga, amet fugiat, nulla maxime fugit aut autem alias? Sapiente, reiciendis blanditiis?</div>
            <div className='box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus vitae veritatis vel dicta recusandae, cupiditate facilis culpa error, repellat placeat suscipit delectus nemo! Consectetur illo voluptas perspiciatis recusandae est!</div>
            <div className='box'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda rerum eum voluptates at ullam sint, quas amet nisi dolorem minima accusantium natus aliquam minus pariatur provident consequuntur voluptas commodi numquam?</div>
          </div>
        </div>
      </body>
      <section className="section" id="contact">
        <div className="top-header">
          <h1>Get in touch</h1>
            <span>Do you have any query in your mind? contact us here</span>
        </div>
        <div className="row">
          <div className="col">
            <div className="contact-info">
              <h1>Find Us</h1>
              <p> Email: example@gmail.com</p>
              <p> +92 1234533412</p>
            </div>
          </div>
          <div className="col">
            <div className="form-control">
              <form ref={form} onSubmit={sendEmail}>
              <div className="form-inputs">
                <input type="text" name='from_name' class="input-field" placeholder="Name" />
                <input type="text" name='from_email' class="input-field" placeholder="Email" />
              </div>
              <div className="text-area">
                <textarea name='message' placeholder="Message"></textarea>
              </div>
              <div className="form-button">
                <button ref={form} onClick={sendEmail} className="btn">Send</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Body
