import React, { useEffect } from 'react'
import { topObserver } from '../../../utils/intersectionObserver';
import DetailCard from '../../ui/DetailCard/DetailCard';
import { Container, Section1, Section2, Section3 } from './Portfolio.styles'
import circle from '../../../images/circle.png';
import { useSelector } from 'react-redux';

const PortfolioScreen = () => {
  const { t1, t2, ap1, ap2, cards } = useSelector(state => state.lang.pageContent.portfolio);

  useEffect(() => {
    window.scrollTo(0, 0);
    topObserver();
    document.title = 'Portfolio | José Hidalgo';
  }, []);

  const move = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Section1 id='top'>
        <h1>{t1}</h1>
        <img src={circle} alt="circle"/>
        <img onClick={move} src="https://icongr.am/entypo/chevron-small-down.svg?size=128&color=000000" alt="arrow"/>
      </Section1>
      <Section2 id="sectTwo">
        <Container className='container'>
          <h3>{t2}</h3>
          <div>
            <p>{ap1}</p>
            <p>{ap2} <a className="email" target="_blank" rel='noreferrer' href="https://github.com/imjosehidalgo" >GitHub.</a></p>
          </div>
        </Container>
      </Section2>
      <Section3>
        <div>
          {cards?.map((card, i) => <DetailCard key={i} card={card} />)}
        </div>
      </Section3>
    </>
  )
}

export default PortfolioScreen
