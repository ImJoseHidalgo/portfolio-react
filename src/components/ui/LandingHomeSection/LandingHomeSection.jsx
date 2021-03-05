import React from 'react'
import proximoIcon from '../../../images/proximo.svg';
import joseImg from '../../../images/jose.png';
import { useSelector } from 'react-redux';


const LandingHomeSection = () => {
  const { pageContent } = useSelector(state => state.lang)

  return (
    <>
      {/* <!-- SECCIÓN 1 (LANDING)
      =============================== --> */}
      <div className="sect-1">
        <div className="picture">
          <img src={joseImg} alt="profile" />
          {/* <!-- <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=409x2048:format=png/path/s2327599727345734/image/i20244355d30a7038/version/1549961940/image.png" alt="" /> -->
          <!-- <img src="images/text.jpg" alt="text" /> --> */}
        </div>
        <div className="name-container">
          <h1 className="name">José Hidalgo</h1>
          <h2 className="prof">Frontend Developer</h2>
        </div>
        <div className="portf-container">
          <a href="#portfolio" >
            <p className="name">
              <i><img src={proximoIcon} alt="arrow" /></i> {pageContent.pl.toUpperCase()}
            </p>
          </a>
        </div>
      </div> 
    </>
  )
}

export default LandingHomeSection
