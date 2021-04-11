import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { Container, Section3 } from './PortfolioHomeSection.styles';

const PortfolioSection = () => {
  const { pageContent } = useSelector(state => state.lang)
  const { desc, butt } = useSelector(state => state.lang.pageContent.homePort);
  const { cards } = useSelector(state => state.lang.pageContent.portfolio);

  const previewCards = cards && cards.slice(0, 3);

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
            <Link to='/portfolio'>
              {butt}
              <img src="https://icongr.am/entypo/chevron-small-right.svg?size=128&color=ffffff" alt="arrow"/>
            </Link>
          </div>
          <div className="previews">
            {previewCards.map((card, i) => 
              <CardPortfolio 
                key={i}
                imgPrev={card.img}
                imgMobilePrev={card.imgMobile}
                title={card.title}
                desc={card.desc}
                demo={card.linkDemo}
                repo={card.linkRepo}
              />
            )}
          </div>
        </Container>
      </Section3> 
    </>
  )
}

export default PortfolioSection
