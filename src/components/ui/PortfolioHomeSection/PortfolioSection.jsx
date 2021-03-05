import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { Container, Section3 } from './PortfolioHomeSection.styles';

const PortfolioSection = () => {
  const { pageContent } = useSelector(state => state.lang)
  const { desc, butt } = useSelector(state => state.lang.pageContent.homePort);

  return (
    <>
      {/* <!-- SECCIÓN 3 (PORTAFOLIO)
      =============================== --> */}
      <Section3 className="sect-3" id="portfolio">
        <Container className="container">
          <div className="title">
            <h2>{pageContent.pl.toUpperCase()}</h2>
            <div className="line"></div>
            <h3>{desc}</h3>
            <Link to='/portfolio'>{butt}</Link>
          </div>
          <div className="previews">
            <CardPortfolio />
            <CardPortfolio />
            <CardPortfolio />
            {/* <div className="card">
              <img src={demo10} alt="a" />
              <div className="content">
                <div>
                  <h2>Proyect Title</h2>
                  <p>
                    Proyect description, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laudantium animi illo maxime eum fugit hic
                  </p>
                  <div className="technologies">
                    <p>Tecnologias usadas:</p>
                    <img src={cssIcon} alt="Javascript" title="CSS" />
                    <img src={cssIcon} alt="Javascript" title="HTML" />
                    <img src={cssIcon} alt="Javascript" title="JavaScript" />
                    <img src={cssIcon} alt="Javascript" title="API" />
                  </div>
                  <div className="links">
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Repo</a>
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Live</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
            <img src={demo6} alt="a" />
              <div className="content">
                <div>
                  <h2>Proyect Title</h2>
                  <p>
                    Proyect description, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laudantium animi illo maxime eum fugit hic
                  </p>
                  <div className="technologies">
                    <p>Tecnologias usadas:</p>
                    <img src={cssIcon} alt="Javascript" title="CSS" />
                    <img src={cssIcon} alt="Javascript" title="HTML" />
                    <img src={cssIcon} alt="Javascript" title="JavaScript" />
                    <img src={cssIcon} alt="Javascript" title="API" />
                  </div>
                  <div className="links">
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Repo</a>
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Live</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={demo10} alt="a" />
              <div className="content">
                <div>
                  <h2>Proyect Title</h2>
                  <p>
                    Proyect description, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laudantium animi illo maxime eum fugit hic
                  </p>
                  <div className="technologies">
                    <p>Tecnologias usadas:</p>
                    <img src={cssIcon} alt="Javascript" title="CSS" />
                    <img src={cssIcon} alt="Javascript" title="HTML" />
                    <img src={cssIcon} alt="Javascript" title="JavaScript" />
                    <img src={cssIcon} alt="Javascript" title="API" />
                  </div>
                  <div className="links">
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Repo</a>
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Live</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={demo6} alt="a" />
              <div className="content">
                <div>
                  <h2>Proyect Title</h2>
                  <p>
                    Proyect description, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laudantium animi illo maxime eum fugit hic
                  </p>
                  <div className="technologies">
                    <p>Tecnologias usadas:</p>
                    <img src={cssIcon} alt="Javascript" title="CSS" />
                    <img src={cssIcon} alt="Javascript" title="HTML" />
                    <img src={cssIcon} alt="Javascript" title="JavaScript" />
                    <img src={cssIcon} alt="Javascript" title="API" />
                  </div>
                  <div className="links">
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Repo</a>
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Live</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={demo10} alt="a" />
              <div className="content">
                <div>
                  <h2>Proyect Title</h2>
                  <p>
                    Proyect description, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laudantium animi illo maxime eum fugit hic
                  </p>
                  <div className="technologies">
                    <p>Tecnologias usadas:</p>
                    <img src={cssIcon} alt="Javascript" title="CSS" />
                    <img src={cssIcon} alt="Javascript" title="HTML" />
                    <img src={cssIcon} alt="Javascript" title="JavaScript" />
                    <img src={cssIcon} alt="Javascript" title="API" />
                  </div>
                  <div className="links">
                    <a href="https://github.com/imjosehidalgo/des1" className="btn"><span></span>Repo</a>
                    <a href="https://des1.vercel.app/" className="btn"><span></span>Live</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={demo6} alt="a" />
              <div className="content">
                <div>
                  <h2>Proyect Title</h2>
                  <p>
                    Proyect description, Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laudantium animi illo maxime eum fugit hic
                  </p>
                  <div className="technologies">
                    <p>Tecnologias usadas:</p>
                    <img src={cssIcon} alt="Javascript" title="CSS" />
                    <img src={cssIcon} alt="Javascript" title="HTML" />
                    <img src={cssIcon} alt="Javascript" title="JavaScript" />
                    <img src={cssIcon} alt="Javascript" title="API" />
                  </div>
                  <div className="links">
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Repo</a>
                    <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Live</a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </Container>
      </Section3> 
    </>
  )
}

export default PortfolioSection
