import React, { useEffect } from 'react';
import ContactFooter from '../components/ContactFooter';
import PortfolioSection from '../components/PortfolioSection';
import BlogHomeSection from '../components/BlogHomeSection';
import AboutHomeSection from '../components/AboutHomeSection';
import LandingHomeSection from '../components/LandingHomeSection';
import { homeObserver } from '../utils/intersectionObserver';

const Home = () => {
  useEffect(() => {
    homeObserver();
  }, []);
  
  return (
    <main className="main">
      <LandingHomeSection />
      <AboutHomeSection />
      <BlogHomeSection />
      <PortfolioSection />
      <ContactFooter />
    </main>
  )
}

export default Home;
