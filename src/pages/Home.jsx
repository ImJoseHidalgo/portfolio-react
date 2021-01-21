import React, { useEffect } from 'react';
import ContactFooter from '../components/ContactFooter';
import Menu from '../components/Menu';
import PortfolioSection from '../components/PortfolioSection';
import BlogHomeSection from '../components/BlogHomeSection';
import AboutHomeSection from '../components/AboutHomeSection';
import LandingHomeSection from '../components/LandingHomeSection';
import { homeObserver } from '../utils/intersectionObserver';
import ScrollToTop from '../components/ScrollToTop';
import Cursor from '../components/Cursor';

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

      <Menu />
      <Cursor />
      <ScrollToTop />
    </main>
  )
}

export default Home;
