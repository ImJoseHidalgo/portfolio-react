import React, { useEffect } from 'react';
import { menuActions } from '../utils/actions';
import twitterIcon from "../images/icons/twitter.svg";
import linkedinIcon from "../images/icons/linkedin.svg";
import githubIcon from "../images/icons/github.svg";
import { Link } from 'react-router-dom';

const Menu = () => {
  useEffect(() => {
    menuActions();
  }, []);

  return (<>
      {/* <!-- BORDES Y BOTON MENU
      =============================== --> */}
      <div className="main-container">
        <header className="header">
          <div className="header-container">
            <div className="logo">
              <Link to='/' >J<span>OSÉ</span>H<span>IDALGO</span></Link>
            </div>
            <div className="languages">
              <Link to='/' className="lang-icon" >EN</Link>
              <Link to='/' className="lang-icon" >ES</Link>
            </div>
          </div>
        </header>
        <div className="bottom">
          <div className="menu-footer">
            <p>© 2020 José Hidalgo - All rights reserved.</p>
            <ul>
              <li><Link to='/' >Inicio</Link></li>
              <li><Link to='/blog' >Blog</Link></li>
              <li><Link to='/about' >Sobre mi</Link></li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="social-container">
            <div className="icon">
              <a target="_blank" rel='noreferrer' href="https://twitter.com/imjosehidalgo" ><img src={twitterIcon} alt="Twitter" /></a>
            </div>
            <div className="icon">
              <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/imjosehidalgo" ><img src={linkedinIcon} alt="Linkedin" /></a>
            </div>
            <div className="icon">
              <a target="_blank" rel='noreferrer' href="https://github.com/imjosehidalgo" ><img src={githubIcon} alt="GitHub" /></a>
            </div>
          </div>
        </div>
        <div className="left"></div>
        <div className="menu-button">
          <div className="button"></div>
          <p>MENU</p>
        </div>
      </div>
      {/* <!-- MENU
      =============================== --> */}
      <div className="menu">
        <div className="menu-background"></div>
        <div className="menu-container">
          <div className="contact">
            <div className="menu-items">
              <li><Link to='/blog' className="menu-blog" >Blog</Link></li>
              <li>
                <a href='/#portfolio' className="menu-portfolio">Portafolio</a>
              </li>
              <li><Link to='/about' className="menu-about" >Sobre Mi</Link></li>
              <li><a className="menu-contact" href="#contact">Contacto</a></li>
            </div>
            <div className="contact-desc">
              <p>
                Si deseas comunicarte conmigo o te interesa comenzar un proyecto
                juntos, pónte en contacto.
              </p>
              <a className="menu-email" href="mailto:josehidalgo990@gmail.com" >Envíame un correo</a>
              <p className="mobile">O envíame un mensaje directo en mis redes sociales.</p>
              <div className="social-container">
                <div className="icon">
                  <a target="_blank" rel='noreferrer' href="https://twitter.com/imjosehidalgo" ><img src={twitterIcon} alt="Twitter" /></a>
                </div>
                <div className="icon">
                  <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/imjosehidalgo" ><img src={linkedinIcon} alt="Linkedin" /></a>
                </div>
                <div className="icon">
                  <a target="_blank" rel='noreferrer' href="https://github.com/imjosehidalgo" ><img src={githubIcon} alt="GitHub" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
