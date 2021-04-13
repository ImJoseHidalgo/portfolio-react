import React from 'react'
import proximoIcon from '../../../images/proximo.svg';
import joseDesk from '../../../images/JoseDesktop.png';
import joseResp from '../../../images/JoseResponsive.png';
import { useSelector } from 'react-redux';
import { Section1 } from './LandingHomeSection.styles';
import { Link } from 'react-router-dom';


const LandingHomeSection = () => {
  const { pageContent } = useSelector(state => state.lang)

  return (
    <>
      {/* <!-- SECCIÓN 1 (LANDING)
      =============================== --> */}
      <Section1 className="sect-1">
        {/* <div className="picture"> */}
        <picture className="picture">
          <source media="(min-width: 600px)"
                  srcset={joseDesk} />
          <source media="(min-width: 300px) and (max-width: 600px)"
                  srcset={joseResp} />
          {/* <source media="(max-width: 50px)"
                  srcset={joseResp} /> */}
          <img src={joseDesk} alt="Jose Hidalgo" />
        </picture>
                    {/* <img src={joseImg} alt="profile" /> */}
                    {/* <!-- <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=409x2048:format=png/path/s2327599727345734/image/i20244355d30a7038/version/1549961940/image.png" alt="" /> -->
                    <!-- <img src="images/text.jpg" alt="text" /> --> */}
        {/* </div> */}
        <div className="name-container">
          <h1 className="name">José Hidalgo</h1>
          <h2 className="prof">Frontend Developer</h2>
        </div>
        <div className="portf-container">
          <Link to='/portfolio' >
            <p className="name">
              <i><img src={proximoIcon} alt="arrow" /></i> {pageContent.pl.toUpperCase()}
            </p>
          </Link>
        </div>
      </Section1> 
    </>
  )
}

export default LandingHomeSection
