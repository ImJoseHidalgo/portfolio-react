import React from 'react';
import twitterIcon from '../../../images/icons/twitter.svg';
import instagramIcon from '../../../images/icons/instagram.svg';
import linkedinIcon from '../../../images/icons/linkedin.svg';
import { useSelector } from 'react-redux';

const ContactFooter = () => {
  const { text, contDesc } = useSelector(state => state.lang.pageContent.menu);

  return (
    <>
     {/* <!-- SECCIÓN 4 (CONTACTO)
      =============================== --> */}
      <div className="sect-4" id="contact">
        <div className="container">
          <div className="contact-left">
            <h3>{text}</h3>
          </div>
          <div className="contact-right">
            <p>{contDesc.desc}</p>
            <a className="email" href="mailto:josehidalgo990@gmail.com" >{contDesc.em}</a>
            <p className="x">{contDesc.so}</p>
            <div className="contact-footer-social">
              <div className="icon-footer">
                <a target="_blank" rel='noreferrer' href="https://twitter.com/imjosehidalgo"><img src={twitterIcon} alt="Twitter" /></a>
              </div>
              <div className="icon-footer">
                <a target="_blank" rel='noreferrer' href="https://instagram.com/imjosehidalgo" ><img src={instagramIcon} alt="GitHub" /></a>
              </div>
              <div className="icon-footer">
                <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/imjosehidalgo" ><img src={linkedinIcon} alt="Linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default ContactFooter
