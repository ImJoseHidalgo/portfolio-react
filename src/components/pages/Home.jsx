import React, { useEffect } from 'react';
import PortfolioSection from '../PortfolioSection';
import BlogHomeSection from '../BlogHomeSection';
import AboutHomeSection from '../AboutHomeSection';
import LandingHomeSection from '../LandingHomeSection';
import { homeObserver } from '../../utils/intersectionObserver';

const Home = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    homeObserver();
  }, []);
  
  return (
    <main className="main">
      <LandingHomeSection />
      <AboutHomeSection />
      <BlogHomeSection />
      <PortfolioSection />
    </main>
  )
}

export default Home;
