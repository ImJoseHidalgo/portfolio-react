import React, { useEffect } from 'react';
import { topObserver } from '../../../utils/intersectionObserver';
import { AboutMe, Container, Section1, Section2, Section3, Skills, TitleContainer } from './AboutScreen.styles';
import wonam from '../../../images/woman.jpg';
import firebaseIcon from '../../../images/icons/firebase.svg';
import ad from '../../../images/icons/adobe1.svg';
import ad1 from '../../../images/icons/adobe.svg';
import boot from '../../../images/icons/bootstrap.svg';
import css from '../../../images/icons/css.svg';
import gith from '../../../images/icons/github.svg';
import html from '../../../images/icons/html-5.svg';
import js from '../../../images/icons/javascript.svg';
import ph from '../../../images/icons/photoshop.svg';
import ra from '../../../images/icons/reaccionar.svg';
import sass from '../../../images/icons/sass.svg';
import wrd from '../../../images/icons/wordpress.svg';
import { useSelector } from 'react-redux';


const About = () => {
  const { about } = useSelector(state => state.lang.pageContent);

  window.scrollTo(0, 0);
  useEffect(() => {
    topObserver();
    document.title = 'Sobre mi | José Hidalgo | Frontend Developer';
  }, [])

  return (
    <>
      <Section1 id='top'>
        <img loading="lazy" src={wonam} alt="perfil"/>
          <div>
            <div className="container">
            <TitleContainer>
              <h2>{about.h1}</h2>
              <h2>{about.h2}</h2>
              <p>{about.p1}</p>
            </TitleContainer>
          </div>
        </div>
      </Section1>

      <Section2>
        <div className="container">
          <AboutMe>
            <h1>{about.abh1}</h1>
            <div>
              <p>{about.abp1}</p>
              <p>{about.abp2}</p>
              <p>{about.abp3}</p>
              <p>{about.abp4}</p>
            </div>
          </AboutMe>
          <AboutMe>
            <h1>{about.skh1}</h1>
            <div>
              <p>{about.skp1}</p>
              <h4>{about.skh41}</h4>
              <Skills>
                <ul>
                  <li><img src={boot} alt="firebase"/>Figma</li>
                  <li><img src={ph} alt="firebase"/>Photoshop</li>
                  <li><img src={ad} alt="firebase"/>Illustrator</li>
                  <li><img src={ad1} alt="firebase"/>Adobe XD</li>
                  <li><img src={firebaseIcon} alt="firebase"/>After Effects</li>
                </ul>
              </Skills>
              <h4>{about.skh42}</h4>
              <Skills>
                <ul>
                  <li><img src={html} alt="firebase"/>HTML</li>
                  <li><img src={css} alt="firebase"/>CSS</li>
                  <li><img src={js} alt="firebase"/>JavaScript</li>
                  <li><img src={js} alt="firebase"/>TypeScript</li>
                  <li><img src={ra} alt="firebase"/>React</li>
                </ul>
                <ul>
                  <li><img src={sass} alt="firebase"/>Node</li>
                  <li><img src={firebaseIcon} alt="firebase"/>Express</li>
                  <li><img src={firebaseIcon} alt="firebase"/>React Native</li>
                  <li><img src={firebaseIcon} alt="firebase"/>Redux</li>
                  <li><img src={firebaseIcon} alt="firebase"/>Firebase</li>
                </ul>
                <ul>
                  <li><img src={firebaseIcon} alt="firebase"/>Postgres</li>
                  <li><img src={gith} alt="firebase"/>Git/GitHub</li>
                  <li><img src={firebaseIcon} alt="firebase"/>NPM</li>
                  <li><img src={firebaseIcon} alt="firebase"/>Yarn</li>
                  <li><img src={wrd} alt="firebase"/>Webpack</li>
                </ul>
              </Skills>
            </div>
          </AboutMe>
        </div>
      </Section2>
      <Section3>
        <Container className="container">
          <h3>{about.mhh3}</h3>
          <p>- Confucius</p>
        </Container>
      </Section3>
    </>
  )
}

export default About;
