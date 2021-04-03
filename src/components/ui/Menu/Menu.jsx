import React, { useEffect } from 'react';
import { menuActions } from '../../../utils/actions';
import twitterIcon from "../../../images/icons/twitter.svg";
import linkedinIcon from "../../../images/icons/linkedin.svg";
import githubIcon from "../../../images/icons/github.svg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEnglish, setEspanish } from '../../../actions/lang';
import { MainContainer, MenuBackGround, MenuButton, MenuContainer, MenuStyles } from './Menu.styles';

const Menu = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { footer, menuList, contDesc } = useSelector(state => state.lang.pageContent.menu);

  useEffect(() => {
    menuActions();
  }, []);

  const setLangEnglish = () => {
    dispatch(setEnglish());
    document.body.id = 'en';
  }
  
  const setLangEspanish = () => {
    dispatch(setEspanish());
    document.body.id = 'es';
  }

  return (<>
      {/* <!-- BORDES Y BOTON MENU
      =============================== --> */}
      <MainContainer className="main-container">
        <header className="header">
          <div className="header-container">
            <div className="logo">
              <Link to='/' id='home-link' >J<span>OSÉ</span>H<span>IDALGO</span></Link>
            </div>
            <div className={(pathname.includes('contact') || pathname.includes('blog')) ? "languages activeresp" : "languages"}>
              <button onClick={setLangEnglish} className="lang-icon" >EN</button>
              <button onClick={setLangEspanish} className="lang-icon" >ES</button>
            </div>
          </div>
        </header>
        <div className="bottom">
          <div className="menu-footer">
            <p>{footer}</p>
            <ul>
              <li><NavLink activeClassName='link__active' exact to='/' >{menuList.ho}</NavLink></li>
              <li><NavLink activeClassName='link__active' exact to='/blog' >{menuList.bl}</NavLink></li>
              <li><NavLink activeClassName='link__active' to='/about' >{menuList.ab}</NavLink></li>
              <li><NavLink activeClassName='link__active' to='/portfolio' >{menuList.po}</NavLink></li>
              <li><NavLink activeClassName='link__active' to='/contact' >{menuList.co}</NavLink></li>
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
        <MenuButton className="menu-button">
          <div className="button"></div>
          <p>MENU</p>
        </MenuButton>
      </MainContainer>
      {/* <!-- MENU
      =============================== --> */}
      <MenuStyles className="menu">
        <MenuBackGround className="menu-background"></MenuBackGround>
        <MenuContainer className="menu-container">
          <div className="contact">
            <div className="menu-items">
              <li><NavLink activeClassName='link__active' exact to='/' className="menu-home" >{menuList.ho}</NavLink></li>
              <li><NavLink activeClassName='link__active' exact to='/blog' className="menu-blog" >{menuList.bl}</NavLink></li>
              <li><NavLink activeClassName='link__active' to='/about' className="menu-about" >{menuList.ab}</NavLink></li>
              <li><NavLink activeClassName='link__active' to='/portfolio' className="menu-portfolio">{menuList.po}</NavLink></li>
              <li><NavLink activeClassName='link__active' to="/contact" className="menu-contact">{menuList.co}</NavLink></li>
            </div>
            <div className="contact-desc">
              <p>{contDesc.desc}</p>
              <a className="menu-email" href="mailto:josehidalgo990@gmail.com" >{contDesc.em}</a>
              <p className="mobile">{contDesc.so}</p>
              <div className="social-container">
                <div className="icon">
                  <a target="_blank" rel='noreferrer' href="https://linkedin.com/in/imjosehidalgo" ><img src={linkedinIcon} alt="Linkedin" /></a>
                </div>
                <div className="icon">
                  <a target="_blank" rel='noreferrer' href="https://github.com/imjosehidalgo" ><img src={githubIcon} alt="GitHub" /></a>
                </div>
                <div className="icon">
                  <a target="_blank" rel='noreferrer' href="https://twitter.com/imjosehidalgo" ><img src={twitterIcon} alt="Twitter" /></a>
                </div>
              </div>
            </div>
          </div>
        </MenuContainer>
      </MenuStyles>
    </>
  )
}

export default Menu
