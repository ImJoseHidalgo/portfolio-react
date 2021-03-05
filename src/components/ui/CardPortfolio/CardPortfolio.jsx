import React from 'react';
import demo6 from '../../../images/6.jpg';
import cssIcon from "../../../images/icons/css.svg";
import { Card } from './CardPortfolio.styles';

const CardPortfolio = () => {
  return (
    <Card>
      <img loading="lazy" src={demo6} alt="a" />
      <div className="content">
        <div>
          <h2>Proyect Title</h2>
          <p>
            Proyect description, Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Laudantium animi illo maxime eum fugit hic
          </p>
          <div className="technologies">
            <p>Tecnologias usadas:</p>
            <img loading="lazy" src={cssIcon} alt="Javascript" title="CSS" />
            <img loading="lazy" src={cssIcon} alt="Javascript" title="HTML" />
            <img loading="lazy" src={cssIcon} alt="Javascript" title="JavaScript" />
            <img loading="lazy" src={cssIcon} alt="Javascript" title="API" />
          </div>
          <div className="links">
            <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Repo</a>
            <a href="https://github.com/imjosehidalgo" className="btn"><span></span>Live</a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardPortfolio
