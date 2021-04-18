import React from 'react';
// import cssIcon from "../../../images/icons/css.svg";
import { Card } from './CardPortfolio.styles';

const CardPortfolio = ({ imgPrev, imgMobilePrev, title, desc, demo, repo }) => {

  return (
    <Card>
      <img loading="lazy" src={imgMobilePrev} alt={title} />
      <div className="content">
        <div>
          <h2>{title}</h2>
          <p>{desc}</p>
          {/* <div className="technologies">
            <p>{used}:</p>
            <img loading="lazy" src={cssIcon} alt="Javascript" title="CSS" />
            <img loading="lazy" src={cssIcon} alt="Javascript" title="HTML" />
            <img loading="lazy" src={cssIcon} alt="Javascript" title="JavaScript" />
            <img loading="lazy" src={cssIcon} alt="Javascript" title="API" />
          </div> */}
          <div className="links">
            <a rel="noreferrer" target='_blank' href={demo} className="btn">Live</a>
            <a rel="noreferrer" target='_blank' href={repo} className="btn">Repo</a>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CardPortfolio
