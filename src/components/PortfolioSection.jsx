import React from 'react';
import demo6 from '../images/6.jpg';
import demo10 from '../images/10.png';
import cssIcon from "../images/icons/css.svg";

const PortfolioSection = () => {
  return (
    <>
      {/* <!-- SECCIÓN 3 (PORTAFOLIO)
      =============================== --> */}
      <div className="sect-3" id="portfolio">
        <section className="container">
          <div className="title">
            <h2>Portfolio</h2>
            <div className="line"></div>
            <h3>Algunos de mis proyectos de estos ultimos meses</h3>
          </div>
          <div className="previews">
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
            </div>
          </div>
        </section>
      </div> 
    </>
  )
}

export default PortfolioSection
