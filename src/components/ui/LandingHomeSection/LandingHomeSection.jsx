import React, { useEffect, useRef } from 'react';
import proximoIcon from '../../../images/proximo.svg';
// import joseDesk from '../../../images/JoseDesktop.png';
// import joseResp from '../../../images/JoseResponsive.png';
import { useSelector } from 'react-redux';
import { Section1 } from './LandingHomeSection.styles';
import { Link } from 'react-router-dom';


const LandingHomeSection = () => {
  const { pageContent } = useSelector(state => state.lang)
  const item1 = useRef(null);
  const item2 = useRef(null);
  const picture = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    picture?.current?.classList.add('onload');
    item1?.current?.classList?.add('onload');
    item2?.current?.classList?.add('onload');
    background?.current?.classList?.add('onload');
  }, []);

  return (
    <>
      {/* <!-- SECCIÓN 1 (LANDING)
      =============================== --> */}
      <Section1 className="sect-1">
        {/* <div className="picture"> */}
        <picture className="picture" ref={picture}>
          <source media="(min-width: 768px)"
                  srcSet='https://res.cloudinary.com/dwqr4s7gp/image/upload/v1619578981/desktopNewProfile_1_rcis12.png' />
          <source media="(min-width: 300px) and (max-width: 768px)"
                  srcSet='https://res.cloudinary.com/dwqr4s7gp/image/upload/v1619578982/mobileNewProfile_1_jixybl.png' />
          {/* <source media="(max-width: 50px)"
                  srcset={joseResp} /> */}
          <img src='https://res.cloudinary.com/dwqr4s7gp/image/upload/v1619578981/desktopNewProfile_1_rcis12.png' alt="Jose Hidalgo" />
        </picture>
                    {/* <img src={joseImg} alt="profile" /> */}
                    {/* <!-- <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=409x2048:format=png/path/s2327599727345734/image/i20244355d30a7038/version/1549961940/image.png" alt="" /> -->
                    <!-- <img src="images/text.jpg" alt="text" /> --> */}
        {/* </div> */}
        <div className="name-container" ref={item1}>
          <h1 className="name">José Hidalgo</h1>
          <h2 className="prof">Frontend Developer</h2>
        </div>
        <div className="portf-container" ref={item2}>
          <Link to='/portfolio' >
            <p className="name">
              <i><img src={proximoIcon} alt="arrow" /></i> {pageContent.pl.toUpperCase()}
            </p>
          </Link>
        </div>
        <div className="onload-bg" ref={background}>
          <div className="text">
            <h1>WELLCOME 👋</h1>
          </div>
        </div>
      </Section1>
    </>
  )
}

export default LandingHomeSection
